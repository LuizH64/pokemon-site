// Images
import pikachuImage from '../../../assets/pikachu.png';
import cloudImage from '../../../assets/cloud.png';
import darkPokeballImage from '../../../assets/pokeball-dark.png';
import pokeballImage from '../../../assets/pokeball.png';

// Styles
import styles from './index.module.css';

const MainBanner = () => {
    return (
        <section className={styles.banner}>
            <img src={cloudImage} className={styles.cloud1} alt="" />
            <img src={cloudImage} className={styles.cloud2} alt="" />

            <img src={darkPokeballImage} className={styles.darkPokeball} alt="" />

            <img src={pikachuImage} className={styles.pikachu} alt="" />

            <img src={pokeballImage} className={styles.pokeball} alt="" />
        </section>
    );
};

export { MainBanner };