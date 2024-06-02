import { Link } from "react-router-dom"
import { salud } from "../../data"
import './saludHome.css'
import './saludHomeMob.css'

const SaludHome = () => {
    return(
        <div className="saludHome">
            <h2 className="titleSaludHome">BIENESTAR</h2>
            <div className="containerSaludHome">
                {salud.map((item) => (
                    <div className={item.idn === 2 ? `cont` : item.idn === 1 ? `contTwoEspacio` : `contTwo`}>
                        <Link className="links" to={`/articulo/${item.id}`}>
                        <img className={item.idn === 2 ? `imgSaludHomeTwo` : `imgSaludHome`} src={item.img} alt={item.title} />
                        <div className="catContSaludHome"><p className="catTextContSaludHome">{item.cat}</p></div>
                        <p className="textSaludHome">{item.title}</p>
                        </Link>
                    </div>
                ))}
            </div>
            <Link className="links" to='/categoria/bienestar'><button className="botonSaludHome">Ver mas</button></Link>
        </div>
    )
}

export default SaludHome