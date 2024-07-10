import { Link } from "react-router-dom"
import { salud } from "../../data"
import '../../estilos.css'

const SaludHome = () => {
    return(
        <div className="saludHome">
            <h2 className="titleSaludHome">BIENESTAR</h2>
            <div className="containerSaludHome">
                {salud.map((item) => (
                    <div className={item.idn === 2 ? `cont` : item.idn === 1 ? `contTwoEspacio` : `contTwo`}>
                        <a className="links" href={`https://www.fitknow.fit/${item.id}`}>
                        <img className={item.idn === 2 ? `imgSaludHomeTwo` : `imgSaludHome`} src={item.img} alt={item.alt} />
                        <div className="catContSaludHome"><p className="catTextContSaludHome">{item.cat}</p></div>
                        <p className="textSaludHome">{item.title}</p>
                        </a>
                    </div>
                ))}
            </div>
            <button className="botonSaludHome"><a className="linksButtons" href='https://www.fitknow.fit/seccion/bienestar'>Ver mas</a></button>
        </div>
    )
}

export default SaludHome