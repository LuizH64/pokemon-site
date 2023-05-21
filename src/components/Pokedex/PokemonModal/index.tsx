// Components
import { Backdrop } from '../../UI/Backdrop';
import { CloseButton } from './CloseButton';
import { PokemonStatBar } from '../../UI/PokemonStatBar';

// Helpers
import { getColorByType } from '../../../helpers/getColorByType';
import { getGradientByType } from '../../../helpers/getGradientByType';

// Hooks
import { usePokedex } from '../../../hooks/contexts/usePokedex';

// Styles
import styles from './index.module.css';
import { PokemonTypePill } from '../../UI/PokemonTypePill';
import { StatCard } from './StatCard';

const PokemonModal = () => {
    const { pokemonInModal, setPokemonInModal } = usePokedex();

    const closeModal = () => {
        setPokemonInModal(null);
    }

    return pokemonInModal ? (
        <>
            <Backdrop onClick={closeModal} />

            <div className={styles.modal} style={{ backgroundColor: getColorByType(pokemonInModal.types[0]) }}>
                <header className={styles.header}>
                    <CloseButton />

                    <h1 className={styles.pokemonName}>{pokemonInModal.name}</h1>

                    <div className={styles.pokemonImage}>
                        <img src={pokemonInModal.image} alt="" />
                    </div>
                </header>

                <section className={styles.body} style={{background: getGradientByType(pokemonInModal.types[0])}}>
                    <div className={styles.mainInfo}>
                        <div className={styles.idAndGeneration}>
                            <div className={styles.id}>{pokemonInModal.id}</div>
                            <div className={styles.generation}>{pokemonInModal.generation}</div>
                        </div>

                        <div className={styles.pokemonTypes}>
                            {pokemonInModal.types.map(type => <PokemonTypePill key={type} type={type} />)}
                        </div>
                    </div>

                    <section className={styles.card}>
                        <h2 className={styles.abilitiesTitle}>Abilities</h2>

                        <div className={styles.abilitiesList}>
                            {pokemonInModal.abilities.map((ability, index) => (
                                <span key={ability}>
                                    {ability} {index < pokemonInModal.abilities.length - 1 && '- '}
                                </span>
                            ))}
                        </div>
                    </section>

                    <section className={styles.card}>
                        <PokemonStatBar
                            name="Health Points"
                            value={Number(pokemonInModal.stats.hp)}
                            max={255}
                            color="green"
                        />

                        <PokemonStatBar
                            name="Experience"
                            value={Number(pokemonInModal.stats.experience)}
                            max={635}
                            color="yellow"
                        />
                    </section>

                    <section className={styles.stats}>
                        <StatCard name="Defense" value={Number(pokemonInModal.stats.defense)} />
                        <StatCard name="Attack" value={Number(pokemonInModal.stats.attack)} />
                        <StatCard name="SP Defense" value={Number(pokemonInModal.stats.spDefense)} />
                        <StatCard name="SP Attack" value={Number(pokemonInModal.stats.spAttack)} />
                    </section>
                </section>
            </div>
        </>
    ) : <></>;
};

export { PokemonModal }