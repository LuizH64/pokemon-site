// Styles
import { usePokedex } from "../../../../../hooks/contexts/usePokedex";
import styles from "./index.module.css";

// Hooks

const MobileFilterButton = () => {
    const { setShowFilterModal } = usePokedex();

    const onButtonClick = () => {
        setShowFilterModal(true);
    };

    return (
        <button
            className={styles.button}
            onClick={onButtonClick}
        >
            Filter
        </button>
    )
}

export { MobileFilterButton };