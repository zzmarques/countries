import { useTheme } from "../ThemeContext"
import style from "./DarkModeBtn.module.css";
import { HiOutlineMoon } from "react-icons/hi";


const DarkModeBtn = () => {

    const { darkMode, toggleTheme }= useTheme();
    
    return (
        <div 
            className={`${style.btn} ${darkMode ? style.dark : ""}`}
            onClick={toggleTheme}
        >   
            <HiOutlineMoon/>
            <span>Dark Mode</span>
        </div>
    )
}

export default DarkModeBtn;