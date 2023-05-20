// Hooks
import { usePokedex } from "../../../../hooks/contexts/usePokedex";

// Styles
import styles from "./index.module.css";

const TypesFilterList = () => {
    const { pokemonTypes } = usePokedex();

    return (
        <ul className={styles.list}>
            {pokemonTypes.map(pokemonType => (
                <li key={pokemonType.name} className={styles.listElement}>
                    <input id={`filter-by-${pokemonType.name}`} type="checkbox" />
                    <label htmlFor={`filter-by-${pokemonType.name}`}>{pokemonType.name}</label>
                </li>
            ))}
        </ul>
    );
};

export { TypesFilterList };