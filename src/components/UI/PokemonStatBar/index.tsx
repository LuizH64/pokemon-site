// Styles
import styles from './index.module.css';

interface PokemonStatBarProps {
    name: string,
    value: number,
    max: number,
    color: "green" | "yellow"
}

const progressColors = {
    green: styles.progressGreen,
    yellow: styles.progressYellow,
}

const PokemonStatBar = ({ name, value, max, color }: PokemonStatBarProps) => {
    const percentage = (value * 100) / max;

    return (
        <div className={styles.wrapper}>
            <p className={styles.name}>{name}</p>
            <p className={styles.value}>{value}</p>

            <div className={styles.progressbar}>
                <div className={progressColors[color]} style={{ width: `${percentage}%` }} />
            </div>
        </div>
    );
};

export { PokemonStatBar };
