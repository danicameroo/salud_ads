import { useState } from "react"
import { Helmet } from "react-helmet"
import bascula1 from '../../img/bascula1.webp'
import bascula2 from '../../img/bascula2.webp'
import bascula3 from '../../img/bascula3.webp'
import NavbarTwoLap from "../../Routes/NavbarTwo/NavbarTwoLap/NavbarTwoLap"
import NavbarTwoMob from "../../Routes/NavbarTwo/NavbarTwoMob/NavbarTwoMob"
import { useMediaQuery } from "react-responsive"

const Calculadora = () => {
    const [edad, setEdad] = useState('')
    const [peso, setPeso] = useState('')
    const [altura, setAltura] = useState('')
    const [calculo, setCalculo] = useState(0)
    const [res, setRes] = useState(0)
    const [cal, setCal] = useState(false)
    const [isCalculating, setIsCalculating] = useState(false);
    const [error, setError] = useState(false);
    const isMobile = useMediaQuery({ maxWidth: 700 });

    const handleSubmit = (e) => {
        e.preventDefault();
      
        if (!isCalculating) {
          setIsCalculating(true);
      
          const alt = altura / 100;
          const IMC = peso / (alt * alt);
          const resImc = IMC.toFixed(1);
      
          setCalculo(resImc);
      
          if (altura <= 130 || peso <= 35 || edad <= 17) {
            setError(true);
            setCal(false);
          } else if ((altura >= 130 || peso >= 35 || edad >= 17) && (resImc <= 18.5)) {
            setRes(1);
            setCal(true);
            setError(false);
          } else if ((altura >= 130 || peso >= 35 || edad >= 17) && (resImc >= 18.5 && resImc <= 25.0)) {
            setRes(2);
            setCal(true);
            setError(false);
          } else if ((altura >= 130 || peso >= 35 || edad >= 17) && (resImc >= 25.0 && resImc <= 30.0)) {
            setRes(3);
            setCal(true);
            setError(false);
          } else if ((altura >= 130 || peso >= 35 || edad >= 17) && resImc >= 30) {
            setRes(4);
            setCal(true);
            setError(false);
          }
      
          setIsCalculating(false);
        }
      };

    return(
        <>
        <Helmet>
            <title>Calculadora de indice de masa corporal (IMC)</title>
            <meta name="description" content='Calcula tu Índice de Masa Corporal (IMC) de manera rápida y sencilla. Obtén resultados personalizados y aprende a interpretar tus datos para mejorar tu salud y bienestar.' />
            <link rel="canonical" href='https://www.fitknow.fit/calculadoraIMC' />
        </Helmet>
        {isMobile ? <NavbarTwoMob /> : <NavbarTwoLap />}
        <div className="Calculadora">
            <h1 className="tituloCalculadora">Calculadora de indice de masa corporal (IMC)</h1>
            <div className="infoIMCcalculadora">
                <p className="textArt" style={{ textIndent: '2em', textAlign: 'center', width: '100%'}}>La calculadora de Índice de Masa Corporal (IMC) es una herramienta sencilla pero muy útil para evaluar de manera aproximada el estado de salud y composición corporal de una persona. El IMC se calcula a partir de la relación entre el peso y la estatura de un individuo, y proporciona una medida estandarizada que permite clasificar si la persona se encuentra en un rango saludable, con sobrepeso u obesidad.</p>
                <p className="textArt" style={{ textIndent: '2em', textAlign: 'center', width: '100%'}}>Esta calculadora es ampliamente utilizada por profesionales de la salud, nutricionistas y personal médico, ya que el IMC es uno de los indicadores más comúnmente empleados para determinar si una persona presenta un peso adecuado para su altura. Más allá de ser un simple número, el IMC puede ser un reflejo del riesgo que conlleva tener un peso corporal fuera del rango saludable, ya que tanto el sobrepeso como la obesidad se han asociado con diversas afecciones como enfermedades cardiovasculares, diabetes, hipertensión y algunos tipos de cáncer, entre otras.</p>
                <p className="textArt" style={{ textIndent: '2em', textAlign: 'center', width: '100%'}}>Conocer el propio IMC puede ser muy valioso para las personas, ya que les permite tener una idea general de su estado de salud y, si fuera necesario, tomar medidas para mejorar su composición corporal a través de cambios en hábitos alimenticios y de actividad física. Además, esta información puede ser útil para el seguimiento y monitoreo de programas de pérdida de peso o de mejora de la condición física.</p>
            </div>



                <form className="formCalculadora" onSubmit={handleSubmit}>
                    <p className="textInputsCalculadora">Altura (cm) ej: 180</p>
                    <input className="inputCalculadora" onChange={(e) => setAltura(parseFloat(e.target.value))} type="number" required/>
                    <p className="textInputsCalculadora">Peso (kg) ej: 80</p>
                    <input className="inputCalculadora" onChange={(e) => setPeso(parseFloat(e.target.value))} type="number" required/>
                    <p className="textInputsCalculadora">Edad</p>
                    <input className="inputCalculadora" onChange={(e) => setEdad(parseFloat(e.target.value))} type="number" required />
                    <p className="textInputsCalculadora">Sexo</p>
                    <select className="selectCalculadora" name="Genero" id="" >
                        <option className="opSelectCalculadora" value="Hombre">Hombre</option>
                        <option value="Mujer">Mujer</option>
                    </select>
                    {error && 
                        <p className="error">Hubo un error.<br />
                        Verifica que los datos que agregaste estén correctos.</p>
                    }
                    <button type="submit" className="buttonCalculadora">Calcular</button>
                </form>
                {cal === true ?
                <div className="containerContResCalculo">
                    {res === 1 ?
                        <div className="containerResCalculo">
                            <div className="containerInfoCalculadoraRowRes">
                                <div className="circulo amarillo"></div>
                                <p className="textInfoCirCalculadoraRes">Tu IMC es: {calculo}</p>
                            </div>
                            <p className="textInfoCalculadoraRes">Tu IMC indica que tienes bajo peso. Esto puede deberse a diversos factores como una alimentación insuficiente, un metabolismo acelerado u otros motivos. Es importante que consultes a un médico o nutricionista para determinar la causa y recibir las recomendaciones adecuadas.</p>
                        </div> :
                        res === 2 ? 
                        <div className="containerResCalculo">
                            <div className="containerInfoCalculadoraRowRes">
                                <div className="circulo amarilloVerde"></div>
                                <p className="textInfoCirCalculadoraRes">Tu IMC es: {calculo}</p>
                            </div>
                            <p className="textInfoCalculadoraRes">Tu IMC indica que tu peso se encuentra dentro del rango saludable. Esto significa que tu relación entre peso y altura es adecuada.</p>
                        </div> :
                        res === 3 ?
                        <div className="containerResCalculo">
                            <div className="containerInfoCalculadoraRowRes">
                                <div className="circulo naranja"></div>
                                <p className="textInfoCirCalculadoraRes">Tu IMC es: {calculo}</p>
                            </div>
                            <p className="textInfoCalculadoraRes">Tu IMC indica que tienes sobrepeso. Esto significa que tu peso está por encima del rango saludable para tu altura.</p>
                        </div>
                        : res === 4 ?
                        <div className="containerResCalculo">
                            <div className="containerInfoCalculadoraRowRes">
                                <div className="circulo rojo"></div>
                                <p className="textInfoCirCalculadoraRes">Tu IMC es: {calculo}</p>
                            </div>
                            <p className="textInfoCalculadoraRes">Tu IMC indica que tienes obesidad. Esto significa que tu peso se encuentra muy por encima del rango saludable para tu altura.</p>
                        </div>
                        : <></>
                    }
                </div>
                :<></>}
            <div className="containerInfoCalculadora">
                <h2 className="textInfoCalculadora">¿Cuánto es lo normal de índice de masa corporal?</h2>
                <div className="infoIMCcalculadora">
                    <div className="containerInfoCalculadoraRow">
                        <div className="circulo amarillo"></div>
                        <p className="textInfoCirCalculadora">Si el IMC es inferior a 18,5, probablemente seas demasiado delgada.</p>
                    </div>
                    <div className="containerInfoCalculadoraRow">
                        <div className="circulo amarilloVerde"></div>
                        <p className="textInfoCirCalculadora">Si la fórmula del IMC da un resultado entre 18.5 y 24.9, estaríamos hablando de un peso saludable.</p>
                    </div>
                    <div className="containerInfoCalculadoraRow">
                        <div className="circulo naranja"></div>
                        <p className="textInfoCirCalculadora">Si la fórmula del IMC da un resultado igual o superior a 25, tienes unos kilos de más: en ese caso hablaríamos de sobrepeso, ligero o moderado según el resultado.</p>
                    </div>
                    <div className="containerInfoCalculadoraRow">
                        <div className="circulo rojo"></div>
                        <p className="textInfoCirCalculadora">Si el IMC está por encima de 30, podemos hablar de obesidad.</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="containerInfoCalculadora"  style={{width: '80%', margin: 'auto'}} >
            <h2 className="textInfoCalculadoraAmazon">Compra una bascula para peso corporal inteligente</h2>
            <p className="textArt" style={{ textIndent: '2em', textAlign: 'center', marginTop: '2em', width: '100%'}}>Adquirir una báscula que incorpore una calculadora de Índice de Masa Corporal (IMC) puede ser una opción sumamente práctica y beneficiosa para quienes buscan monitorear de manera integral su salud y bienestar físico. Esta solución combina dos herramientas fundamentales en un solo dispositivo, lo que ofrece una serie de ventajas significativas.</p>
            <p className="textArt" style={{ textIndent: '2em', textAlign: 'center'}}>En primer lugar, tener una báscula con calculadora de IMC integrada facilita enormemente el proceso de seguimiento de la composición corporal. Al poder medir el peso y calcular el IMC de forma simultánea, se simplifica el proceso de recopilación de datos y se reduce la probabilidad de errores o inconsistencias en los registros. Esta eficiencia en la recolección de información es clave para quienes se encuentran inmersos en programas de control de peso, rutinas de ejercicio o simplemente desean mantener un estilo de vida saludable.</p>
            <p className="textArt" style={{ textIndent: '2em', textAlign: 'center'}}>Además, la integración de la calculadora de IMC en la báscula permite una evaluación más completa del estado de salud. Al contar con ambas métricas (peso y IMC) a la mano, las personas pueden obtener una imagen más clara y detallada de su composición corporal, lo que les brinda una valiosa retroalimentación para tomar decisiones informadas sobre sus objetivos de salud y bienestar.</p>
            <p className="textArt" style={{ textIndent: '2em', textAlign: 'center'}}>Por otra parte, la conveniencia de tener una sola unidad que combine la báscula y la calculadora de IMC representa una ventaja práctica notable. En lugar de tener que utilizar dos dispositivos por separado, los usuarios pueden simplificar su rutina de seguimiento y monitoreo, ahorrando tiempo y esfuerzo. Esto resulta especialmente útil en entornos como hogares, consultorios médicos o centros de fitness, donde la accesibilidad y la facilidad de uso son factores clave.</p>
            <div className="containerAmazon">
                <a className="links" href='https://amzn.to/4aX00bm' target="_blank" rel="noreferrer"><div  className="amazonCont">
                    <img className="imgAmazon" src={bascula1} alt="" loading="lazy" />
                    <h3 className="textAmazon">Bveiugn Bveiugn - Báscula digital de baño inteligente con pantalla LED</h3>
                </div></a>
                <a className="links" href='https://amzn.to/4c9CzNP' target="_blank" rel="noreferrer"><div className="amazonCont">
                    <img className="imgAmazon" src={bascula2} alt="" loading="lazy" />
                    <h3 className="textAmazon">Báscula inteligente para peso corporal y porcentaje de grasa, báscula digital con IMC</h3>
                </div></a>
                <a className="links" href='https://amzn.to/3VhqmiO' target="_blank" rel="noreferrer"><div  className="amazonCont">
                    <img className="imgAmazon" src={bascula3} alt="" loading="lazy" />
                    <h3 className="textAmazon">T Electronics - Báscula inteligente para peso corporal con aplicación</h3>
                </div></a>
            </div>
        </div>
        </>
    )
}

export default Calculadora