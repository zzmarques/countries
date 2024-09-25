import { useTheme } from "../ThemeContext";
import style from "./Container.module.css";

const Container = ({ children }) => {

    const { darkMode } = useTheme();

    return (
        <main className={`${style.container} ${darkMode ? style.dark : ""}`}>
            {children}
        </main>
    )
}

export default Container;