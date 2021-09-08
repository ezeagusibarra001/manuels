import React from "react"
import "./Feedback.css"
import Carousel from 'react-bootstrap/Carousel'
import { useHome } from '../context/home-context'
import Loading from '../Loading/Loading'
function Feedback(props) {
    const titulo = "EXPERIENCIAS & OPINIONES"
    const { reviews, loadingFed } = useHome()
    console.log(reviews.length);
    return (

        <div className="ContainerFeedbackFondo">
            <div className="SubContainerFeedbackFondo">
                <div className="ContainerFeedbackTitulo">
                    <h1 className="FeedbackTitulo">{titulo}</h1>
                </div>
                {loadingFed === false && reviews.length > 0
                    ?
                    reviews[0].validate === false
                        ?
                        <Loading />
                        :
                        <div className="ContainerFeedbackCarrusel">
                            <Carousel className="FeedbackCarrusel">
                                {reviews.filter((reviews) => reviews.validate === true).map(reviews =>
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
                    :
                    <div className="ContainerDiv">
                        <Loading />

                    </div>
                }

            </div>
        </div>
    )

}
export default Feedback;
