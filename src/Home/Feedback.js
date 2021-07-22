import React from "react"
import "./Feedback.css"
import Carousel from 'react-bootstrap/Carousel'

function Feedback(props) {


    return(

        <div className="ContainerFeedbackFondo">
            <div className="SubContainerFeedbackFondo">
                <div className="ContainerFeedbackTitulo">
                    <h1 className="FeedbackTitulo"> Mis Alumnos... </h1>
                </div>
                <div className="ContainerFeedbackCarrusel">
                    <Carousel className="FeedbackCarrusel">
                        <Carousel.Item className="ContainerFeedbackCarruselSection">
                            <div className="ContainerCarruselReseñas">
                            <h3 className="FeedbackReseña">
                                "Desafie todos mis miedos , me supere a mi misma utilizando el poder de mi voz
                                Gracias Manuels por haberme ayudado a alcanzar una mejor version de mi misma!!!"
                            </h3>
                            <h1 className="FeedbackAuthor">-Petosa Ayala Franco</h1>
                            </div>
                        </Carousel.Item>
                        <Carousel.Item className="ContainerFeedbackCarruselSection">
                            <div className="ContainerCarruselReseñas">
                            <h3 className="FeedbackReseña">
                                "Desafie todos mis miedos , me supere a mi misma utilizando el poder de mi voz
                                Gracias Manuels por haberme ayudado a alcanzar una mejor version de mi misma!!!
                                Hoy me siento mas influencer que nunca.A seguir creciendo"
                            </h3>
                            <h1 className="FeedbackAuthor">-Ibarra Ezequiel Agustin</h1>
                            </div>
                        </Carousel.Item>
                        <Carousel.Item className="ContainerFeedbackCarruselSection">
                            <div className="ContainerCarruselReseñas">
                            <h3 className="FeedbackReseña">
                                "Desafie todos mis miedos , me supere a mi misma utilizando el poder de mi voz
                                Gracias Manuels por haberme ayudado a alcanzar una mejor version de mi misma!!!
                                Hoy me siento mas influencer que nunca.A seguir creciendo. Super interesante y enriquecedor.
                            </h3>
                            <h1 className="FeedbackAuthor">-Oubiña Maria Pilar</h1>
                            </div>
                        </Carousel.Item>
                    </Carousel>
                </div>
            </div>
        </div>
    )
    
}
export default Feedback;
