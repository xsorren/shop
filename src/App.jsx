import Home from './pages/Home'
import Register from "./pages/Register"
import Login from "./pages/Login"
import Carrito from "./pages/Carrito"
import Producto from "./pages/Producto"
import ProductosLista from "./pages/ProductosLista"
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {

  return (
        <Router>
      <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/Register' element={<Register />} />
      <Route path='/Login' element={<Login />} />
      <Route path='/Carrito' element={<Carrito />} />
      <Route path='/Producto' exact element={<Producto />} />
      <Route path='/ProductosLista' exact  element={<ProductosLista />} />
      </Routes>
    </Router>
  )
}

export default App
