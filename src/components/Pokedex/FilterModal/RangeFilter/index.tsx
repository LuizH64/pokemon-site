// Components
import { RangeInput } from "./RangeInput";

// Styles
import styles from "./index.module.css"

const RangeFilter = () => {
    return (
        <div className={styles.card}>
            <div className={styles.inputs}>
                <RangeInput label="From" placeholder="from" />
                <RangeInput label="To" placeholder="to" />
            </div>

            <button className={styles.applyButton}>Apply</button>
        </div>
    );
};

export { RangeFilter };