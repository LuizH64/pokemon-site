// Dependencies
import { useState } from "react";

// Components
import { PokemonTypePill } from "../../../UI/PokemonTypePill";

// Types
import { Pokemon } from "../../../../models/Pokemon";

// Helpers
import { getColorByType } from "../../../../helpers/getColorByType";

// Hooks
import { usePokedex } from "../../../../hooks/contexts/usePokedex";

// Images
import whosThatPokemonImage from "../../../../assets/whos-that-pokemon.png";

// Styles
import styles from "./index.module.css";


const PokemonCard = ({ pokemon }: { pokemon: Pokemon }) => {
    const { setPokemonInModal } = usePokedex();
    const [isImageLoading, setIsImage] = useState<boolean>(true);

    const onClickHander = () => {
        setPokemonInModal(pokemon);
    };

    const handleImageLoad = () => {
        setIsImage(false);
    };

    return (
        <li className={styles.card} onClick={onClickHander}>
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
                        <PokemonTypePill key={type} type={type} />
                    ))}
                </section>
            </div>

            <div className={styles.imageWrapper} style={{ backgroundColor: getColorByType(pokemon.types[0]) }}>
                {isImageLoading && <img src={whosThatPokemonImage} alt="" />}
                <img src={pokemon.image} className={isImageLoading ? styles.imageLoading : ""} alt="" onLoad={handleImageLoad} />
            </div>
        </li>
    );
};

export { PokemonCard };