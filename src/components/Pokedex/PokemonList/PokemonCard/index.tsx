// Types
import { Pokemon } from "../../../../models/Pokemon";

// Styles
import styles from "./index.module.css";

// Helpers
import { getColorByType } from "../../../../helpers/getColorByType";


const PokemonCard = ({ pokemon }: { pokemon: Pokemon }) => {
    return (
        <li className={styles.card}>
            <div className={styles.info}>
                <p className={styles.name}>{pokemon.name}</p>

                <section className={styles.stats}>
                    <div className={styles.stat}>
                        <div className={styles.statValue}>{pokemon.stats.attack}</div>
                        <div className={styles.statName}>Attack</div>
                    </div>

                    <div className={styles.stat}>
                        <div className={styles.statValue}>{pokemon.stats.defense}</div>
                        <div className={styles.statName}>Defense</div>
                    </div>
                </section>

                <section className={styles.types}>
                    {pokemon.types.map(type => (
                        <p key={type} className={styles.type} style={{ backgroundColor: getColorByType(type) }}>{type}</p>
                    ))}
                </section>
            </div>

            <div className={styles.imageWrapper} style={{ backgroundColor: getColorByType(pokemon.types[0]) }}>
                <img src={pokemon.image} alt="" />
            </div>
        </li>
    );
};

export { PokemonCard };