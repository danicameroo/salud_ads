import { useState } from "react";
import { gym } from "../../data"
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './gymHome.css'
import './gymHomeMob.css'

const GymHome = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    return(
        <>
            <div className="containerGymHome">
                {gym.map((item) => (
                    <div className="mapContGymHome">
                        <img className="imgGymHome" src={item.img} alt="" />
                        <div className="catContGymHome"><p className="catTextGymHome">{item.cat}</p></div>
                        <p className="textContGymHome">{item.title}</p>
                    </div>
                ))}
            </div>
            <div className="containerGymHomeMob">
                <Carousel
                showThumbs={false}
                showStatus={false}
                infiniteLoop
                selectedItem={currentSlide}
                onChange={setCurrentSlide}>
                 {gym.map((item) => (
                    <div className="mapContGymHomeMob">
                        <img className="imgGymHomeMob" src={item.img} alt="" />
                        <div className="catContGymHomeMob"><p className="catTextGymHomeMob">{item.cat}</p></div>
                        <p className="textContGymHomeMob">{item.title}</p>
                    </div>
                ))}
                </Carousel>
            </div>
        </>
            
    )
}

export default GymHome