
import styles from "./Header.module.css"
import DarkModeBtn from "../DarkModeBtn";
import { useTheme } from "../ThemeContext";


 const Header = () => {

    const { darkMode } = useTheme()

    return (
        <header className={`${styles.header} ${darkMode ? styles.dark : ""}`}>
            <h1>Where in the world?</h1>
            <DarkModeBtn/>
        </header>
    )
}

export default Header;

