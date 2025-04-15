import { Link, useLocation } from "react-router-dom";
import '../../Styles/header.css'

export default function Menu() {
    const marcador = useLocation()
    return (
        <div className="menu">
            <div className="imagem3"> <img src="./detalhes.png" alt="" /></div>
            <div className="imagem4"> <img src="./detalhes.png" alt="" /></div>

            <ul>
                <li>
                    <Link to="/" className={marcador.pathname === '/' ? 'active' : ''}>Home</Link>
                </li>
                <li>
                    <Link to="/sobre" className={marcador.pathname === '/sobre' ? 'active' : ''}>Sobre</Link>
                </li>
                <li>
                    <Link to="/projetos" className={marcador.pathname === '/projetos' ? 'active' : ''}> Projetos</Link>
                </li>
            </ul>
        </div>
    );
}
