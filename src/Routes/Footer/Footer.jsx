import { HashLink as Link } from 'react-router-hash-link';
import '../../estilos.css'

const Footer = () => {
    return(
        <div className="Footer">
            <div className="footerContainerUno">
                <p className='tituloFooter'>FitKnow</p>
                <ul className='listFooter'>
                <li className='textListFooter'><Link className='links' to="/">Home</Link></li>
                <li className='textListFooter'><Link className='links' to="/seccion/entrenamiento">Entrenamiento</Link></li>
                <li className='textListFooter'><Link className='links' to="/seccion/bienestar">Bienestar</Link></li>
                <li className='textListFooter'><Link className='links' to="/seccion/nutricion">Nutrición</Link></li>
                <li className='textListFooter'><Link className='links' to="/calculadoraIMC">Calculadora IMC</Link></li>
                </ul>
            </div>
            <div className='footerContainerDos'>
                <p className='textListFooterDate'>© 2024</p>
                <p className='textListFooterDate'><Link className='links' to="/politicas/#p">Política de Privacidad</Link></p>
            </div>
        </div>
    )
}

export default Footer