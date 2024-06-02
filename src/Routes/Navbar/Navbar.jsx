import { useState } from 'react'
import menuOpen from '../../img/menuOpen.svg'
import './Navbar.css'
import './NavbarMob.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
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
            <div className='Navbar'>
                <div className='containersNav'>
                    <Link className='links' to="/"><h1 className='titleNav'>TITULO</h1></Link>
                </div>
                <div className='containersNav'>
                    <ul className='listNav'>
                        <Link className='links' to="/"><li className='textListNav'>Home</li></Link>
                        <Link className='links' to="/categoria/entrenamiento"><li className='textListNav'>Entrenamiento</li></Link>
                        <Link className='links' to="/categoria/bienestar"><li className='textListNav'>Bienestar</li></Link>
                        <Link className='links' to="/categoria/nutricion"><li className='textListNav'>Nutrición</li></Link>
                        <Link className='links' to="/calculadoraIMC"><li className='textListNav'>Calculadora IMC</li></Link>
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
                    </div>: <></>
                }
                </div>
                <Link className='links' to="/"><h1 className='titleNavMob'>TITULO</h1></Link>
            </div>
        </>
    )
}

export default Navbar