import React from "react"
import "./Feedback.css"
import Carousel from 'react-bootstrap/Carousel'
import {useHome} from '../context/home-context'

function Feedback(props) {
    const titulo="EXPERIENCIAS & OPINIONES"
    const {reviews} = useHome()

    return(

        <div className="ContainerFeedbackFondo">
            <div className="SubContainerFeedbackFondo">
                <div className="ContainerFeedbackTitulo">
                    <h1 className="FeedbackTitulo">{titulo}</h1>
                </div>
                <div className="ContainerFeedbackCarrusel">
                    <Carousel className="FeedbackCarrusel">
                        {reviews.filter((reviews) =>reviews.validate === true).map(reviews=>
                            <Carousel.Item className="ContainerFeedbackCarruselSection">
                                <div className="ContainerCarruselReseñas">
                                    <h3 className="FeedbackReseña">
                                        "{reviews.commentary}"
                                    </h3>
                                    <h1 className="FeedbackAuthor">-{reviews.name}</h1>
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
