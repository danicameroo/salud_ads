import { Link } from 'react-router-dom'
import './Footer.css'
import './FooterMob.css'

const Footer = () => {
    return(
        <div className="Footer">
            <div className="footerContainerUno">
                <h2 className='tituloFooter'>TITULO</h2>
                <ul className='listFooter'>
                <Link className='links' to="/"><li className='textListFooter'>Home</li></Link>
                <Link className='links' to="/categoria/entrenamiento"><li className='textListFooter'>Gym</li></Link>
                <Link className='links' to="/categoria/bienestar"><li className='textListFooter'>Bienestar</li></Link>
                <Link className='links' to="/categoria/nutricion"><li className='textListFooter'>Nutrición</li></Link>
                <Link className='links' to="/calculadoraIMC"><li className='textListFooter'>Calculadora IMC</li></Link>
                </ul>
            </div>
            <div>
                <p className='textListFooterDate'>© 2024</p>
            </div>
        </div>
    )
}

export default Footer