// Dependencies
import { SetStateAction } from "react";
import { PokemonType } from "./PokemonTypes";
import { Pokemon, PokemonResponse, PokemonSpecieResponse } from "./Pokemon";

export interface PokedexContextType {
    showFilterModal: boolean,
    setShowFilterModal: React.Dispatch<SetStateAction<boolean>>,
    pokemonTypes: PokemonType[],
    pokemons: Pokemon[],
    pokemonsCount: number | null,
    limit: number,
    toggleTypesFilter: (updatedType: string) => void,
    loadMorePokemon: () => void,
    typesFilter: string[],
    isLoading: boolean,
    searchName: (search: string) => void
}

export interface PokedexProviderProps {
    children: React.ReactNode
}

export interface FormatPokemonDataTypes {
    specieData: PokemonSpecieResponse
    pokemonData: PokemonResponse
}