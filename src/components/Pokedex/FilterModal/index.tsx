// Components
import { AttackRangeFilter } from "./AttackRangeFilter";
import { Backdrop } from "../../UI/Backdrop";
import { ExperienceRangeFilter } from "./ExperienceRangeFilter";
import { TypesFilterList } from "./TypesFilterList";

// Hooks
import { usePokedex } from "../../../hooks/contexts/usePokedex";

// Styles
import styles from "./index.module.css";



const FilterModal = () => {
    const { showFilterModal, setShowFilterModal } = usePokedex();

    const closeFilterModal = (): void => {
        setShowFilterModal(false);
    }

    return showFilterModal ? (
        <>
            <div className={styles.modal}>
                <section className={styles.section}>
                    <h1 className={styles.title}>Type</h1>
                    <TypesFilterList />
                </section>

                <section className={styles.section}>
                    <h1 className={styles.title}>Experience</h1>
                    <ExperienceRangeFilter />
                </section>

                <section className={styles.section}>
                    <h1 className={styles.title}>Attack</h1>
                    <AttackRangeFilter />
                </section>
            </div>

            <Backdrop onClick={closeFilterModal} />
        </>
    ) : <></>;
};

export { FilterModal };