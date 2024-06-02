import { useState } from "react";
import { nutricion } from "../../data"
import receta0 from '../../img/receta0.webp'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './nutricionHome.css'
import './nutricionHomeMob.css'
import { Link } from "react-router-dom";

const NutricionHome = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 1,
      arrows: false,
      afterChange: (index) => setCurrentSlide(index),
    };

    return(
        <div className="NutricionHome">
            <div className="containerUnoNutricionHome">
                <img className="imgNutricionHome" src={receta0} alt="Alimentación nutritiva y balanceada con recetas saludables y guías nutriciconales" />
                <div className="contUnoNutricionHome">
                    <h2 className="titleNutricionHome">NUTRICION</h2>
                    <p className="textNutricionHome">Una vida saludable y equilibrada se sustenta en una alimentación nutritiva, una hidratación adecuada, el descanso necesario y el entrenamiento regular. Al integrar estos pilares se sientan las bases para disfrutar de una existencia plena y llena de vitalidad.</p>
                    <Link className="links" to='/categoria/nutricion'><button className="botonNutricionHome">Ver mas</button></Link>
                </div>
            </div>
            <div className="containerDosNutricionHome">
                {nutricion.map((item) => (
                    <div className="contDosNutricionHome">
                    <Link className="links" to={`/articulo/${item.id}`}>
                        <img className="imgMapNutricionHome" src={item.img} alt={item.title} />
                        <p className="textMapNutricionHome">{item.title}</p>
                    </Link>
                    </div>
                ))}
            </div>
            <div className="containerDosNutricionHomeMob">
            <Slider {...settings}>
                {nutricion.map((item) => (
                    <div className="contDosNutricionHome">
                    <Link className="links" to={`/articulo/${item.id}`}>
                        <img className="imgMapNutricionHome" src={item.img} alt={item.title} />
                        <p className="textMapNutricionHome">{item.title}</p>
                    </Link>
                    </div>
                ))}
            </Slider>
            </div>
        </div>
    )
}

export default NutricionHome