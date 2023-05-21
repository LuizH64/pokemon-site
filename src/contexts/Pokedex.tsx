// Dependencies
import axios from "axios";
import axiosInstance from "../configs/axios";
import { SetStateAction, createContext, useEffect, useState } from "react";

// Types
import { PokemonType, PokemonTypesResponse, PokemonsByType } from "../models/PokemonTypes";
import { Pokemon, PokemonResponse, PokemonResult, PokemonSpecieResponse, PokemonsResponse } from "../models/Pokemon";


interface PokedexContextType {
    showFilterModal: boolean,
    setShowFilterModal: React.Dispatch<SetStateAction<boolean>>,
    pokemonTypes: PokemonType[],
    pokemons: Pokemon[],
    pokemonsCount: number | null,
    limit: number,
    toggleTypesFilter: (updatedType: string) => void,
    loadMorePokemon: () => void,
    typesFilter: string[],
    isLoading: boolean
}

interface PokedexProviderProps {
    children: React.ReactNode
}

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
    isLoading: false
}


export const PokedexContex = createContext(defaultValues);

interface FormatPokemonDataTypes {
    specieData: PokemonSpecieResponse
    pokemonData: PokemonResponse
}

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
        id: specieData.id,
        name: specieData.name,
        types,
        abilities,
        image: pokemonData.sprites.other["official-artwork"].front_default,
        generation: specieData.generation,
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
                notLoadedPokemon.splice(i, 1);
                i++;
            } catch (err) {
                console.error(err);
                notLoadedPokemon.splice(i, 1);
                i++;
            }
        }

        setPokemons(prevPokemons => [...prevPokemons, ...newPokemonList]);
        setIsLoading(false);
    }

    const fetchPokemonByTypes = async (): Promise<void> => {
        for (const type of typesFilter) {
            const { pokemon } = (await axiosInstance.get<PokemonsByType>(`type/${type}`)).data;

            for (const p of pokemon) {
                notLoadedPokemon.push({
                    name: p.pokemon.name,
                    url: p.pokemon.url
                })
            }
        }

        notLoadedPokemon = Array.from(new Set(notLoadedPokemon));

        notLoadedPokemon.sort(function (a, b) {
            var nomeA = a.name.toUpperCase();
            var nomeB = b.name.toUpperCase();

            if (nomeA < nomeB) {
                return -1;
            }

            if (nomeA > nomeB) {
                return 1;
            }

            return 0;
        });
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
            isLoading
        }}>
            {children}
        </PokedexContex.Provider>
    )
}

export default PokedexProvider;