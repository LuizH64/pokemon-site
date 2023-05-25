// Components
import { PokemonGroup } from './PokemonGroup';

// Consts
import legendaryPokemonsIds from '../../constants/legendaryPokemonsIds';

// Styles
import styles from './index.module.css';


const Legendaries = () => {
    return (
        <main className={styles.main}>
            <h1 className={styles.title}>Legendaries</h1>

            <PokemonGroup legendaryPokemonsIds={legendaryPokemonsIds} />
        </main>
    );
};

export { Legendaries };