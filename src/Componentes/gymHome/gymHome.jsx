import { useState, useEffect } from "react";
import { gym } from "../../data"
import '../../estilos.css'

const GymHome = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const containerGymHome = document.querySelector('.containerGymHome');
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
            <div className="containerGymHome">
                {gym.map((item, index) => (
                    <a key={index} className="links" href={`https://www.fitknow.fit/${item.id}`}>
                        <div className="mapContGymHome">
                            <img className="imgGymHome" src={item.img} alt={item.alt} loading="lazy" />
                            <div className="catContGymHome"><p className="catTextGymHome">{item.cat}</p></div>
                            <p className="textContGymHome">{item.title}</p>
                        </div>
                    </a>
                ))}
            </div>
            <div className="containerDots">
                {gym.map((_, index) => (
                    <div key={index} className={`dots ${index === currentSlide ? 'active' : ''}`}></div>
                ))}
            </div>
         </>
    )
}

export default GymHome