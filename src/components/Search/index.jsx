import { GoSearch } from "react-icons/go";
import { useTheme } from "../ThemeContext";
import styles from "./Search.module.css";



const Search = ({ onSearchChange }) => {

    const { darkMode } = useTheme()

    const handleSearch = () => {
        onSearchChange(event.target.value)
    }

    

    return (
        <div className={`${styles.search} ${darkMode ? styles.dark : ""}`}>
            <GoSearch />
            <input 
                type="text"
                placeholder="Search for a country..."
                onChange={handleSearch}
             />
        </div>
    )
}

export default Search;
