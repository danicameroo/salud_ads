import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from './Routes/Home/Home';
import Footer from './Routes/Footer/Footer';
import Categorias from './Componentes/Categorias/Categorias';
import Articulo from './Componentes/Articulo/Articulo';
import Calculadora from './Componentes/Calculadora/Calculadora';
import Politicas from './Componentes/politicas/Politicas';

function App() {
  return (
    <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/seccion/:cat' element={<Categorias />} />
          <Route path='/:id' element={<Articulo />} />
          <Route path='/calculadoraIMC' element={<Calculadora />} />
          <Route path='/politicas' element={<Politicas />} />
        </Routes>
        <Footer />
    </Router>
    
  );
}

export default App;
