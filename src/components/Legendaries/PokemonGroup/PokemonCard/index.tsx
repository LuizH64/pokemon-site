// Hooks
import { useLegendaryGroup } from '../../../../hooks/contexts/useLegendaryGroup';
import { PokemonStatBar } from '../../../UI/PokemonStatBar';

// Styles
import styles from './index.module.css';

const PokemonCard = () => {
    const { currentSelectedPokemon } = useLegendaryGroup();

    return currentSelectedPokemon ? (
        <div className={styles.wrapper}>
            <div className={styles.imageWrapper}>
                <img src={currentSelectedPokemon.image} alt="" />
            </div>

            <div className={styles.info}>
                <h2 className={styles.name}>{currentSelectedPokemon.name}</h2>

                <div className={styles.description}>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
                </div>

                <div className={styles.stats}>
                    <div className={styles.statsGroup}>
                        <PokemonStatBar
                            small
                            name="Health Points"
                            value={Number(currentSelectedPokemon.stats.hp)}
                            max={255}
                            color="yellow"
                        />

                        <PokemonStatBar
                            small
                            name="Experience"
                            value={Number(currentSelectedPokemon.stats.experience)}
                            max={635}
                            color="yellow"
                        />
                    </div>

                    <div className={styles.statsGroup}>
                        <PokemonStatBar
                            small
                            name="Attack"
                            value={Number(currentSelectedPokemon.stats.attack)}
                            max={300}
                            color="yellow"
                        />

                        <PokemonStatBar
                            small
                            name="Defense"
                            value={Number(currentSelectedPokemon.stats.defense)}
                            max={300}
                            color="yellow"
                        />
                    </div>

                    <div className={styles.statsGroup}>
                        <PokemonStatBar
                            small
                            name="Special Attack"
                            value={Number(currentSelectedPokemon.stats.spAttack)}
                            max={300}
                            color="yellow"
                        />

                        <PokemonStatBar
                            small
                            name="Special Defense"
                            value={Number(currentSelectedPokemon.stats.spDefense)}
                            max={300}
                            color="yellow"
                        />
                    </div>
                </div>
            </div>
        </div>
    ) : <></>;
};

export { PokemonCard };