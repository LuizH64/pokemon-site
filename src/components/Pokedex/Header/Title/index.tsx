// Hooks
import { usePokedex } from '../../../../hooks/contexts/usePokedex';

// Styles
import styles from './index.module.css';

const Title = () => {
    const { pokemonsCount } = usePokedex();

    const quantityText = pokemonsCount ?? "800+";

    return (
        <section>
            <h1 className={styles.mobileTitle}>
                <p>{quantityText} <strong>Pokemons</strong> for you</p>
                <p>to choose your</p>
                <p>favorite</p>
            </h1>

            <h1 className={styles.tabletTitle}>
                <p>{quantityText} <strong>Pokemons</strong> for youto choose</p>
                <p>your favorite</p>
            </h1>

            <h1 className={styles.desktopTitle}>
                <p>{quantityText} <strong>Pokemons</strong> for you to choose your favorite</p>
            </h1>
        </section>
    );
};

export { Title };