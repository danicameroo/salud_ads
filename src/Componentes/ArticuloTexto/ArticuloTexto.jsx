import '../../estilos.css'
import whatsapp from '../../img/whatsapp.svg'
import twitter from '../../img/twitter.svg'
import facebook from '../../img/facebook.svg'
import mail from '../../img/mail.svg'

const ArticuloTexto = ({item}) => {
    return(
        <div className="Articulo" key={item.title}>
            <div className="containerUnoArt">
                <div className='lineArt'></div>
                <p className='compartirTextArt'>Compartir este articulo</p>
                <p className='compartirTextArtMob'>Compartir</p>
                <div className='compartirContIconsArt'>
                    <a href={`https://wa.me/?text=Te invito a revisar esta información acerca de: ${item.title} en: https://fitknow.fit/${item.id}/`} target='_blank' rel="noreferrer"><img className='iconCompArt' src={whatsapp} alt="icono whatsapp" /></a>
                    <a href={`http://twitter.com/share?url=https://fitknow.fit/${item.id}/&amp;text=${item.title}`} target='_blank' rel="noreferrer"><img className='iconCompArt' src={twitter} alt="icono twitter" /></a>
                    <a href={`http://www.facebook.com/sharer.php?u=https://fitknow.fit/${item.id}/`} target="_blank" rel="noreferrer"><img className='iconCompArt' src={facebook} alt="icono facebook" /></a>
                    <a href={`mailto:?subject=${item.title}&amp;body=https://fitknow.fit/${item.id}/`} target="_blank" rel="noreferrer"><img className='iconCompArt' src={mail} alt="icono mail" /></a>
                </div>
            </div>
            <div className="containerDosArt">
                <div className="textContArt">
                    {item.articulo.map((text, index) => (
                        <div key={index}>
                            <p className="textArt">{text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ArticuloTexto