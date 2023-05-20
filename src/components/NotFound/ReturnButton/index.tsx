// Dependencies
import { Link } from "react-router-dom";

// Styles
import styles from "./index.module.css";

const ReturnButton = () => {
    return (
        <Link className={styles.returnButton} to="/">Return</Link>
    );
};

export { ReturnButton };