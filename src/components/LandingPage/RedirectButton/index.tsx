// Dependencies
import { Link } from "react-router-dom";

// Styles
import styles from "./index.module.css";

const RedirectButton = () => {
    return (
        <Link className={styles.redirectButton} to="/pokedex">See pokemons</Link>
    );
};

export { RedirectButton };