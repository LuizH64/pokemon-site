// Dependencies
import axios from "axios";
import axiosInstance from "../configs/axios";
import { SetStateAction, createContext, useEffect, useState } from "react";

// Types
import { PokemonType, PokemonTypesResponse } from "../models/PokemonTypes";
import { Pokemon, PokemonResponse, PokemonSpecieResponse, PokemonsResponse } from "../models/Pokemon";


interface PokedexContextType {
    showFilterModal: boolean,
    setShowFilterModal: React.Dispatch<SetStateAction<boolean>>,
    pokemonTypes: PokemonType[],
    pokemons: Pokemon[],
    offset: number,
    setOffset: React.Dispatch<SetStateAction<number>>,
    hasNext: boolean,
    pokemonsCount: number | null
}

interface PokedexProviderProps {
    children: React.ReactNode
}

const defaultValues: PokedexContextType = {
    showFilterModal: false,
    setShowFilterModal: () => { },
    pokemonTypes: [],
    pokemons: [],
    offset: 0,
    setOffset: () => { },
    hasNext: true,
    pokemonsCount: null
}


export const PokedexContex = createContext(defaultValues);

let pokemonTypes: PokemonType[] = [];

const fetchPokemon = async (url: string): Promise<Pokemon> => {
    const specieData = (await axios.get<PokemonSpecieResponse>(url)).data;
    const pokemonData = (await axios.get<PokemonResponse>(specieData.varieties[0].pokemon.url)).data;

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

const PokedexProvider = ({ children }: PokedexProviderProps) => {
    const [showFilterModal, setShowFilterModal] = useState<boolean>(false);
    const [pokemons, setPokemons] = useState<Pokemon[]>([]);
    const [offset, setOffset] = useState<number>(0);
    const [hasNext, setHasNext] = useState<boolean>(true);
    const [pokemonsCount, setPokemonsCount] = useState<number | null>(null);

    // Fetch pokemon types
    useEffect(() => {
        (async () => {
            const { data } = await axiosInstance.get<PokemonTypesResponse>("type");
            pokemonTypes = [...data.results];
        })();
    }, []);

    // Fetch pokemons
    useEffect(() => {
        (async () => {
            const { data } = await axiosInstance.get<PokemonsResponse>(`pokemon-species?limit=9&offset=${offset}`);

            setPokemonsCount(data.count);

            if (data.next) setHasNext(true);
            else setHasNext(false);

            const newPokemons: Pokemon[] = [];

            for (const result of data.results) {
                const newPokemon = await fetchPokemon(result.url);
                newPokemons.push(newPokemon);
            }

            setPokemons([...newPokemons]);
        })();
    }, [offset]);

    return (
        <PokedexContex.Provider value={{
            showFilterModal,
            setShowFilterModal,
            pokemonTypes,
            pokemons,
            offset,
            setOffset,
            hasNext,
            pokemonsCount,
        }}>
            {children}
        </PokedexContex.Provider>
    )
}

export default PokedexProvider;