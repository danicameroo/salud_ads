import { datacategories } from "../../datacategories"
import { useLocation } from "react-router-dom";
import ArticuloTexto from "../ArticuloTexto/ArticuloTexto";
import '../../estilos.css'
import React, { useEffect, useState } from "react";
import { Helmet } from 'react-helmet';
import NavbarTwoLap from "../../Routes/NavbarTwo/NavbarTwoLap/NavbarTwoLap";
import NavbarTwoMob from "../../Routes/NavbarTwo/NavbarTwoMob/NavbarTwoMob";
import { useMediaQuery } from "react-responsive";

const Articulo = React.memo(() => {
    const [filteredCategories, setFilteredCategories] = useState([]);
    const isMobile = useMediaQuery({ maxWidth: 700 });
    const location = useLocation()
    const id = (location.pathname.split("/")[1])

    console.log(id)
  
    useEffect(() => {
        const filterCategories = () => {
            const filteredCategories = datacategories.filter(index => index.id.toLowerCase() === id.toLowerCase());
            setFilteredCategories(filteredCategories.length > 0 ? filteredCategories : datacategories);
        };
        filterCategories();
    }, [id]);

    return(
        <>
        {isMobile ? <NavbarTwoMob />: <NavbarTwoLap />}
        {filteredCategories.map((item) => (
            <div key={item.id}>
                <Helmet>
                    <title>{item.titleSEO}</title>
                    <meta name="description" content={item.content} />
                    <link rel="canonical" href={`https://www.fitknow.fit/${item.id}`} />
                </Helmet>
                <div  className="titleContArt">
                    <div className="containerTitleArt">
                        <h1 className="titleArt">{item.title}</h1>
                    </div>
                    <img className="imgArt" src={item.img} alt={item.alt} loading="lazy" />
                </div>
                <ArticuloTexto item={item}/>
            </div>
        ))}   
        </>
    )
})

export default Articulo