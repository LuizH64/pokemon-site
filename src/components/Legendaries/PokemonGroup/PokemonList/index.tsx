// Dependencies
import { useRef } from 'react';

// Components
import { ListItem } from './ListItem';

// Hooks
import { useLegendaryGroup } from '../../../../hooks/contexts/useLegendaryGroup';

// Styles
import styles from './index.module.css';

const CARD_SIZE = 171;

const PokemonList = () => {
    const { pokemons } = useLegendaryGroup();
    const listRef = useRef<HTMLUListElement>(null);

    const scrollLeft = (): void => {
        if (!listRef.current) return;
        if (listRef.current.scrollLeft % CARD_SIZE) return;

        listRef.current.scrollLeft -= CARD_SIZE;
    }

    const scrollRight = (): void => {
        if (!listRef.current) return;
        if (listRef.current.scrollLeft % CARD_SIZE) return;

        listRef.current.scrollLeft += CARD_SIZE;
    }

    return (
        <section className={styles.wrapper}>
            <button className={styles.prevButton} onClick={scrollLeft}></button>
            <ul ref={listRef} className={styles.list}>
                {pokemons.map(pokemon => <ListItem key={pokemon.id} pokemon={pokemon} />)}
            </ul>
            <button className={styles.nextButton} onClick={scrollRight}></button>
        </section>
    );
};

export { PokemonList };