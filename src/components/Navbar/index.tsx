// Dependencies
import { useState } from 'react';

// Components
import { Backdrop } from '../UI/Backdrop';
import { NavigationLinks } from './NavigationLinks';

// Styles
import styles from './index.module.css';

// Images
import logo from "../../assets/logo.svg";
import hamburgerIcon from "../../assets/hamburger-icon.svg";

const Navbar = () => {
    const [expandNavbar, setExpandNavbar] = useState<boolean>(false);

    const toggleHeader = (): void => {
        setExpandNavbar(prevExpandNavbar => !prevExpandNavbar);
    };

    return (
        <>
            <nav className={expandNavbar ? styles.expandedNavbar : styles.navbar}>
                <img src={logo} className={styles.logo} alt="Pokémon" />

                <NavigationLinks active={expandNavbar} />

                <button className={styles.hamburgerButton} onClick={toggleHeader}>
                    <img src={hamburgerIcon} className={styles.hamburgerIcon} alt="Open navigation" />
                </button>
            </nav>

            <div className={styles.navbarHeight}></div>

            {expandNavbar && <Backdrop onClick={toggleHeader} />}
        </>
    )
};

export { Navbar };