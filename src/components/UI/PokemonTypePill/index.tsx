// Styles
import styles from './index.module.css';

// Helpers
import { getColorByType } from '../../../helpers/getColorByType';

const PokemonTypePill = ({ type }: { type: string }) => {
    return (
        <p key={type} className={styles.type} style={{ backgroundColor: getColorByType(type) }}>{type}</p>
    );
};

export { PokemonTypePill }