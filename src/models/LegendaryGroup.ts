// Dependencies
import { SetStateAction } from "react";

// Types
import { Pokemon } from "./Pokemon";

export interface LegendaryGroupContextType {
    currentSelectedPokemon: Pokemon | null,
    setCurrentSelectedPokemon: React.Dispatch<SetStateAction<Pokemon | null>>
    pokemons: Pokemon[]
}

export interface LegendaryGroupProviderProps {
    children: React.ReactNode,
    legendaryPokemonsIds: number[],
}