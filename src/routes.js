import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicio from "./pages/inicio";
import Favoritos from "./pages/Favoritos";
import Container from "./components/Container";
import Cabecera from "./components/Cabecera/Cabecera";
import Pie from "./components/Pie/index";
import FavoritosProvider from "./Contexto/Favoritos";
import Player from "./pages/Player";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Cabecera />
      <Container>
        <FavoritosProvider>
          <Routes>
            <Route path="/" element={<Inicio />}></Route>
            <Route path="/favoritos" element={<Favoritos />}></Route>
            <Route path="/:id" element={<Player/>}></Route>
          </Routes>
        </FavoritosProvider>
      </Container>
      <Pie />
    </BrowserRouter>
  );
}
export default AppRoutes;
