// Styles
import styles from "./index.module.css";

interface backdropProps {
    onClick(): void
}

const Backdrop = ({ onClick }: backdropProps) => {
    return (
        <div className={styles.backdrop} onClick={onClick}>
        </div>
    )
};

export { Backdrop };