// Pokedex
import { usePokedex } from '../../../../hooks/contexts/usePokedex';

// Styles
import styles from './index.module.css';

const SearchBar = () => {
    const { searchName } = usePokedex();

    const onKeyDownHandler = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Enter") {
            const newSearch = event.currentTarget.value;

            event.currentTarget.value = "";
            event.currentTarget.blur();

            searchName(newSearch)
        }
    }

    return (
        <input
            className={styles.input}
            placeholder="Find your pokemon..."
            name="pokemon"
            onKeyDown={onKeyDownHandler}
        />
    );
};

export { SearchBar };