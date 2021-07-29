import React from "react"
import "./Feedback.css"
import Carousel from 'react-bootstrap/Carousel'

function Feedback(props) {
    const titulo="EXPERIENCIAS & OPINIONES"
    const feedbacks=[
        {
            reseña:"Desafie todos mis miedos , me supere a mi misma utilizando el poder de mi voz. Gracias Manuels por haberme ayudado a alcanzar una mejor version de mi misma!!!",
            author:"Petosa Ayala Franco",
            validator:true,
        },
        {
            reseña:"Desafie todos mis miedos , me supere a mi misma utilizando el poder de mi voz Gracias Manuels por haberme ayudado a alcanzar una mejor version de mi misma!!! Hoy me siento mas influencer que nunca.A seguir creciendo",
            author:"Ibarra Ezeuiel Agustin",
            validator:true,
        },
        {
            reseña:"Desafie todos mis miedos , me supere a mi misma utilizando el poder de mi voz Gracias Manuels por haberme ayudado a alcanzar una mejor version de mi misma!!! Hoy me siento mas influencer que nunca.A seguir creciendo. Super interesante y enriquecedor.",
            author:"Oubiña Maria Pilar",
            validator:true,
        },
        {
            reseña:"Me encanta la pija",
            author:"Centu",
            validator:false,
        },
        {
            reseña:"Mi amor fue culpa de tiffer puedo jurarlo",
            author:"Joaquin Jimenez Jaureche",
            validator:true,
        },
    ]

    return(

        <div className="ContainerFeedbackFondo">
            <div className="SubContainerFeedbackFondo">
                <div className="ContainerFeedbackTitulo">
                    <h1 className="FeedbackTitulo">{titulo}</h1>
                </div>
                <div className="ContainerFeedbackCarrusel">
                    <Carousel className="FeedbackCarrusel">
                        {feedbacks.filter((feedbacks) =>feedbacks.validator ===true).map(feedbacks=>
                            <Carousel.Item className="ContainerFeedbackCarruselSection">
                                <div className="ContainerCarruselReseñas">
                                    <h3 className="FeedbackReseña">
                                        "{feedbacks.reseña}"
                                    </h3>
                                    <h1 className="FeedbackAuthor">-{feedbacks.author}</h1>
                                </div>
                            </Carousel.Item>
                        )}
                    </Carousel>
                </div>
            </div>
        </div>
    )
    
}
export default Feedback;
