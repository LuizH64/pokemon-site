// Dependencies
import { useEffect, useState } from "react";

// Components
import { usePokedex } from "../../../hooks/contexts/usePokedex";
import { Spinner } from "../../UI/Spinner";

// Styles
import styles from './index.module.css';


const BottomSpinner = () => {
    const [displaySpinner, setDisplaySpinner] = useState<boolean>(false);
    const { isLoading } = usePokedex();

    useEffect(() => {
        if (isLoading)
            setDisplaySpinner(true);
        else {
            setTimeout(() => {
                setDisplaySpinner(false)
            }, 2000);
        }
    }, [isLoading]);

    return displaySpinner ? (
        <div className={isLoading ? styles.activeBottomSpinner : styles.inactiveBottomSpinner}>
            <Spinner />
        </div>
    ) : <></>;
};

export { BottomSpinner };