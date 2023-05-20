// Styles
import styles from './index.module.css';

// Images
import logo from "../../assets/logo.svg";
import hamburgerIcon from "../../assets/hamburger-icon.svg";

const Header = () => {
    return (
        <nav className={styles.navbar}>
            <img src={logo} className={styles.logo} alt="Pokémon" />

            <img src={hamburgerIcon} className={styles.hamburgerIcon} alt="Open navigation" />
        </nav>
    )
};

export { Header };