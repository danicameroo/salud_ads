import Navbar from "../Navbar/Navbar"
import Inicio from "../../Componentes/Inicio/Inicio"
import GymHome from "../../Componentes/gymHome/gymHome"

const Home = () => {
    return(
        <>
            <Navbar />
            <Inicio />
            <div className="gymHome">
                <h2 className="titleGymHome">GYM</h2>
                <p className="textGymHome">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed.</p>
                <GymHome />
                <button className="botonGymHome">Ver mas</button>
            </div>
        </>
    )
}

export default Home