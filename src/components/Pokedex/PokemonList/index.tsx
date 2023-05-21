// Components
import { PokemonCard } from "./PokemonCard";

// Hooks
import { usePokedex } from "../../../hooks/contexts/usePokedex";

// Styles
import styles from "./index.module.css";

const PokemonList = () => {
    const { pokemons } = usePokedex();

    return (
        <ul className={styles.list}>
            {pokemons.map(pokemon => (
                <PokemonCard key={pokemon.id} pokemon={pokemon} />
            ))}
        </ul>
    );
};

export { PokemonList };