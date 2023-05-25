// Dependencies
import { useEffect } from "react";

// Components
import { PokemonCard } from "./PokemonCard";
import { NoResultsFound } from "./NoResultsFound";

// Hooks
import { usePokedex } from "../../../hooks/contexts/usePokedex";

// Styles
import styles from "./index.module.css";

const PokemonList = () => {
    const { pokemons, loadMorePokemon, isLoading } = usePokedex();

    // Verify if user scrolled to end of page
    useEffect(() => {
        function handleScroll() {
            if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
                loadMorePokemon();
            }
        }

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return !pokemons.length && !isLoading ? <NoResultsFound /> : (
        <ul className={styles.list}>
            {pokemons.map(pokemon => (
                <PokemonCard key={pokemon.id} pokemon={pokemon} />
            ))}
        </ul>
        );
};

        export {PokemonList};