// Hooks
import { usePokedex } from '../../../../../../hooks/contexts/usePokedex';

// Styles
import styles from './index.module.css';

const FilterMenu = () => {
    const { pokemonTypes, typesFilter, toggleTypesFilter } = usePokedex();

    const onChangeInputHandler = (updatedType: string) => {
        toggleTypesFilter(updatedType);
    }

    return (
        <aside className={styles.filterMenu}>
            <ul className={styles.list}>
                {pokemonTypes.map(pokemonType => {
                    const onChange = () => onChangeInputHandler(pokemonType.name);
                    const inputId = `filter-by-${pokemonType.name}`;
                    const selected = typesFilter.includes(pokemonType.name);

                    return (
                        <li key={pokemonType.name} className={styles.listElement}>
                            <input id={inputId} type="checkbox" onChange={onChange} defaultChecked={selected} />
                            <label htmlFor={inputId}>{pokemonType.name}</label>
                        </li>
                    )
                })}
            </ul>
        </aside>
    );
};

export { FilterMenu };