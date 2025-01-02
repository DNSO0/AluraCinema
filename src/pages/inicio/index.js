import Banner from "../../components/Banner";
import Cabecera from "../../components/Cabecera/Cabecera";
import Pie from "../../components/Pie";
import Titulo from "../../components/Titulo";

function Inicio(){
    return(
        <>
            <Cabecera />          
            <Banner img="home" color="#154580" />
            <Titulo>
                <h1>Un lugar para guardar sus videos favoritos</h1>
            </Titulo>
            <Pie />
        </>
    )
}
export default Inicio;