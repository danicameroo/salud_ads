import { useEffect, useState } from "react";
import { inicio } from "../../data"
import '../../estilos.css'
import { Link } from "react-router-dom";

const Inicio = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const containerGymHome = document.querySelector('.inicio');
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
        <>
        <div className="inicio">
            {inicio.map((item, index) => (
                <a className="links" href={`https://www.fitknow.fit/${item.id}`}>   
                <div className="containerInicio">
                    <img className="imgInicio" src={item.img} alt={item.alt} />
                    <div className="containerTextInicio">
                        <div className="catContInicio"><p className="catTextInicio">{item.cat}</p></div>
                        <p className="textInicio">{item.title}</p>
                    </div>
                </div>
                </a>
            ))}
        </div>
        <div className="containerDots">
            {inicio.map((_, index) => (
                <div key={index} className={`dots ${index === currentSlide ? 'active' : ''}`}></div>
            ))}
        </div>
        </>
    )
}

export default Inicio