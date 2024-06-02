import '../Articulo/Articulo.css'
import '../Articulo/ArticuloMob.css'
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
                    <a href={`https://wa.me/?text=https%3A%2F%2Fsalud-jet.vercel.app%2Farticulo%2F${item.id}%2F`} target='_blank'><img className='iconCompArt' src={whatsapp} alt="" /></a>
                    <a href={`http://twitter.com/share?url=https://salud-jet.vercel.app/articulo/${item.id}/&amp;text=${item.title}`} target='_blank'><img className='iconCompArt' src={twitter} alt="" /></a>
                    <a href={`http://www.facebook.com/sharer.php?u=https://salud-jet.vercel.app/articulo/${item.id}/`} target="_blank"><img className='iconCompArt' src={facebook} alt="" /></a>
                    <a href={`mailto:?subject=${item.title}&amp;body=https://salud-jet.vercel.app/articulo/${item.id}/`} target="_blank"><img className='iconCompArt' src={mail} alt="" /></a>
                </div>
            </div>
            <div className="containerDosArt">
                <div className="textContArt">
                    {item.articulo[0].subtitulos.map((subtitle, index) => (
                        <div key={index}>
                            <h3 className="subtitleArt">{subtitle}</h3>
                            <p style={{ textIndent: '2em' }} className="textArt">{item.articulo[0].text[index]}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ArticuloTexto