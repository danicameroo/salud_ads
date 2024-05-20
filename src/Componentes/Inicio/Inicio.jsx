import { useState } from "react";
import { inicio } from "../../data"
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './Inicio.css'
import './InicioMob.css'

const Inicio = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    return(
        <>
        <div className="inicio">
            {inicio.map((item) => (
                <div className="containerInicio">    
                    <img className="imgInicio" src={item.img} alt="" />
                    <div className="containerTextInicio">
                        <div className="catContInicio"><p className="catTextInicio">{item.cat}</p></div>
                        <p className="textInicio">{item.title}</p>
                    </div>
                </div>
            ))}
        </div>
        <div className="InicioMob">
            <Carousel
            showThumbs={false}
            showStatus={false}
            infiniteLoop
            selectedItem={currentSlide}
            onChange={setCurrentSlide}>
            {inicio.map((item) => (
                <div className="containerInicioMob">    
                    <img className="imgInicioMob" src={item.img} alt="" />
                    <div className="containerTextInicioMob">
                        <div className="catContInicioMob"><p className="catTextInicioMob">{item.cat}</p></div>
                        <p className="textInicioMob">{item.title}</p>
                    </div>
                </div>
            ))}
            </Carousel>
        </div>
        </>
    )
}

export default Inicio