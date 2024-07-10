import { useEffect, useState } from "react";
import { nutricion } from "../../data"
import receta0 from '../../img/receta0.webp'
import '../../estilos.css'
import { Link } from "react-router-dom";

const NutricionHome = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const containerGymHome = document.querySelector('.containerDosNutricionHome');
        const dots = document.querySelectorAll('.dots');

        const handleScroll = () => {
            let currentIndex = Math.floor(containerGymHome.scrollLeft / containerGymHome.offsetWidth);
            setCurrentSlide(currentIndex);

            dots.forEach((dot, index) => {
                if (index === currentIndex) {
                    dot.classList.add('active');
                } else {
                    dot.classList.remove('active');
                }
            });
        };

        containerGymHome.addEventListener('scroll', handleScroll);

        return () => {
            containerGymHome.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return(
        <div className="NutricionHome">
            <div className="containerUnoNutricionHome">
                <img className="imgNutricionHome" src={receta0} alt="Alimentación nutritiva y balanceada con recetas saludables y guías nutriciconales" />
                <div className="contUnoNutricionHome">
                    <h2 className="titleNutricionHome">NUTRICION</h2>
                    <p className="textNutricionHome">Una vida saludable y equilibrada se sustenta en una alimentación nutritiva, una hidratación adecuada, el descanso necesario y el entrenamiento regular. Al integrar estos pilares se sientan las bases para disfrutar de una existencia plena y llena de vitalidad.</p>
                    <button className="botonNutricionHome"><a className="linksButtons" href='https://www.fitknow.fit/seccion/nutricion'>Ver mas</a></button>
                </div>
            </div>
            <div className="containerDosNutricionHome">
                {nutricion.map((item) => (
                    <div className="contDosNutricionHome">
                    <a className="links" href={`https://www.fitknow.fit/${item.id}`}>
                        <img className="imgMapNutricionHome" src={item.img} alt={item.alt} />
                        <p className="textMapNutricionHome">{item.title}</p>
                    </a>
                    </div>
                ))}
            </div>
            <div className="containerDots">
                {nutricion.map((_, index) => (
                    <div key={index} className={`dots ${index === currentSlide ? 'active' : ''}`}></div>
                ))}
        </div>
        </div>
    )
}

export default NutricionHome