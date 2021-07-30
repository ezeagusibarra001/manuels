import React from "react"
import "./Feedback.css"
import Carousel from 'react-bootstrap/Carousel'
import {useHome} from '../context/home-context'

function Feedback(props) {
    const titulo="EXPERIENCIAS & OPINIONES"
    const {feedbacks} = useHome()

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
