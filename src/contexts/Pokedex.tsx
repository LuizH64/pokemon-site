import { SetStateAction, createContext, useEffect, useState } from "react";
import axios from "../configs/axios";
import { PokemonType, PokemonTypesResponse } from "../models/PokemonTypes";


interface PokedexContextType {
    showFilterModal: boolean,
    setShowFilterModal: React.Dispatch<SetStateAction<boolean>>,
    pokemonTypes: PokemonType[]
}

interface PokedexProviderProps {
    children: React.ReactNode
}

const defaultValues: PokedexContextType = {
    showFilterModal: false,
    setShowFilterModal: () => { },
    pokemonTypes: []
}


export const PokedexContex = createContext(defaultValues);

let pokemonTypes: PokemonType[] = [];
const PokedexProvider = ({ children }: PokedexProviderProps) => {
    const [showFilterModal, setShowFilterModal] = useState<boolean>(false);

    // Fetch pokemon types
    useEffect(() => {
        (async () => {
            const { data } = await axios.get<PokemonTypesResponse>("type");
            pokemonTypes = [...data.results];
        })();
    }, []);

    return (
        <PokedexContex.Provider value={{ showFilterModal, setShowFilterModal, pokemonTypes }}>
            {children}
        </PokedexContex.Provider>
    )
}

export default PokedexProvider;