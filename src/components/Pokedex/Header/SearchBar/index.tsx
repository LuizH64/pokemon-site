// Styles
import styles from './index.module.css';

const SearchBar = () => {
    return (
        <input
            className={styles.input}
            placeholder="Find your pokemon..."
            name="pokemon"
        />
    );
};

export { SearchBar };