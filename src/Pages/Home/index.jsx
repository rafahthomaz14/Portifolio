import './styles.css'
import { FiMail } from "react-icons/fi";
import { TbBrandGithub } from "react-icons/tb";
import { FaLinkedinIn } from "react-icons/fa";
import { BiSolidGhost } from "react-icons/bi";

export default function Home() {

    return (
        <>
            <div className="container p-5">
                <div className="conteudo">
                    <div>
                        <h1>Rafael Thomaz</h1>
                        <strong>DESENVOLVEDOR FRONTEND</strong>
                        <p>REACTJS | JAVASCRIPT | C# | SQL | FireBase</p>
                    </div>

                </div>
                <div className="contato">
                    <FiMail size={24} color="#61DAFB" /><p>rafael.thomaz005@gmail.com</p>
                </div>
                <div className="container-foto">
                    <div className="figura">
                        <BiSolidGhost size={320} color="white" />
                    </div>
                </div>
            </div>


            <div className='card-link'>
                <ul className='link'>
                    <li><a href="https://github.com/rafahthomaz14" target="_blank" ><TbBrandGithub size={34} color="black" /></a></li>
                    <li><a href="https://www.linkedin.com/in/rafael-thomaz-92559920a/" target="_blank"><FaLinkedinIn size={30} color='black' /></a></li>
                </ul>
            </div>

        </>

    )
}