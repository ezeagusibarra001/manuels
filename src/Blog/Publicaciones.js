import React  from "react"
import "./Publicaciones.css"


function Publicaciones(props) {

    const publicacion=[
        {
            titulo:"REACT JS",
            img1:"./assets/marca1.png",
            showimg:false,
            subtitulo1:"Exploramiento y uso de la voz como metodologia psicoterapeutica",
            subtitulo2:"Exploramiento y uso de la voz como metodologia psicoterapeutica",
            parrafo1:"El elemento es posicionado de acuerdo al flujo normal del documento, y luego es desplazado con relación a su ancestro que se desplace más cercano y su bloque contenedor (ancestro en nivel de bloque más cercano) incluyendo elementos relacionados a tablas, basados en los valores de top, right, bottom, y left. El desplazamiento no afecta la posición de ningún otro elmento.",
            parrafo2:"El elemento es posicionado de acuerdo al flujo normal del documento, y luego es desplazado con relación a su ancestro que se desplace más cercano y su bloque contenedor (ancestro en nivel de bloque más cercano) incluyendo elementos relacionados a tablas, basados en los valores de top, right, bottom, y left. El desplazamiento no afecta la posición de ningún otro elmento.",
        },
        {
            titulo:"PYTHON",
            img1:"./assets/marca2.png",
            showimg:true,
            subtitulo1:"Exploramiento y uso de la voz como metodologia psicoterapeutica",
            subtitulo2:"Exploramiento y uso de la voz como metodologia psicoterapeutica",
            parrafo1:"El desplazamiento no afecta la posición de ningún otro elmento.",
            parrafo2:"El elemento es posicionado de acuerdo al flujo normal del documento, y luego es desplazado con relación a su ancestro que se desplace más cercano y su bloque contenedor (ancestro en nivel de bloque más cercano) incluyendo elementos relacionados a tablas, basados en los valores de top, right, bottom, y left. El desplazamiento no afecta la posición de ningún otro elmento.",
        },
        {
            titulo:"JAVASCRIPT",
            img1:"./assets/marca4.png",
            showimg:true,
            subtitulo1:"Exploramiento y uso de la voz como metodologia psicoterapeutica",
            subtitulo2:"Exploramiento y uso de la voz como metodologia psicoterapeutica",
        },
        {
            titulo:"HTMLS & CSS",
            img1:"./assets/marca4.png",
            showimg:true,
            subtitulo1:"Exploramiento y uso de la voz como metodologia psicoterapeutica",
            subtitulo2:"Exploramiento y uso de la voz como metodologia psicoterapeutica",
            parrafo1:"El elemento es posicionado de acuerdo al flujo normal del documento, y luego es desplazado con relación a su ancestro que se desplace más cercano y su bloque contenedor (ancestro en nivel de bloque más cercano) incluyendo elementos relacionados a tablas, basados en los valores de top, right, bottom, y left. El desplazamiento no afecta la posición de ningún otro elmento.",
        },
    ]
    return(
    <div className="ContainerPublicaciones">
        {publicacion.map((publicacion) =>(
        <div className="ContainerAux">
            <div className="ContainerPublicacionesTitulo">
                <h1 className="PublicacionesTitulo">{publicacion.titulo}</h1>
            </div>
            <div className="SubContainerPublicaciones">
                <div className="ContainerPublicacionesImg1">
                    {
                        publicacion.showimg &&
                        <img 
                        className="PublicacionesImg"
                        src={publicacion.img1}
                        />
                    }
                </div>
                <div className="ContainerPublicacionesTextos1">
                    <h2 className="PublicacionesSubTitulo">
                        <b>Exploramiento y uso de la voz como metodologia psicoterapeutica</b>
                    </h2>
                    <p className="PublicacionesParrafos">
                        {publicacion.subtitulo1}
                    </p>
                    <p className="PublicacionesParrafos">
                        {publicacion.parrafo1}
                    </p>
                </div>
                <div className="ContainerPublicacionesTextos2">
                    <h2 className="PublicacionesSubTitulo">
                        <b>Exploramiento y uso de la voz como metodologia psicoterapeutica</b>
                    </h2>
                    <p className="PublicacionesParrafos">
                        {publicacion.parrafo1}
                    </p>
                    <p className="PublicacionesParrafos">
                        {publicacion.parrafo2}
                    </p>
                </div>
            </div> 
        </div>
         ))}
    </div>
    )
    
}
export default Publicaciones;