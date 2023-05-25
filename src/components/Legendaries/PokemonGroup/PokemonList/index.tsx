// Components
import { ListItem } from './ListItem';

// Hooks
import { useLegendaryGroup } from '../../../../hooks/contexts/useLegendaryGroup';

// Styles
import styles from './index.module.css';


const PokemonList = () => {
    const { pokemons } = useLegendaryGroup();

    return (
        <ul className={styles.list}>
            {pokemons.map(pokemon => <ListItem key={pokemon.id} pokemon={pokemon} />)}
        </ul>
    );
};

export { PokemonList };