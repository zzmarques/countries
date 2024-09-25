import { Link } from "react-router-dom";
import style from "./Home.module.css"
import data from "../../json/data.json"
import Container from "../../components/Container";
import Header from "../../components/Header";
import Cards from "../../components/Cards";
import Search from "../../components/Search";
import Filter from "../../components/Filter";
import Group from "../../components/Group";
import { useState } from "react";


const Home = () => {

    const [ selectdFilter, setSelectdFilter ] = useState(null);
    const [ selectdSearch, setSelectdSearch ] = useState(null);

    const handleSearchChange = (searchValue) => {
        setSelectdSearch(searchValue)
    };

    const handleFilterChange = (filterValue) => {
        setSelectdFilter(filterValue)
    };

    const card = data.filter((cards) => cards.name === selectdSearch ? cards : "");
    const countries = data.filter((cards) => cards.region === selectdFilter ? cards : "");

    return (
        <>
            <Header/>
            <Container>
            <Group>
                <Search 
                    onSearchChange={handleSearchChange}
                />
                <Filter
                    onFilterChange={handleFilterChange}
                />
            </Group>

            {
               card.length > 0 ? (
                    <section className={style.card_container}>
                        {
                            card.map((data, id) => (
                                <Link 
                                    className={style.link} to={`/card/${data.name}`}
                                    key={id}
                                >
                                    <Cards
                                        name={data.name}
                                        population={data.population}
                                        region={data.region}
                                        capital={data.capital}
                                        flag={data.flags.svg}
                                    />
                                </Link>   
                            ))
                                
                        }
                    </section>
               ) : countries.length > 0 ? (
                    <section className={style.card_container}>
                        {
                            countries.map((data, id) => (
                                <Link 
                                    className={style.link} to={`/card/${data.name}`}
                                    key={id}
                                >
                                    <Cards 
                                        name={data.name}
                                        population={data.population}
                                        region={data.region}
                                        capital={data.capital}
                                        flag={data.flags.svg}
                                    />
                                </Link>   
                            ))
                        }
                    </section>
               ) : (
                    <section className={style.card_container}>
                        {
                            data.map((data, id) => (
                                <Link 
                                    className={style.link} to={`/card/${data.name}`}
                                    key={id}
                                >
                                    <Cards 
                                        
                                        name={data.name}
                                        population={data.population}
                                        region={data.region}
                                        capital={data.capital}
                                        flag={data.flags.svg}
                                    />
                                </Link>   
                            ))
                            
                        }
                    </section>
                )
            }
            </Container>
        </>
    )
}

export default Home;

// data.length >= 0  ? (
//     <section className={style.card_container}>
//         {
//             data.map((data, id) => (
//                 <Link 
//                     className={style.link} to={`/card/${data.name}`}
//                     key={id}
//                 >
//                     <Cards 
                        
//                         name={data.name}
//                         population={data.population}
//                         region={data.region}
//                         capital={data.capital}
//                         flag={data.flags.svg}
//                     />
//                 </Link>   
//             ))
            
//         }
//     </section>
    
// ) : card.length >= 0 ? (
//         <section className={style.card_container}>
//             {
//                 card.map((data, id) => (
//                     <Link 
//                         className={style.link} to={`/card/${data.name}`}
//                         key={id}
//                     >
//                         <Cards
//                             name={data.name}
//                             population={data.population}
//                             region={data.region}
//                             capital={data.capital}
//                             flag={data.flags.svg}
//                         />
//                     </Link>   
//                 ))
                
//             }
//         </section>
//     ) : (
//         <section className={style.card_container}>
//             {
//                 countries.map((data, id) => (
//                     <Link 
//                         className={style.link} to={`/card/${data.name}`}
//                         key={id}
//                     >
//                         <Cards 
//                             name={data.name}
//                             population={data.population}
//                             region={data.region}
//                             capital={data.capital}
//                             flag={data.flags.svg}
//                         />
//                     </Link>   
//                 ))
//             }
//         </section>
//     )

