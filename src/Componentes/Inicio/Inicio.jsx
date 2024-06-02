import { useState } from "react";
import { inicio } from "../../data"
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './Inicio.css'
import './InicioMob.css'
import { Link } from "react-router-dom";

const Inicio = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    return(
        <>
        <div className="inicio">
            {inicio.map((item) => (
                <Link className="links" to={`/articulo/${item.id}`}>   
                <div className="containerInicio">
                    <img className="imgInicio" src={item.img} alt={item.title} />
                    <div className="containerTextInicio">
                        <div className="catContInicio"><p className="catTextInicio">{item.cat}</p></div>
                        <p className="textInicio">{item.title}</p>
                    </div>
                </div>
                </Link>
            ))}
        </div>
        <div className="InicioMob">
            <Carousel
            showThumbs={false}
            showStatus={false}
            infiniteLoop
            selectedItem={currentSlide}
            onChange={setCurrentSlide}
            showArrows={false}>
            {inicio.map((item) => (
                <Link className="links" to={`/articulo/${item.id}`}><div className="containerInicioMob">    
                    <img className="imgInicioMob" src={item.img} alt={item.title} />
                    <div className="containerTextInicioMob">
                        <div className="catContInicioMob"><p className="catTextInicioMob">{item.cat}</p></div>
                        <p className="textInicioMob">{item.title}</p>
                    </div>
                </div></Link>
            ))}
            </Carousel>
        </div>
        </>
    )
}

export default Inicio