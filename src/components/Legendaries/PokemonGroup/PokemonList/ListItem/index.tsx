// Styles
import styles from './index.module.css';

// Hooks
import { useLegendaryGroup } from '../../../../../hooks/contexts/useLegendaryGroup';

// Images
import legendaryPokeballImage from '../../../../../assets/legendary-pokeball.svg';

// Types
import { Pokemon } from '../../../../../models/Pokemon';


interface ListItemProps {
    pokemon: Pokemon
}

const ListItem = ({ pokemon }: ListItemProps) => {
    const { setCurrentSelectedPokemon } = useLegendaryGroup();

    const onClickHandler = () => {
        setCurrentSelectedPokemon(pokemon);
    };

    return (
        <li className={styles.listItem} onClick={onClickHandler}>
            <div className={styles.imageWrapper}>
                <img src={pokemon.image} alt="" />
            </div>

            <div className={styles.pokemonName}>
                <p>{pokemon.name}</p>
                <img className={styles.pokeballIcon} src={legendaryPokeballImage} alt="" />
            </div>
        </li>
    );
};

export { ListItem };