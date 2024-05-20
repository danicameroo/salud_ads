import { useState } from 'react'
import menuOpen from '../../img/menuOpen.svg'
import './Navbar.css'
import './NavbarMob.css'

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
                    <h1 className='titleNav'>TITULO</h1>
                </div>
                <div className='containersNav'>
                    <ul className='listNav'>
                        <li className='textListNav'>Gym</li>
                        <li className='textListNav'>Salud</li>
                        <li className='textListNav'>Nutrición</li>
                        <li className='textListNav'>Comunidad</li>
                        <li className='textListNav'>Calculadora IMC</li>
                    </ul>
                </div>
            </div>
            <div className='NavbarMob'>
                <img src={menuOpen} alt="" className="manuOpenImg" onClick={onClick}/>
                <div>
                {menu === true ?
                    <div className='containersNavMob'>
                        <ul className='listNav'>
                            <li className='textListNav'>Gym</li>
                            <li className='textListNav'>Salud</li>
                            <li className='textListNav'>Nutrición</li>
                            <li className='textListNav'>Comunidad</li>
                            <li className='textListNav'>Calculadora IMC</li>
                        </ul>
                    </div> : <></>
                }
                </div>
                <h1 className='titleNavMob'>TITULO</h1>
            </div>
        </>
    )
}

export default Navbar