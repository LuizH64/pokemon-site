// Components
import { MobileFilterButton } from "./MobileFilterButton";

// Styles
import styles from "./index.module.css";

const FilterInputs = () => {
    return (
        <section className={styles.filtersWrapper}>
            <MobileFilterButton />

        </section>
    );
};

export { FilterInputs };