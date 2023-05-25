// Dependencies
import { createContext, useEffect, useState } from "react";

// Utils
import { fetchPokemon } from "../utils/fetchPokemon";

// Types
import { Pokemon } from "../models/Pokemon";
import { LegendaryGroupContextType, LegendaryGroupProviderProps } from "../models/LegendaryGroup";



const defaultValues: LegendaryGroupContextType = {
    currentSelectedPokemon: null,
    setCurrentSelectedPokemon: () => { },
    pokemons: []
}

export const LegendaryGroupContext = createContext(defaultValues);


const LegendaryGroupProvider = ({ children, legendaryPokemonsIds }: LegendaryGroupProviderProps) => {
    const [pokemons, setPokemons] = useState<Pokemon[]>([]);
    const [currentSelectedPokemon, setCurrentSelectedPokemon] = useState<Pokemon | null>(null);

    useEffect(() => {
        (async () => {
            for (const legendaryPokemonId of legendaryPokemonsIds) {
                const newPokemon = await fetchPokemon(`https://pokeapi.co/api/v2/pokemon/${legendaryPokemonId}`);
                setPokemons(prevPokemons => {
                    if (prevPokemons.find(p => p.id === newPokemon.id)) return prevPokemons;
                    return [...prevPokemons, newPokemon]
                });

                setCurrentSelectedPokemon(prevState => {
                    if (prevState) return prevState;
                    return newPokemon;
                })
            };
        })();
    }, []);

    return (
        <LegendaryGroupContext.Provider value={{
            currentSelectedPokemon,
            setCurrentSelectedPokemon,
            pokemons
        }}>
            {children}
        </LegendaryGroupContext.Provider>
    )
}

export default LegendaryGroupProvider;