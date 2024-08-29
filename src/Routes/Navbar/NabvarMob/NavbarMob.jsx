import { useState } from 'react'
import menuOpen from '../../../img/menuOpen.svg'
import '../../../estilos.css'
import { Link } from 'react-router-dom'

const NavbarMob = () => {
    const [menu, setMenu] = useState(false)

    const onClick = () => {
        if(menu === false){
            setMenu(true)
        }else{
            setMenu(false)
        }
    }

    return(
        <>
            <div className='NavbarMob'>
                <img src={menuOpen} alt="" className="manuOpenImg" onClick={onClick}/>
                <div>
                {menu === true ?
                    <div className='containersNavMob'>
                        <ul className='listNav'>
                            <Link className='links' to="/"><li onClick={() => setMenu(false)} className='textListNav'>Home</li></Link>
                            <Link className='links' to="/seccion/entrenamiento"><li onClick={() => setMenu(false)} className='textListNav'>Entrenamiento</li></Link>
                            <Link className='links' to="/seccion/bienestar"><li onClick={() => setMenu(false)} className='textListNav'>Bienestar</li></Link>
                            <Link className='links' to="/seccion/nutricion"><li onClick={() => setMenu(false)} className='textListNav'>Nutrición</li></Link>
                            <Link className='links' to="/seccion/recetas"><li onClick={() => setMenu(false)} className='textListNav'>Recetas</li></Link>
                            <Link className='links' to="/calculadoraIMC"><li onClick={() => setMenu(false)} className='textListNav'>Calculadora IMC</li></Link>
                        </ul>
                    </div>: <></>
                }
                </div>
                <Link className='links' to="/"><h1 className='titleNavMob'>FitKnow</h1></Link>
            </div>
        </>
    )
}

export default NavbarMob