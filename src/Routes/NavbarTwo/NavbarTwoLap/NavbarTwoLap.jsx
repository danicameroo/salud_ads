import { Link } from 'react-router-dom'
import '../../../estilos.css'

const NavbarTwoLap = () =>{

    return(
        <>
        <div className='NavbarTwo'>
            <div className='containersNavTwo'>
                <Link className='links' to="/"><p className='titleNavTwo'>FitKnow</p></Link>
            </div>
            <div className='containersNavTwoList'>
                <ul className='listNavTwo'>
                    <Link className='links' to="/"><li className='textListNavTwo'>Home</li></Link>
                    <Link className='links' to="/seccion/entrenamiento"><li className='textListNavTwo'>Entrenamiento</li></Link>
                    <Link className='links' to="/seccion/bienestar"><li className='textListNavTwo'>Bienestar</li></Link>
                    <Link className='links' to="/seccion/nutricion"><li className='textListNavTwo'>Nutrición</li></Link>
                    <Link className='links' to="/calculadoraIMC"><li className='textListNavTwo'>Calculadora IMC</li></Link>        
                </ul>
            </div>
        </div>
        </>
    )
}

export default NavbarTwoLap