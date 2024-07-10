import Inicio from "../../Componentes/Inicio/Inicio"
import GymHome from "../../Componentes/gymHome/gymHome"
import SaludHome from "../../Componentes/saludHome/saludHome"
import NutricionHome from "../../Componentes/nutricionHome/nutricionHome"
import { Helmet } from "react-helmet"
import { Link } from "react-router-dom"
import { useMediaQuery } from 'react-responsive';
import NavbarMob from "../Navbar/NabvarMob/NavbarMob"
import NavbarLap from "../Navbar/NavbarLap/Navbar"

const Home = () => {
    const isMobile = useMediaQuery({ maxWidth: 700 });

    return(
        <>
            <Helmet>
                <title>FitKnow - Todo sobre tu salud</title>
                <meta name="description" content='Descubre los secretos de una vida saludable: Aprende a equilibrar cuerpo y mente para mejorar tu bienestar general.' />
            </Helmet>
            {isMobile ? <NavbarMob /> : <NavbarLap />}
            <Inicio />
            <div className="gymHome">
                <h2 className="titleGymHome">ENTRENAMIENTO</h2>
                <p className="textGymHome">El entrenamiento regular juega un papel crucial en el mantenimiento de una vida saludable y plena. Los beneficios que aporta van mucho más allá de la mera apariencia física; se extienden a cada faceta de nuestro bienestar.</p>
                <GymHome />
                <button className="botonGymHome"><a className="linksButtons" href='https://www.fitknow.fit/seccion/entrenamiento'>Ver mas</a></button>
            </div>
            <SaludHome />
            <NutricionHome />
            <div style={{ width: '70%', margin: 'auto', textAlign: 'center'}}>
                <h2 style={{margin: '3em 0em 1em 0em'}} className="subtitleArt">¿Qué podrás encontrar en FitKnow?</h2>
                <p style={{width: '100%'}} className="textArt">Adoptar un estilo de vida saludable es fundamental para disfrutar de una existencia plena, llena de energía y equilibrio. Tres pilares esenciales sostienen este objetivo: el entrenamiento regular, una nutrición adecuada y el bienestar integral.</p>
                <p style={{width: '100%'}}  className="textArt">En el camino hacia una existencia saludable y equilibrada, el entrenamiento regular juega un papel fundamental e indispensable. Mucho más que una simple herramienta para lograr una apariencia física deseada, el ejercicio físico se erige como un pilar que sustenta el bienestar integral del ser humano, abarcando aspectos tanto físicos como emocionales y mentales.</p>
                <p style={{width: '100%'}}  className="textArt">Comenzando por los beneficios a nivel corporal, el entrenamiento sistemático fortalece nuestro sistema cardiovascular, mejorando la circulación sanguínea y la eficiencia cardíaca. Esta mayor capacidad aeróbica se traduce en un aumento de la resistencia y la energía, permitiéndonos afrontar con mayor vitalidad las exigencias de la vida cotidiana. Asimismo, el ejercicio regular estimula la <a  className="linkAbsolute" href="https://www.fitknow.fit/masa-muscular-en-piernas-y-gluteos">producción de masa muscular</a>, confiriendo a nuestro cuerpo una mayor fuerza y estabilidad, lo cual reduce significativamente el riesgo de lesiones. El entrenamiento regular tiene una gran relevancia en el <a  className="linkAbsolute" href="https://www.fitknow.fit/adquirir-masa-muscular-a-los-50">mantenimiento de la masa muscular después de los 50 años</a></p>
                <p style={{width: '100%'}}  className="textArt">Pero los beneficios del entrenamiento van mucho más allá de lo meramente físico. Al practicar actividad física de manera constante, liberamos una serie de sustancias químicas conocidas como endorfinas, las cuales desempeñan un papel clave en la regulación de nuestro estado de ánimo. Estas "hormonas de la felicidad" ayudan a contrarrestar los efectos nocivos del estrés y la ansiedad, mejorando notablemente nuestro bienestar emocional. Tambien es importante recordar la actividad física regular tiene muchos <a  className="linkAbsolute" href="https://www.fitknow.fit/beneficios-del-ejercicio-durante-el-embarazo">beneficios durante el embarazo</a></p>
                <p style={{width: '100%'}}  className="textArt">Asimismo, el entrenamiento tiene un impacto profundo en nuestra salud mental, potenciando la concentración, la capacidad de resolución de problemas y la claridad mental. Actividades como el yoga, la meditación o el tai chi, que combinan movimiento físico con técnicas de respiración y relajación, fomentan aún más esta conexión indisoluble entre cuerpo y mente, permitiéndonos alcanzar un estado de mayor equilibrio y plenitud.</p>
                <p style={{width: '100%'}}  className="textArt">Junto al entrenamiento físico regular, la nutrición adecuada constituye el otro pilar fundamental para alcanzar un estado de salud y bienestar óptimo. Lejos de ser un mero acompañante de nuestras actividades diarias, la alimentación desempeña un papel crucial en el mantenimiento y la mejora de nuestras funciones vitales, brindándonos el combustible necesario para vivir, crecer y prosperar. Se resalta la importancia de una dieta alta en proteína y saludable, como también el <a className="linkAbsolute" href="https://www.fitknow.fit/recomendacion-creatina-o-proteina">uso de suplementos, como proteína en polvo o creatina</a>, si tus objetivos personales lo requieren</p>
                <p style={{width: '100%'}}  className="textArt">Una nutrición equilibrada y saludable comienza por la selección cuidadosa de los alimentos que incorporamos a nuestra dieta. Optar por una amplia variedad de frutas, verduras, granos integrales, proteínas magras y grasas saludables nos asegura la ingesta de los nutrientes esenciales que nuestro organismo requiere para funcionar de manera óptima. Estos macro y micronutrientes desempeñan roles fundamentales en procesos tan diversos como la generación de energía, la reparación y el mantenimiento de tejidos, la regulación hormonal y la adecuada función inmunológica.</p>
                <p style={{width: '100%'}}  className="textArt">Más allá de la composición nutricional de los alimentos, la manera en que los consumimos también tiene un impacto significativ o en nuestra salud. Adoptar hábitos de alimentación conscientes, que incluyan porciones moderadas, una ingesta adecuada de líquidos y la evitación de alimentos ultraprocesados ricos en azúcares, grasas y aditivos, nos ayuda a mantener un equilibrio metabólico saludable y a prevenir la aparición de diversas enfermedades crónicas.</p>
                <p style={{width: '100%'}}  className="textArt">Pero la nutrición no se limita únicamente a los beneficios físicos. Una dieta nutritiva y bien equilibrada también tiene un impacto directo en nuestro bienestar emocional y mental. Los nutrientes esenciales, como las vitaminas del complejo B, el omega-3 y <a  className="linkAbsolute" href="https://www.fitknow.fit/alimentos-antiinflamatorios-saludables">los antioxidantes</a>, juegan un papel clave en la regulación del estado de ánimo, la función cognitiva y la salud del sistema nervioso. De esta manera, una alimentación saludable se convierte en un aliado estratégico para hacer frente a los desafíos emocionales y mentales que enfrentamos a lo largo de nuestra vida.</p>
                <p style={{width: '100%'}}  className="textArt">Cuando hablamos de bienestar, uno de los aspectos fundamentales que debemos considerar es el de la salud física y mental. Una persona que goza de un buen estado de salud no solo se siente mejor consigo misma, sino que también está mejor equipada para hacer frente a los desafíos y disfrutar plenamente de la vida.</p>
                <p style={{width: '100%'}}  className="textArt">Mantener una rutina de ejercicio regular, una alimentación equilibrada y un sueño reparador son pilares esenciales para alcanzar y preservar la salud. Estas prácticas no solo nos ayudan a prevenir enfermedades, sino que también incrementan nuestros niveles de energía, mejoran nuestra función cognitiva y regulan nuestro estado de ánimo.</p>
                <p style={{width: '100%'}}  className="textArt">Pero el bienestar integral trasciende lo meramente físico. El descanso y la recuperación también desempeñan un papel fundamental en nuestro bienestar general. Tomarse el tiempo necesario para desconectar, relajarse y recargar energías es vital para evitar el agotamiento y conservar nuestra capacidad de concentración, creatividad y rendimiento a largo plazo.</p>
                <p style={{width: '100%'}}  className="textArt">Actividades como la meditación, el yoga o simplemente disfrutar de momentos de ocio y diversión, nos permiten desconectar del estrés y la ansiedad cotidianos, cultivando un estado de mayor calma y serenidad interior. Estos momentos de descanso y rejuvenecimiento no solo nos ayudan a recuperar fuerzas, sino que también nos inspiran a retomar nuestras actividades con un mayor sentido de propósito y motivación.</p>
                <p style={{width: '100%'}}  className="textArt">Y hablando de motivación, este es otro elemento clave para alcanzar un bienestar integral. Cuando tenemos claros nuestros valores, metas y prioridades, y logramos alinear nuestras acciones diarias con ellos, experimentamos un profundo sentido de satisfacción y realización personal. Esto, a su vez, se traduce en un mayor compromiso, persistencia y capacidad de superar los obstáculos que se nos presenten en el camino.</p>
                <p style={{width: '100%'}}  className="textArt">En esta página, exploraremos en profundidad cada uno de estos pilares fundamentales para el logro de una vida saludable y llena de vitalidad. Descubre las mejores estrategias, consejos prácticos y recursos para emprender tu camino hacia el bienestar integral.</p>
                <p style={{width: '100%'}}  className="textArt">¡Bienvenido a tu guía definitiva para una vida plena y saludable!</p>
            </div>
        </>
    )
}

export default Home