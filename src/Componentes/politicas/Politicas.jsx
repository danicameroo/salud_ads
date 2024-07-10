import { Helmet } from "react-helmet"
import '../../estilos.css'
import NavbarTwoLap from "../../Routes/NavbarTwo/NavbarTwoLap/NavbarTwoLap";
import NavbarTwoMob from "../../Routes/NavbarTwo/NavbarTwoMob/NavbarTwoMob";
import { useMediaQuery } from "react-responsive";


const Politicas = () => {
    const isMobile = useMediaQuery({ maxWidth: 700 });

    return(
        <div id="p">
        <Helmet>
            <title>FitKnow</title>
            <meta name="title" content='FitKnow' />  
        </Helmet>
        {isMobile ? <NavbarTwoMob />: <NavbarTwoLap /> }
        <div style={{display: "flex", flexDirection: "column" ,justifyContent: "center", alignItems: "center"}}>
            <h1 className="politicasTitle">Política de Privacidad</h1>
            <p style={{ textIndent: '0'}} className="textPolitica"><b>Última actualización: 08/06/2024</b></p>
            <p style={{ textIndent: '0'}} className="textPolitica"><b>Esta Política de Privacidad describe cómo FitKnow  recopila, utiliza y comparte información cuando utilizas este sitio web.</b></p>
            <h3 className="politicasTitleTwo">Información que Recopilamos</h3>
            <p className="textPolitica">No recopilamos información personal identificable de los usuarios de nuestro sitio web, a menos que esta información se nos proporcione de forma voluntaria. Sin embargo, es posible que recopilemos cierta información no personal automáticamente cuando visitas nuestro sitio web, como la dirección IP, el tipo de navegador, la página que visitaste antes de llegar a nuestro sitio, y otras estadísticas de uso.</p>
            <h3 className="politicasTitleTwo">Uso de la Información</h3>
            <p className="textPolitica">Utilizamos la información recopilada para analizar tendencias, administrar el sitio web, rastrear los movimientos de los usuarios en el sitio y recopilar información demográfica general para uso interno. Esta información no está vinculada a ninguna información personalmente identificable.</p>
            <h3 className="politicasTitleTwo">Cookies y Tecnologías Similares</h3>
            <p className="textPolitica">Nuestro sitio web puede utilizar cookies y tecnologías similares para mejorar la experiencia del usuario. Puedes configurar tu navegador para que rechace todas las cookies o para que te avise cuando se envíe una cookie. Sin embargo, si no aceptas cookies, es posible que algunas partes de nuestro sitio web no funcionen correctamente.</p>
            <h3 className="politicasTitleTwo">Publicidad</h3>
            <p className="textPolitica">Nuestro sitio web muestra anuncios de Google y puede proponer productos de Amazon. Estos terceros pueden utilizar cookies y tecnologías similares para recopilar información sobre tus actividades en línea a lo largo del tiempo y en diferentes sitios web para proporcionarte publicidad personalizada basada en tus intereses.</p>
            <h3 className="politicasTitleTwo">Enlaces a Otros Sitios Web</h3>
            <p className="textPolitica">Nuestro sitio web puede contener enlaces a otros sitios web que no son operados por nosotros. No tenemos control sobre el contenido o las prácticas de privacidad de estos sitios web de terceros, por lo que te recomendamos que revises las políticas de privacidad de dichos sitios.</p>
            <h3 className="politicasTitleTwo">Cambios en esta Política de Privacidad</h3>
            <p className="textPolitica">Nos reservamos el derecho de actualizar o cambiar nuestra Política de Privacidad en cualquier momento. La fecha de la última actualización se indicará al comienzo de esta Política de Privacidad. Se te anima a revisar esta Política de Privacidad periódicamente para estar al tanto de cualquier cambio.</p>
            <h3 className="politicasTitleTwo">Contacto</h3>
            <p className="textPolitica">Si tienes alguna pregunta sobre esta Política de Privacidad, por favor contáctanos en <b>fitknoww@gmail.com</b>.</p>
        </div>
        </div>
    )
}

export default Politicas