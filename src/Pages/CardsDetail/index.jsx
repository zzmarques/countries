import Container from "../../components/Container";
import Header from "../../components/Header";
import styles from "./CardsDetail.module.css"
import data from "../../json/data.json";
import { useParams } from "react-router-dom"
import BtnBack from "../../components/BtnBack";
import { useTheme } from "../../components/ThemeContext";



const CardsDetail = () => {
    const { darkMode } = useTheme()
    const { id } = useParams();

    const card = data.find(c => c.name === id)
    const langues = card.languages.map(lan => lan.name).join(", ")
    const curren = card.currencies.map(curr => curr.name).join(", ")
    console.log(curren)
   
    return (
        <div>
            <Header/>
            <Container>
                <BtnBack/>
               {
                !card ? (
                    <p>País não encontrado</p>
                    
                ) : (
                    <section className={`${styles.detail} ${darkMode ? styles.dark : ""}`}>
                        <div>
                            <img src={card.flags.svg} alt={`Bandeira ${card.name}`} />
                        </div>
                        <div className={styles.text}>

                            <h1>{card.name}</h1>

                            <div className={styles.infos}>
                                <div>
                                    <p><span>Native Name: </span>{card.nativeName}</p>
                                    <p><span>Population: </span>{card.population}</p>
                                    <p><span>Region: </span>{card.region}</p>
                                    <p><span>Sub Region: </span>{card.subregion}</p>
                                    <p><span>Capital: </span>{card.capital}</p>
                                </div>
                                <div>
                                    <p><span>Top Level Domain: </span>{card.topLevelDomain}</p>

                                    <p><span>Currencies: </span>{curren}</p>

                                    <p><span>Languages: </span>{langues}</p>
                                </div>
                            </div>
                            <div className={styles.border}>
                                <span>Borders Countries:</span> 
                                <div className={styles.bor}>
                                    {
                                        card.languages.length >= 0 ? (
                                            card.languages.map(lan => (
                                                <div>{lan.nativeName}</div>
                                            ))
                                        ) : ""
                                    }
                                </div>
                            </div>
                            
                        </div>
                    </section>
                )
               }
            </Container>
        </div>
    )
}

export default CardsDetail;