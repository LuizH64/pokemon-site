// Styles
import styles from './index.module.css';

// Hooks
import { usePokedex } from '../../../../hooks/contexts/usePokedex';

const CloseButton = () => {
    const { setPokemonInModal } = usePokedex();

    const closeModal = () => {
        setPokemonInModal(null);
    }

    return (
        <button className={styles.closeButton} onClick={closeModal}>
            +
        </button>
    );
};

export { CloseButton };