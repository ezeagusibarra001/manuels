import React from "react"
import "./Marcas.css"
import Carousel from 'react-bootstrap/Carousel'

function Marcas(props) {

    return (

        <div className="ContainerMarcasFondo">

            <div className="ContainerMarcasTitulo">
                <h1 className="MarcasTitulo"> MARCAS QUE CONFIARON EN MÍ </h1>
            </div>
            <div className="ContainerMarcasCarrusel">

                <Carousel className="Carrusel">

                    <Carousel.Item className="ContainerCarruselSection">
                        <div className="CarruselSection">

                            <div className="ContainerImg1">
                                <img
                                    alt="img"
                                    className="Img1"
                                    src="../assets/marca1.png"

                                />
                            </div>

                            <div className="ContainerImg2">
                                <img
                                    alt="img"
                                    className="Img1"
                                    src="../assets/marca2.png"

                                />
                            </div>

                            <div className="ContainerImg3">
                                <img
                                    alt="img"
                                    className="Img1"
                                    src="../assets/marca3.png"

                                />
                            </div>

                            <div className="ContainerImg4">
                                <img
                                    alt="img"
                                    className="Img1"
                                    src="../assets/marca4.png"

                                />
                            </div>

                        </div>
                    </Carousel.Item>

                    <Carousel.Item className="ContainerCarruselSection">
                        <div className="CarruselSection">

                            <div className="ContainerImg1">
                                <img
                                    alt="img"
                                    className="Img1"
                                    src="../assets/marca5.png"

                                />
                            </div>

                            <div className="ContainerImg2">
                                <img
                                    alt="img"
                                    className="Img1"
                                    src="../assets/marca6.png"

                                />
                            </div>

                            <div className="ContainerImg3">
                                <img
                                    alt="img"
                                    className="Img1"
                                    src="../assets/marca7.png"

                                />
                            </div>

                            <div className="ContainerImg4">
                                <img
                                    alt="img"
                                    className="Img1"
                                    src="../assets/marca8.png"

                                />
                            </div>

                        </div>
                    </Carousel.Item>

                    <Carousel.Item className="ContainerCarruselSection">
                        <div className="CarruselSection">

                            <div className="ContainerImg1">
                                <img
                                    alt="img"
                                    className="Img1"
                                    src="../assets/marca9.png"

                                />
                            </div>

                            <div className="ContainerImg2">
                                <img
                                    alt="img"
                                    className="Img1"
                                    src="../assets/marca10.png"

                                />
                            </div>

                            <div className="ContainerImg3">
                                <img
                                    alt="img"
                                    className="Img1"
                                    src="../assets/marca11.png"

                                />
                            </div>

                            <div className="ContainerImg4">
                                <img
                                    alt="img"
                                    className="Img1"
                                    src="../assets/marca12.png"

                                />
                            </div>

                        </div>
                    </Carousel.Item>



                </Carousel>

            </div>

        </div>
    )

}
export default Marcas;
