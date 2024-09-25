import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import CardsDetail from "./Pages/CardsDetail";


const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/card/:id" element={<CardsDetail/>}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;