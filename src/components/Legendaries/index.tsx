// Components
import { PokemonGroup } from './PokemonGroup';

// Styles
import styles from './index.module.css';


const BASIC_LEGENDARIES: number[] = [
    151,
    150,
    243,
    244,
    245,
    144,
    145,
    146,
];

const COOLEST_LEGENDARIES: number[] = [
    716,
    384,
    493,
    249,
    483,
    797,
    888,
    889,
    890,
];

const MID_LEGENDARIES: number[] = [
    251,
    250,
    382,
    383,
    484,
    486,
    646,
    717,
    799,
    898,
    895,
    796,
    894,
];

const Legendaries = () => {
    return (
        <main className={styles.main}>
            <section>
                <h1 className={styles.title}>Legendaries</h1>
                <PokemonGroup legendaryPokemonsIds={BASIC_LEGENDARIES} />
            </section>

            <section>
                <h1 className={styles.title}>Coolest</h1>
                <PokemonGroup legendaryPokemonsIds={COOLEST_LEGENDARIES} />
            </section>

            <section>
                <h1 className={styles.title}>Mids</h1>
                <PokemonGroup legendaryPokemonsIds={MID_LEGENDARIES} />
            </section>
        </main>
    );
};

export { Legendaries };