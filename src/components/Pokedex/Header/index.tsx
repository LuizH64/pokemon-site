// Components
import { FilterInputs } from "./FilterInputs";
import { SearchBar } from "./SearchBar";
import { Title } from "./Title"

// Styles
import styles from './index.module.css';

const Header = () => {
    return (
        <header className={styles.header}>
            <Title />
            <SearchBar />
            <FilterInputs />
        </header>
    );
};

export { Header };