// Styles
import styles from './index.module.css';

const TextContent = () => {
    return (
        <article>
            <div>
                <h1 className={styles.mobileTitle}>
                    <p><strong>Find</strong> all your</p>
                    <p>favorite</p>
                    <p><strong>Pokemon</strong></p>
                </h1>

                <h1 className={styles.tabletTitle}>
                    <p><strong>Find</strong> all your</p>
                    <p>favorite <strong>Pokemon</strong></p>
                </h1>

                <h1 className={styles.desktopTitle}>
                    <p><strong>Find</strong> all your</p>
                    <p>favorite</p>
                    <p><strong>Pokemon</strong></p>
                </h1>
            </div>

            <div>
                <div className={styles.mobileDescriptionText}>
                    <p>You can know the type of</p>
                    <p>Pokemon, its strengths,</p>
                    <p>disadvantages and abilities</p>
                </div>

                <div className={styles.tabletDescriptionText}>
                    <p>You can know the type of Pokemon, its strengths,</p>
                    <p>disadvantages and abilities</p>
                </div>

                <div className={styles.desktopDescriptionText}>
                    <p>You can know the type of Pokemon,</p>
                    <p>its strengths, disadvantages and</p>
                    <p>abilities</p>
                </div>
            </div>
        </article>
    );
};

export { TextContent };