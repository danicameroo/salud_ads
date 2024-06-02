import { Link } from 'react-router-dom'
import './NavbarTwo.css'
import menuOpen from '../../img/menuOpen.svg'
import { useState } from 'react'

const NavbarTwo = () =>{
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
        <div className='NavbarTwo'>
            <div className='containersNavTwo'>
                <Link className='links' to="/"><h1 className='titleNavTwo'>TITULO</h1></Link>
            </div>
            <div className='containersNavTwoList'>
                <ul className='listNavTwo'>
                    <Link className='links' to="/"><li className='textListNavTwo'>Home</li></Link>
                    <Link className='links' to="/categoria/entrenamiento"><li className='textListNavTwo'>Entrenamiento</li></Link>
                    <Link className='links' to="/categoria/bienestar"><li className='textListNavTwo'>Bienestar</li></Link>
                    <Link className='links' to="/categoria/nutricion"><li className='textListNavTwo'>Nutrición</li></Link>
                    <Link className='links' to="/calculadoraIMC"><li className='textListNavTwo'>Calculadora IMC</li></Link>        
                </ul>
            </div>
        </div>
        <div className='NavbarMob'>
            <img src={menuOpen} alt="" className="manuOpenImg" onClick={onClick}/>
            <div>
            {menu === true ?
                <div className='containersNavMob'>
                    <ul className='listNav'>
                        <Link className='links' to="/"><li onClick={() => setMenu(false)} className='textListNav'>Home</li></Link>
                        <Link className='links' to="/categoria/entrenamiento"><li onClick={() => setMenu(false)} className='textListNav'>Entrenamiento</li></Link>
                        <Link className='links' to="/categoria/bienestar"><li onClick={() => setMenu(false)} className='textListNav'>Bienestar</li></Link>
                        <Link className='links' to="/categoria/nutricion"><li onClick={() => setMenu(false)} className='textListNav'>Nutrición</li></Link>
                        <Link className='links' to="/calculadoraIMC"><li onClick={() => setMenu(false)} className='textListNav'>Calculadora IMC</li></Link>
                    </ul>
                </div> : <></>
            }
            </div>
            <Link className='links' to="/"><h1 className='titleNavMob'>TITULO</h1></Link>
        </div>
        </>
    )
}

export default NavbarTwo