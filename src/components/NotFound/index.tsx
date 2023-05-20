// Components
import { StatusCodeImage } from './StatusCodeImage';
import { ReturnButton } from './ReturnButton';

// Styles
import styles from './index.module.css';

const NotFound = () => {
    return (
        <main className={styles.main}>
            <section className={styles.content}>
                <StatusCodeImage />

                <div className={styles.textWrapper}>
                    <p className={styles.light}>The rocket team</p>
                    <p className={styles.dark}>has won this time.</p>
                </div>
            </section>

            <ReturnButton />
        </main>
    );
};

export { NotFound };