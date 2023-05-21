// Images
import pokeballImage from '../../../assets/pokeball.png';

// Styles
import styles from './index.module.css';

const Spinner = () => {
    return (
        <div className={styles.spinner}>
            <img src={pokeballImage} alt="" />
        </div>
    );
};

export { Spinner };
