import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from './components/footer/Footer'
import Navbar from './components/navbar/Navbar'
import ListaCategorias from './components/categorias/listacategorias/ListaCategorias'
//import CadastrarCategoria from './components/categorias/cadastrarcategoria/CadastrarCategoria'
import Home from './pages/home/Home'
import './App.css'
import FormCategoria from './components/categorias/formcategoria/FormCategoria'
import DeletarCategoria from './components/categorias/deletarCategoria/deletarCategoria'

function App() {
  return (
    
        <BrowserRouter>
          <Navbar />
          <div className="min-h-[80vh]">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/categorias" element={<ListaCategorias />} />
              <Route path="/cadastrarcategoria" element={<FormCategoria />} />
              <Route path="/deletarcategoria/:id" element={<DeletarCategoria />} />
              <Route path="/editarcategoria/:id" element={<FormCategoria />} />
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
  )
}

export default App