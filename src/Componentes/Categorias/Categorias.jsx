import { Link, useLocation } from "react-router-dom";
import { datacategories } from "../../datacategories"
import NavbarTwo from "../../Routes/NavbarTwo/NavbaTwo";
import './Categorias.css'
import './CategoriasMob.css'
import flecha from '../../img/flechaSelect.svg'
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";

const Categorias = () => {
    const location = useLocation();
    const cat = (location.pathname.split("/")[2]);
    const [filteredCategories, setFilteredCategories] = useState([]);
    const [subcat, setSubcat] = useState([]);
    const [isOpen, setIsOpen] = useState(false);
    const [categorie, setCategorie] = useState(cat);
    const [filtro, setFiltro] = useState([]);
    const [desc, setDesc] = useState([]);

    const handleClick = (value) => {
        const res = datacategories.filter(category =>
          category.subcategorie.map(subcategory =>
            subcategory.toLowerCase()
          ).includes(value.toLowerCase())
        );
        const resTwo = res.length > 0 ? res : datacategories;
        setSubcat(resTwo);
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        const filterCategories = () => {
          const filteredCategories = datacategories.filter(category =>
            category.categorie.some(subCategory =>
              subCategory.toLowerCase() === cat.toLowerCase()
            )
          );
          setFilteredCategories(filteredCategories);
          setSubcat(filteredCategories);
        };
        filterCategories();
      }, [cat]);

    const onClick = () => {
        setIsOpen(!isOpen);
    };


    useEffect(() => {
        if(cat === 'entrenamiento'){
            setCategorie('Entrenamiento')
            setFiltro(['Masa muscular', 'Perdida de peso', 'Salud'])
            setDesc('Encuentra planes de entrenamiento personalizados, consejos de expertos y rutinas para alcanzar tus objetivos físicos. ¡Todo lo que necesitas para mejorar tu condición física y bienestar!')
        }else if(cat === 'bienestar'){
            setCategorie('Bienestar')
            setFiltro(['Salud', 'Ejercicio', 'Tips'])
            setDesc('Aprende a cultivar un estilo de vida saludable con consejos prácticos sobre descanso, gestión del estrés y bienestar mental. Descubre cómo equilibrar cuerpo y mente para mejorar tu calidad de vida.')
        }else if(cat === 'nutricion'){
            setCategorie('Nutrición')
            setFiltro(['Altos en proteínas', 'Salud', 'Baja en calorias'])
            setDesc('Descubre una alimentación nutritiva y balanceada con recetas saludables, guías sobre macronutrientes y micronutrientes, y consejos para una dieta equilibrada. ¡Todo lo que necesitas para mejorar tu salud a través de una nutrición adecuada!')

        }
    }, [cat])
    
    
    return(
        <>
            <Helmet>
                <meta name="description" content={desc} />
            </Helmet>
            <NavbarTwo />
            <div className="categorias">
                <div className="containerUnoCat">
                    <div className="contTitleCat">
                        <h1 className="titleCat" onClick={() => setSubcat(filteredCategories)}>{categorie.toUpperCase()}</h1>
                    </div>
                    <div>
                        <div className="contSelectCat" onClick={onClick}>
                            <p className="optionCat">Filtro</p>
                            <img className="arrow" src={flecha} alt="" />
                        </div>
                        {isOpen && 
                            <ul className="contOpCat">
                                {filtro.map((op) => (
                                    <>
                                    <li onClick={() => handleClick(op)} value={op} className="optionCatTwo">{op}</li>
                                    <span className="line"></span>
                                    </>
                                ))}
                            </ul>
                        }
                    </div>
                </div>
                <div className="containerDosCat">
                {subcat.map((info) => (
                    <Link className="links" to={`/articulo/${info.id}`}><div className="contInfoCat">
                        <img className="imgCatInfo" src={info.img} alt={info.title} />
                        <div className="contTextInfoCat">
                            <div className="contSubCat"><p className="textSubCat">{categorie}</p></div>
                            <p className="textInfoCat">{info.title}</p>
                        </div>
                    </div></Link>
                ))}
                </div>
            </div>  
        </>
    )
}

export default Categorias