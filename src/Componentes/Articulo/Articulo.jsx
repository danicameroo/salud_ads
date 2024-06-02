import NavbarTwo from "../../Routes/NavbarTwo/NavbaTwo";
import { datacategories } from "../../datacategories"
import { useLocation } from "react-router-dom";
import ArticuloTexto from "../ArticuloTexto/ArticuloTexto";
import './Articulo.css'
import './ArticuloMob.css'
import { useEffect, useState } from "react";
import { Helmet } from 'react-helmet';

const Articulo = () => {
    const [filteredCategories, setFilteredCategories] = useState([]);
    const location = useLocation()
    const id = (location.pathname.split("/")[2])

   
  
    useEffect(() => {
        const filterCategories = () => {
            const filteredCategories = datacategories.filter(index => index.id.toLowerCase() === id.toLowerCase());
            setFilteredCategories(filteredCategories.length > 0 ? filteredCategories : datacategories);
        };
        filterCategories();
    });

    return(
        <>
        <NavbarTwo />
        {filteredCategories.map((item) => (
            <div>
                <Helmet>
                    <meta name="description" content={item.title} />
                </Helmet>
                <div  className="titleContArt">
                    <div className="containerTitleArt">
                        <h1 className="titleArt">{item.title}</h1>
                    </div>
                    <img className="imgArt" src={item.img} alt={item.title} />
                </div>
                <ArticuloTexto item={item}/>
            </div>
        ))}   
        </>
    )
}

export default Articulo