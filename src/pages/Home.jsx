import Slider from "../components/Slider"
import Anuncio from "../components/Anuncio";
import Nav from "../components/Nav";
import Categorias from "../components/Categorias";
import Productos from "../components/Productos"
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";

const Home = () => {
    return (
        <>
        <Anuncio />
        <Nav />
        <Slider />
        <Categorias />
        <Productos />
        <Newsletter />
        <Footer />
        </> 
        );
}
 
export default Home;