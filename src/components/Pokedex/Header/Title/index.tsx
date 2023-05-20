// Styles
import styles from './index.module.css';

const Title = () => {
    return (
        <section>
            <h1 className={styles.mobileTitle}>
                <p>800 <strong>Pokemons</strong> for you</p>
                <p>to choose your</p>
                <p>favorite</p>
            </h1>

            <h1 className={styles.tabletTitle}>
                <p>800 <strong>Pokemons</strong> for youto choose</p>
                <p>your favorite</p>
            </h1>

            <h1 className={styles.desktopTitle}>
                <p>800 <strong>Pokemons</strong> for you to choose your favorite</p>
            </h1>
        </section>
    );
};

export { Title };