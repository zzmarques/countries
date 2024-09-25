import { useContext, createContext, useState, useEffect } from "react";

const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
    const [ darkMode, setDarkMode ] = useState(false);

    const toggleTheme = () => {
        setDarkMode(prevMode => !prevMode)
    };

    useEffect(() => {
    
        document.body.style.backgroundColor = darkMode ? '#202c37' : "#fafafa";
    }, [darkMode]);

    return (
        <ThemeContext.Provider 
            value={{ darkMode, toggleTheme }}
        >
            { children }
        </ThemeContext.Provider>
    )
}