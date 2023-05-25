// Styles
import styles from './index.module.css';

interface PokemonStatBarProps {
    name: string,
    value: number,
    max: number,
    color: "green" | "yellow",
    small: boolean
}

const progressColors = {
    green: styles.progressGreen,
    yellow: styles.progressYellow,
}

const PokemonStatBar = ({ name, value, max, color, small }: PokemonStatBarProps) => {
    const percentage = (value * 100) / max;

    return (
        <div className={small ? styles.smallWrapper : styles.wrapper}>
            <p className={styles.name}>{name}</p>
            <p className={styles.value}>{value}</p>

            <div className={styles.progressbar}>
                <div className={progressColors[color]} style={{ width: `${percentage}%` }} />
            </div>
        </div>
    );
};

export { PokemonStatBar };
