import style from "./Cards.module.css";
import { useTheme } from "../ThemeContext";

const Cards = ({ name, region, capital, population, flag }) => {

    const { darkMode } = useTheme()

    return (
        <section 
            className={`${style.cards} ${darkMode ? style.dark : ""}`}
        >
            <div>
                <img src={flag} alt="Bandeira De País" />
            </div>
            
            <div className={style.text} >
                <h1>{name}</h1>

                <p><span>Population: </span>{population}</p>
                
                <p><span>Region: </span>{region}</p>

                <p><span>Capital: </span>{capital}</p>
            </div>
        </section>
        
    );
}

export default Cards;