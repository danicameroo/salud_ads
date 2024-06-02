import { useState } from "react"
import NavbarTwo from "../../Routes/NavbarTwo/NavbaTwo"
import './Calculadora.css'
import './CalculadoraMob.css'
import { Helmet } from "react-helmet"

const Calculadora = () => {
    const [edad, setEdad] = useState('')
    const [peso, setPeso] = useState('')
    const [altura, setAltura] = useState('')
    const [calculo, setCalculo] = useState(0)
    const [res, setRes] = useState(0)
    const [cal, setCal] = useState(false)
    const [isCalculating, setIsCalculating] = useState(false);
    const [error, setError] = useState(false);

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
        <meta name="description" content="Calcula tu Índice de Masa Corporal (IMC) de manera rápida y sencilla. Obtén resultados personalizados y aprende a interpretar tus datos para mejorar tu salud y bienestar." />
        </Helmet>
        <NavbarTwo />
        <div className="Calculadora">
            <h1 className="tituloCalculadora">Calculadora de indice de masa corporal (IMC)</h1>
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
        </>
    )
}

export default Calculadora