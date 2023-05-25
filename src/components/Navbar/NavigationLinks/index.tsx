// Dependencies
import { NavLink } from 'react-router-dom';

// Styles
import styles from './index.module.css';

const NavigationLinks = ({ active }: { active: boolean }) => {
    const navLinkClassName = ({ isActive }: { isActive: boolean }) => {
        if (isActive)
            return styles.navLinkActive;

        return styles.navLink;
    }

    return (
        <ul className={active ? styles.activeUnorderedList : styles.unorderedList}>
            <li><NavLink className={navLinkClassName} to="/">Home</NavLink></li>
            <li><NavLink className={navLinkClassName} to="/pokedex">Pokédex</NavLink></li>
            <li><NavLink className={navLinkClassName} to="/legendaries">Legendaries</NavLink></li>
            <li><a className={styles.navLink} href="https://pokeapi.co/docs/v2">Documentation</a></li>
        </ul>
    );
};

export { NavigationLinks };