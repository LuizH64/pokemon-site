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

const Header = () => {
    const [expandHeader, setExpandHeader] = useState<boolean>(false);

    const toggleHeader = (): void => {
        setExpandHeader(prevExpandHeader => !prevExpandHeader);
    };

    return (
        <>
            <nav className={expandHeader ? styles.expandedNavbar : styles.navbar}>
                <img src={logo} className={styles.logo} alt="Pokémon" />

                <NavigationLinks active={expandHeader} />

                <button className={styles.hamburgerButton} onClick={toggleHeader}>
                    <img src={hamburgerIcon} className={styles.hamburgerIcon} alt="Open navigation" />
                </button>
            </nav>

            <div className={styles.navbarHeight}></div>
            
            {expandHeader && <Backdrop onClick={toggleHeader} />}
        </>
    )
};

export { Header };