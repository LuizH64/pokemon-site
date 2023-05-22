// Dependencies
import { useContext } from "react";

// Context
import { PokedexContex } from "../../contexts/Pokedex";

const usePokedex = () => {
    const contextValues = useContext(PokedexContex);

    return contextValues;
};

export { usePokedex };