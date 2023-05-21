// Dependencies
import { useState } from 'react';

// Components
import { FilterMenu } from './FilterMenu';

// Styles
import styles from './index.module.css';

const FilterDropdown = () => {
    const [showMenu, setShowMenu] = useState<boolean>(true);

    const toggleShowMenu = (): void => {
        setShowMenu(prevShowMenu => !prevShowMenu);
    }

    return (
        <div className={styles.buttonWrapper}>
            <button className={styles.button} onClick={toggleShowMenu}>
                Filter
            </button>

            {showMenu && <FilterMenu />}
        </div>
    );
};

export { FilterDropdown };