// Images
import teamRocketImg from "../../../assets/team-rocket.png";

// Styles
import styles from './index.module.css';

const StatusCodeImage = () => {
    return (
        <div className={styles.contentWrapper}>
            <h1 className={styles.errorCode}>404</h1>

            <img src={teamRocketImg} className={styles.teamRocketImg} alt="" />
        </div>
    );
};

export { StatusCodeImage };