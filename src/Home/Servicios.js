import React from "react"
import "./Servicios.css"
import Card from 'react-bootstrap/Card'
import Carousel from 'react-bootstrap/Carousel'




function Servicios() {


    return(

        <div className="ContainerPadreServicios">

        <Carousel className="ContainerCarrusel">

            <Carousel.Item>
                <Card className="ContainerCard">
                    <div className="ContainerImg"> 
                    <Card.Img className="Img"  src="../assets/logo1.png" />
                    </div>
                    <Card.Body>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Carousel.Item>







            <Carousel.Item>
                <Card className="ContainerCard">
                    <div className="ContainerImg">
                    <Card.Img className="Img"  src="../assets/logo1.png" />
                    </div>
                    <Card.Body>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Carousel.Item>


            <Carousel.Item>
                <Card className="ContainerCard">
                    <div className="ContainerImg">
                    <Card.Img className="Img"  src="../assets/logo1.png" />
                    </div>
                    <Card.Body>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Carousel.Item>

        </Carousel>

        </div>
    )
    
}
export default Servicios;