// Styles
import styles from './index.module.css';

// Hooks
import { usePokedex } from '../../../../hooks/contexts/usePokedex';

// Images
import closeIcon from '../../../../assets/close-icon.svg';

const CloseButton = () => {
    const { setPokemonInModal } = usePokedex();

    const closeModal = () => {
        setPokemonInModal(null);
    }

    return (
        <button className={styles.closeButton} onClick={closeModal}>
            <img src={closeIcon} alt="close" />
        </button>
    );
};

export { CloseButton };