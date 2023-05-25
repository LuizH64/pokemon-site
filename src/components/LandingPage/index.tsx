// Components
import { MainBanner } from "./MainBanner";
import { RedirectButton } from "./RedirectButton";
import { TextContent } from "./TextContent";

// Styles
import styles from "./index.module.css";


const LandingPage = () => {
    return (
        <main className={styles.main}>
            <MainBanner />

            <div className={styles.text}>
                <TextContent />
                <RedirectButton />
            </div>
        </main>
    );
};

export { LandingPage };