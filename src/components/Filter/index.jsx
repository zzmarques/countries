import { useState } from 'react';
import { FaAngleDown } from "react-icons/fa";
import { useTheme } from "../ThemeContext";
import styles from './Filter.module.css';


function Filter ({ onFilterChange }) {

    const { darkMode } = useTheme();
    const [ show, setShow ] = useState(false);

    const handleCountry = (countries) => {
        onFilterChange(countries);
    };
    const toggleOption = () => {
        setShow(!show);
    };

    return (
            <div className={`${styles.content} ${darkMode ? styles.dark : ""}`}>
                <div 
                    className={styles.filter}
                    onClick={toggleOption}
                >
                    <span>Filter by Region</span>
                    <FaAngleDown />
                </div> 

                <ul className={show ? styles.show : ""}>

                        <li
                            onClick={() => handleCountry("Africa")}
                        >Africa</li>
                        <li 
                            onClick={() => handleCountry("Americas")}
                        >America</li>
                        <li
                            onClick={() => handleCountry("Asia")}
                        >Asia</li>
                        <li
                            onClick={() => handleCountry("Europe")}
                        >Europe</li>
                        <li
                            onClick={() => handleCountry("Oceania")}
                        >Oceania</li>
                </ul>
            </div>
    );
};

export default Filter;