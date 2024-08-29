import '../../../estilos.css'
import { Link } from 'react-router-dom'

const NavbarLap = () => {
    return(
        <>
            <div className='Navbar'>
                <div className='containersNav'>
                    <Link className='links' to="/"><h1 className='titleNav'>FitKnow</h1></Link>
                </div>
                <div className='containersNav'>
                    <ul className='listNav'>
                        <li className='textListNav'><Link className='linksNav' to='/'>Home</Link></li>
                        <li className='textListNav'><Link className='linksNav' to='/seccion/entrenamiento'>Entrenamiento</Link></li>
                        <li className='textListNav'><Link className='linksNav' to='/seccion/bienestar'>Bienestar</Link></li>
                        <li className='textListNav'><Link className='linksNav' to='/seccion/nutricion'>Nutrición</Link></li>
                        <li className='textListNav'><Link className='linksNav' to='/seccion/recetas'>Recetas</Link></li>
                       <li className='textListNav'><Link className='linksNav' to='/calculadoraIMC'>Calculadora IMC</Link></li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default NavbarLap