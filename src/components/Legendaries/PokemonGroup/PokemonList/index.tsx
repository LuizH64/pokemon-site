// Dependencies
import { useRef, useState } from 'react';

// Components
import { ListItem } from './ListItem';

// Hooks
import { useLegendaryGroup } from '../../../../hooks/contexts/useLegendaryGroup';

// Styles
import styles from './index.module.css';

const CARD_SIZE = 171;


const PokemonList = () => {
    const [disableLeftButton, setDisableLeftButton] = useState<boolean>(true);
    const [disableRightButton, setDisableRightButton] = useState<boolean>(false);

    const { pokemons } = useLegendaryGroup();
    const listRef = useRef<HTMLUListElement>(null);

    const scrollLeft = (): void => {
        if (!listRef.current) return;
        if (listRef.current.scrollLeft % CARD_SIZE) return;

        listRef.current.scrollLeft -= CARD_SIZE;


        const disableLeftButton = listRef.current.scrollLeft - CARD_SIZE === 0;

        setDisableLeftButton(disableLeftButton);
        setDisableRightButton(false);
    }

    const scrollRight = (): void => {
        if (!listRef.current) return;
        if (listRef.current.scrollLeft % CARD_SIZE) return;

        listRef.current.scrollLeft += CARD_SIZE;


        const disableRightButton = listRef.current.scrollWidth - CARD_SIZE < (listRef.current.scrollLeft + 7 * CARD_SIZE)

        setDisableRightButton(disableRightButton);
        setDisableLeftButton(false);
    }

    return !pokemons.length ? <></> : (
        <section className={styles.wrapper}>
            {pokemons.length > 6 && <button className={styles.prevButton} onClick={scrollLeft} disabled={disableLeftButton}></button>}
            <ul ref={listRef} className={styles.list}>
                {pokemons.map(pokemon => <ListItem key={pokemon.id} pokemon={pokemon} />)}
            </ul>
            {pokemons.length > 6 && <button className={styles.nextButton} onClick={scrollRight} disabled={disableRightButton}></button>}
        </section>
    );
};

export { PokemonList };