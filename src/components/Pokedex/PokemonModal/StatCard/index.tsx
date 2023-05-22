// Styles
import styles from './index.module.css';


interface StatCardProps {
    name: string,
    value: number
}

const StatCard = ({ name, value }: StatCardProps) => {
    return (
        <div className={styles.card}>
            <div className={styles.value}>
                {value}
            </div>

            <div className={styles.name}>
                {name}
            </div>
        </div>
    );
};

export { StatCard };