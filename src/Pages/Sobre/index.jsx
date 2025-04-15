import '../../Styles/sobre.css'
import { FaReact } from "react-icons/fa";
import { PiFileCSharpDuotone } from "react-icons/pi";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoFirebase } from "react-icons/io5";
import { DiSqllite } from "react-icons/di";
import { RiJavascriptFill } from "react-icons/ri";
import { SiMysql } from "react-icons/si";
import 'bootstrap/dist/css/bootstrap-grid.min.css';


export default function Sobre() {
    return (
        <div className="container centro">
            <div className='sobre'>
                <div className='row'>
                    <div className="col-lg-8 col-12">
                        <h2>Olá,</h2>
                        <h3>Meu nome é <strong>Rafael Thomaz</strong></h3>
                        <p>
                            Desenvolvedor apaixonado por tecnologia e programação, com foco na área de Front-End. Desde 2022, venho mergulhando no mundo do desenvolvimento, com um forte interesse por ReactJS e suas diversas possibilidades. Ao longo desse tempo, tive a oportunidade de estudar e trabalhar com várias tecnologias, como HTML, CSS, JavaScript, SQL, Firebase, C#, Python, e, atualmente, estou me aprofundando no desenvolvimento Front-End.
                            Minha jornada no universo da programação é movida pela curiosidade e pela vontade de sempre aprender mais. Estou constantemente em busca de novas soluções, melhores práticas e ferramentas para criar interfaces cada vez mais eficientes, intuitivas.
                            Estou aberto a novos desafios, oportunidades de colaboração e conexões na comunidade de tecnologia. Meu foco é continuar crescendo como desenvolvedor e contribuir para projetos inovadores.
                        </p>
                        <strong>
                            Sinta-se à vontade para me chamar para conversar e espero que goste do meu portfólio!
                        </strong><br /><br /><br />
                        <hr /><br />
                        <h1>SKILLS</h1><br />
                        <div className="logo d-flex gap-3">
                            <RiJavascriptFill size={60} color="white" />
                            <FaReact size={60} color="white" />
                            <FaHtml5 size={60} color="white" />
                            <FaCss3Alt size={60} color="white" />
                            <PiFileCSharpDuotone size={60} color="white" />
                            <IoLogoFirebase size={60} color="white" />
                            <DiSqllite size={60} color="white" />
                            <SiMysql size={60} color="white" />
                        </div><br /><br />
                    </div>
                    <div className="col-lg-4 col-12">
                        <div className="container-foto">
                            <div className="foto">
                                <img src="foto.jpeg" />
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </div>


    )
}