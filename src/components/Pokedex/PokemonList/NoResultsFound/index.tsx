// Images
import detectivePikachuImage from '../../../../assets/detective-pikachu.png';

// Styles
import styles from './index.module.css';

const NoResultsFound = () => {
    return (
        <section className={styles.wrapper}>
            <h1 className={styles.title}>Ops...</h1>

            <img src={detectivePikachuImage} className={styles.image} alt="" />

            <p className={styles.text}>No pokemon were found.</p>
        </section>
    );
};

export { NoResultsFound };