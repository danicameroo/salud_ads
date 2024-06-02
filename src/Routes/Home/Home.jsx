import Navbar from "../Navbar/Navbar"
import Inicio from "../../Componentes/Inicio/Inicio"
import GymHome from "../../Componentes/gymHome/gymHome"
import SaludHome from "../../Componentes/saludHome/saludHome"
import NutricionHome from "../../Componentes/nutricionHome/nutricionHome"
import { Link } from "react-router-dom"
import { Helmet } from "react-helmet"

const Home = () => {
    return(
        <>
            <Helmet>
                <meta name="description" content="Descubre los secretos de una vida saludable: una alimentación nutritiva, una hidratación adecuada, el descanso necesario y un entrenamiento regular. Aprende a equilibrar cuerpo y mente para mejorar tu bienestar general."/>
            </Helmet>
            <Navbar />
            <Inicio />
            <div className="gymHome">
                <h2 className="titleGymHome">ENTRENAMIENTO</h2>
                <p className="textGymHome">El entrenamiento regular juega un papel crucial en el mantenimiento de una vida saludable y plena. Los beneficios que aporta van mucho más allá de la mera apariencia física; se extienden a cada faceta de nuestro bienestar.</p>
                <GymHome />
                <Link className="links" to='/categoria/entrenamiento'><button className="botonGymHome">Ver mas</button></Link>
            </div>
            <SaludHome />
            <NutricionHome />
        </>
    )
}

export default Home