import { Link } from 'react-router-dom'
import '../../../estilos.css'
import menuOpen from '../../../img/menuOpen.svg'
import { useState } from 'react'

const NavbarTwoMob = () =>{
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
                        <Link className='links' to="/calculadoraIMC"><li onClick={() => setMenu(false)} className='textListNav'>Calculadora IMC</li></Link>
                    </ul>
                </div> : <></>
            }
            </div>
            <Link className='links' to="/"><p className='titleNavMob'>FitKnow</p></Link>
        </div>
        </>
    )
}

export default NavbarTwoMob