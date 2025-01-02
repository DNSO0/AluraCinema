import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicio from "./pages/inicio";
import Favoritos from "./pages/Favoritos";
import Container from "./components/Container";
import Cabecera from "./components/Cabecera/Cabecera";
import Pie from "./components/Pie/index";

function AppRoutes(){
    return(
        <BrowserRouter>
        <Cabecera />
        <Container>            
            <Routes>
                <Route path="/" element={<Inicio />}></Route>
                <Route path="/favoritos" element={<Favoritos/>}></Route>
            </Routes>
        </Container>
            <Pie />
        </BrowserRouter>
    )
}
export default AppRoutes