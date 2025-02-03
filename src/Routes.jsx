import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Pages/Home'
import Menu from './Components/Header'
import './Pages/Home/styles.css'
import Sobre from './Pages/Sobre'
import Projetos from './Pages/Projetos'

export default function Rotas() {
    return (
        <div>
            <BrowserRouter>
                <Menu />
                <Routes>
                    <Route path="/" element={<Home />}>Home</Route>
                    <Route path="/sobre" element={<Sobre />}>Sobre</Route>
                    <Route path="/projetos" element={<Projetos />}>Projetos</Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}