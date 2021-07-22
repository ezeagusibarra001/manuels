import React from "react"
import "./Reseñas.css"
import Carousel from 'react-bootstrap/Carousel'

function Reseñas(props) {


    return(

        <div className="ContainerReseñasFondo">

            <div className="ContainerMarcasTitulo">
                <h1 className="MarcasTitulo"> Comentarios de mis clases </h1>
            </div>
            <div className="ContainerMarcasCarrusel">

                <Carousel className="Carrusel">
                  
                    <Carousel.Item className="ContainerCarruselSection">
                       <div className="CarruselReseñas">
                        <h1>COMENTARIO</h1>
                        <h2>Nombres</h2>
                       </div>
                    </Carousel.Item>
                    <Carousel.Item className="ContainerCarruselSection">
                       <div className="CarruselReseñas">
                        <h1>COMENTARIO</h1>
                        <h2>Nombres</h2>
                       </div>
                    </Carousel.Item>
                </Carousel>

            </div>

        </div>
    )
    
}
export default Reseñas;
