// Dependencies
import axios from "axios";
import axiosInstance from "../configs/axios";
import { createContext, useEffect, useState } from "react";

// Types
import { PokemonType, PokemonTypesResponse, PokemonsByType } from "../models/PokemonTypes";
import { Pokemon, PokemonResponse, PokemonResult, PokemonSpecieResponse, PokemonsResponse } from "../models/Pokemon";
import { FormatPokemonDataTypes, PokedexContextType, PokedexProviderProps } from "../models/Pokedex";



const defaultValues: PokedexContextType = {
    showFilterModal: false,
    setShowFilterModal: () => { },
    pokemonTypes: [],
    pokemons: [],
    pokemonsCount: null,
    limit: 12,
    toggleTypesFilter: () => { },
    loadMorePokemon: () => { },
    typesFilter: [],
    isLoading: false,
    searchName: () => { },
    pokemonInModal: null,
    setPokemonInModal: () => { }
}

export const PokedexContex = createContext(defaultValues);

const formatPokemonData = ({ specieData, pokemonData }: FormatPokemonDataTypes): Pokemon => {
    const abilities = pokemonData.abilities.map(ability => ability.ability.name);
    const types = pokemonData.types.map(type => type.type.name);

    const findStatValue = (statName: string): number | null => {
        return pokemonData.stats.find(stat => {
            if (stat.stat.name === statName) return stat
        })?.base_stat ?? null;
    }

    const attack = findStatValue("attack");
    const hp = findStatValue("hp");
    const defense = findStatValue("defense");
    const spAttack = findStatValue("special-attack");
    const spDefense = findStatValue("special-defense");
    const experience = pokemonData.base_experience;

    return {
        id: pokemonData.id,
        name: pokemonData.name,
        types,
        abilities,
        image: pokemonData.sprites.other["official-artwork"].front_default,
        generation: specieData.generation.name,
        order: pokemonData.order,
        stats: {
            attack,
            hp,
            defense,
            spAttack,
            spDefense,
            experience
        }
    };
}

const fetchPokemonBySpecie = async (url: string): Promise<Pokemon> => {
    const specieData = (await axios.get<PokemonSpecieResponse>(url)).data;
    const pokemonData = (await axios.get<PokemonResponse>(specieData.varieties[0].pokemon.url)).data;

    const pokemon = formatPokemonData({ specieData, pokemonData });
    return pokemon;
}

const fetchPokemon = async (url: string): Promise<Pokemon> => {
    const pokemonData = (await axios.get<PokemonResponse>(url)).data;
    const specieData = (await axios.get<PokemonSpecieResponse>(pokemonData.species.url)).data;

    const pokemon = formatPokemonData({ specieData, pokemonData });
    return pokemon;
}

const limit = 12;
const nextUrlInitialValue = `https://pokeapi.co/api/v2/pokemon-species?limit=${limit}`;

let typesFetched: boolean = false;
let pokemonTypes: PokemonType[] = [];

let lastUrl: string | null = null;
let nextUrl: string | null = nextUrlInitialValue;

let notLoadedPokemon: PokemonResult[] = [];
let typesFilter: string[] = [];

const PokedexProvider = ({ children }: PokedexProviderProps) => {
    const [showFilterModal, setShowFilterModal] = useState<boolean>(false);
    const [pokemonInModal, setPokemonInModal] = useState<Pokemon | null>(null);

    const [pokemonsCount, setPokemonsCount] = useState<number | null>(null);
    const [pokemons, setPokemons] = useState<Pokemon[]>([]);

    const [isLoading, setIsLoading] = useState<boolean>(false);

    const fetchPokemons = async (): Promise<void> => {
        if (lastUrl === nextUrl) return;
        if (!nextUrl) return;

        setIsLoading(true);
        lastUrl = nextUrl;

        const { data } = await axios.get<PokemonsResponse>(nextUrl);

        nextUrl = data.next;
        setPokemonsCount(data.count);

        const newPokemonList: Pokemon[] = [];

        for (const result of data.results) {
            const newPokemon = await fetchPokemonBySpecie(result.url);
            newPokemonList.push(newPokemon);
        }

        setPokemons(prevPokemons => [...prevPokemons, ...newPokemonList]);
        setIsLoading(false);
    }

    const loadNotLoadedPokemon = async (): Promise<void> => {
        const newPokemonList: Pokemon[] = [];
        setIsLoading(true);

        let i = 0;

        while (i < limit && notLoadedPokemon.length) {
            try {
                const newPokemon = await fetchPokemon(notLoadedPokemon[i].url);
                newPokemonList.push(newPokemon);
            } catch (err) {
                console.error(err);
            } finally {
                i++;
            }
        }

        notLoadedPokemon.splice(0, i);

        setPokemons(prevPokemons => [...prevPokemons, ...newPokemonList]);
        setIsLoading(false);
    }

    const fetchPokemonByTypes = async (): Promise<void> => {
        const newNotLoadedPokemon: PokemonResult[] = []
        for (const type of typesFilter) {
            const { pokemon } = (await axiosInstance.get<PokemonsByType>(`type/${type}`)).data;

            for (const p of pokemon) {
                const newPokemon = { name: p.pokemon.name, url: p.pokemon.url };

                if (newNotLoadedPokemon.map(nl => nl.name).includes(newPokemon.name))
                    continue;

                newNotLoadedPokemon.push(newPokemon);
            }
        }

        newNotLoadedPokemon.sort((a, b) => {
            const idA = Number(a.url.replace("https://pokeapi.co/api/v2/pokemon/", "").replace("/", ""));
            const idB = Number(b.url.replace("https://pokeapi.co/api/v2/pokemon/", "").replace("/", ""));

            return idA - idB;
        });

        notLoadedPokemon = [...newNotLoadedPokemon];
    }

    const loadMorePokemon = () => {
        if (isLoading) return;

        if (typesFilter.length)
            loadNotLoadedPokemon();
        else
            fetchPokemons();
    }

    const toggleTypesFilter = async (updatedType: string): Promise<void> => {
        if (typesFilter.includes(updatedType))
            typesFilter = typesFilter.filter(type => type !== updatedType);
        else
            typesFilter.push(updatedType);

        notLoadedPokemon = [];
        setPokemons([]);

        if (!typesFilter.length) {
            lastUrl = null;
            nextUrl = nextUrlInitialValue;
            await fetchPokemons();
            return;
        }

        await fetchPokemonByTypes();
        await loadNotLoadedPokemon();
    }

    const searchName = async (search: string): Promise<void> => {
        setIsLoading(true);

        typesFilter = [];
        notLoadedPokemon = [];
        lastUrl = null;
        nextUrl = nextUrlInitialValue;

        search = search.trim().toLowerCase();

        if (!search) {
            setPokemons([]);
            fetchPokemons();
            return;
        }

        try {
            const pokemonData = (await axiosInstance.get<PokemonResponse>(`pokemon/${search}`)).data;
            const specieData = (await axiosInstance.get<PokemonSpecieResponse>(`pokemon-species/${search}`)).data;

            const pokemon = formatPokemonData({ specieData, pokemonData });

            setPokemons([pokemon]);
        } catch (err) {
            setPokemons([]);
        } finally {
            setIsLoading(false);
        }
    }

    // Fetch pokemon types
    useEffect(() => {
        if (typesFetched) return;

        (async () => {
            const { data } = await axiosInstance.get<PokemonTypesResponse>("type");
            pokemonTypes = [...data.results];
        })();

        typesFetched = true;
    }, []);

    // Fetch pokemons
    useEffect(() => {
        loadMorePokemon();
    }, []);

    return (
        <PokedexContex.Provider value={{
            showFilterModal,
            setShowFilterModal,
            pokemonTypes,
            pokemons,
            pokemonsCount,
            limit,
            toggleTypesFilter,
            loadMorePokemon,
            typesFilter,
            isLoading,
            searchName,
            pokemonInModal,
            setPokemonInModal,
        }}>
            {children}
        </PokedexContex.Provider>
    )
}

export default PokedexProvider;