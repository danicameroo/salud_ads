import { useState } from "react";
import { gym } from "../../data"
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './gymHome.css'
import './gymHomeMob.css'
import { Link } from "react-router-dom";

const GymHome = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    return(
        <>
            <div className="containerGymHome">
                {gym.map((item) => (
                    <div className="mapContGymHome">
                    <Link className="links" to={`/articulo/${item.id}`}>
                        <img className="imgGymHome" src={item.img} alt={item.title} />
                        <div className="catContGymHome"><p className="catTextGymHome">{item.cat}</p></div>
                        <p className="textContGymHome">{item.title}</p>
                    </Link>
                    </div>
                ))}
            </div>
            <div className="containerGymHomeMob">
                <Carousel
                showThumbs={false}
                showStatus={false}
                infiniteLoop
                selectedItem={currentSlide}
                onChange={setCurrentSlide}
                showArrows={false}>
                 {gym.map((item) => (
                    <div className="mapContGymHomeMob">
                    <Link className="links" to={`/articulo/${item.id}`}>
                        <img className="imgGymHomeMob" src={item.img} alt={item.title} />
                        <div className="catContGymHomeMob"><p className="catTextGymHomeMob">{item.cat}</p></div>
                        <p className="textContGymHomeMob">{item.title}</p>
                    </Link>
                    </div>
                ))}
                </Carousel>
            </div>
        </>
            
    )
}

export default GymHome