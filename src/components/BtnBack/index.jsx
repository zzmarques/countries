import { GoArrowLeft } from "react-icons/go";
import { Link } from "react-router-dom";
import { useTheme } from "../ThemeContext";
import styles from "./BtnBack.module.css"


const BtnBack = () => {

    const { darkMode } = useTheme()

    return (
        <Link to="/" className={`${styles.btn} ${darkMode ? styles.dark : ""}`}>
            <GoArrowLeft />
            Back
        </Link>
        
    )
}

export default BtnBack;