// Components
import { useId } from "react";

// Styles
import styles from "./index.module.css";

interface RangeInputProps {
    label: string,
    placeholder: string
}

const RangeInput = ({ label, placeholder }: RangeInputProps) => {
    const inputId = useId();

    return (
        <div className={styles.inputGroup}>
            <label className={styles.label} htmlFor={inputId}>{label}</label>

            <input
                id={inputId}
                className={styles.input}
                placeholder={placeholder}
                type="number"
            />
        </div>
    )
}

export { RangeInput }