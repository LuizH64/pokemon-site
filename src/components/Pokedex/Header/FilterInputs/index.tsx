// Components
import { FilterDropdown } from "./FilterDropdown";
import { MobileFilterButton } from "./MobileFilterButton";

// Styles
import styles from "./index.module.css";

const FilterInputs = () => {
    return (
        <section className={styles.filtersWrapper}>
            <MobileFilterButton />
            <FilterDropdown />
        </section>
    );
};

export { FilterInputs };