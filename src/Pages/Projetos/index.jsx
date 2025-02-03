import './styles.css'
import 'bootstrap/dist/css/bootstrap-grid.min.css'
import { SiGithub } from "react-icons/si"
import { FaEye } from 'react-icons/fa';
import { MdHelpOutline } from 'react-icons/md';
export default function Projetos() {
    return (
        <>
            <div className='Titulo'>
                <h1>Meus Projetos</h1>
            </div>
            <div className="container">
                <div className="cards mt-5 mb-5">
                    <div className="row">
                        <div className="card-conteudo">
                            <div className="row">
                                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 p-3 mb-2">
                                    <div className="projeto">
                                        <div className="card-projeto">
                                            <img src="plantech.jpg" alt="Imagem do projeto" className="img-fluid" />
                                            <div className="botao">
                                                <button>
                                                    <a href="#" target="_blank" rel="noopener noreferrer">
                                                        <MdHelpOutline size={20} color='white' />
                                                    </a>
                                                </button>
                                                <button>
                                                    <a href="https://github.com/rafahthomaz14/Projeto_Plantech" target="_blank" rel="noopener noreferrer">
                                                        <SiGithub size={20} color="white" />
                                                    </a>
                                                </button>
                                                <button>
                                                    <a href="#" target="_blank" rel="noopener noreferrer">
                                                        <FaEye size={20} color='white' />
                                                    </a>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 p-3 mb-2">
                                    <div className="projeto">
                                        <div className="card-projeto">
                                            <img src="card-mario.png" alt="Imagem do projeto" className="img-fluid" />
                                            <div className="botao">
                                                <button>
                                                    <a href="#" target="_blank" rel="noopener noreferrer">
                                                        <MdHelpOutline size={20} color='white' />
                                                    </a>
                                                </button>
                                                <button>
                                                    <a href="https://github.com/rafahthomaz14/Card-Mario">
                                                    </a><SiGithub size={20} color='white' />
                                                </button>
                                                <button>
                                                    <a href="https://card-mario.netlify.app/" target="_blank" rel="noopener noreferrer">
                                                        <FaEye size={20} color='white' />
                                                    </a>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 p-3 mb-2">
                                    <div className="projeto">
                                        <div className="card-projeto">
                                            <img src="catalogo.png" alt="Imagem do projeto" className="img-fluid" />
                                            <div className="botao">
                                                <button>
                                                    <a href="#" target="_blank" rel="noopener noreferrer">
                                                        <MdHelpOutline size={20} color='white' />
                                                    </a>
                                                </button>
                                                <button>
                                                    <a href="https://github.com/rafahthomaz14/Catalogo_online" target="_blank" rel="noopener noreferrer">
                                                        <SiGithub size={20} color="white" />
                                                    </a>
                                                </button>
                                                <button>
                                                    <a href="https://rafahthomaz14.github.io/Catalogo_online/" target="_blank" rel="noopener noreferrer">
                                                        <FaEye size={20} color='white' />
                                                    </a>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 p-3 mb-2">
                                    <div className="projeto">
                                        <div className="card-projeto">
                                            <img src="foto.jpeg" alt="Imagem do projeto" className="img-fluid" />
                                            <div className="botao">
                                                <button>
                                                    <a href="#" target="_blank" rel="noopener noreferrer">
                                                        <MdHelpOutline size={20} color='white' />
                                                    </a>
                                                </button>
                                                <button>
                                                    <a href="#" target="_blank" rel="noopener noreferrer">
                                                        <SiGithub size={20} color="white" />
                                                    </a>
                                                </button>
                                                <button>
                                                    <a href="#" target="_blank" rel="noopener noreferrer">
                                                    </a><FaEye size={20} color='white' />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}