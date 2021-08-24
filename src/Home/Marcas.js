import React from "react"
import "./Marcas.css"
import Carousel from 'react-bootstrap/Carousel'
import { useHome } from "../context/home-context"

function Marcas(props) {
    const { imagenes } = useHome()

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
                                {imagenes.filter((imagen) => imagen.name === "marca1.png").map((imagen) => (
                                    <img alt="img"
                                        src={`data:${imagen.type};base64,${imagen.bytes}`}
                                        className="ImgBlog"
                                    />
                                ))}
                            </div>

                            <div className="ContainerImg2">
                                {imagenes.filter((imagen) => imagen.name === "marca2.png").map((imagen) => (
                                    <img alt="img"
                                        src={`data:${imagen.type};base64,${imagen.bytes}`}
                                        className="ImgBlog"
                                    />
                                ))}
                            </div>

                            <div className="ContainerImg3">
                                {imagenes.filter((imagen) => imagen.name === "marca3.png").map((imagen) => (
                                    <img alt="img"
                                        src={`data:${imagen.type};base64,${imagen.bytes}`}
                                        className="ImgBlog"
                                    />
                                ))}
                            </div>

                            <div className="ContainerImg4">
                                {imagenes.filter((imagen) => imagen.name === "marca4.png").map((imagen) => (
                                    <img alt="img"
                                        src={`data:${imagen.type};base64,${imagen.bytes}`}
                                        className="ImgBlog"
                                    />
                                ))}
                            </div>

                        </div>
                    </Carousel.Item>

                    <Carousel.Item className="ContainerCarruselSection">
                        <div className="CarruselSection">

                            <div className="ContainerImg1">
                                {imagenes.filter((imagen) => imagen.name === "marca5.png").map((imagen) => (
                                    <img alt="img"
                                        src={`data:${imagen.type};base64,${imagen.bytes}`}
                                        className="ImgBlog"
                                    />
                                ))}
                            </div>

                            <div className="ContainerImg2">
                                {imagenes.filter((imagen) => imagen.name === "marca6.png").map((imagen) => (
                                    <img alt="img"
                                        src={`data:${imagen.type};base64,${imagen.bytes}`}
                                        className="ImgBlog"
                                    />
                                ))}
                            </div>

                            <div className="ContainerImg3">
                                {imagenes.filter((imagen) => imagen.name === "marca7.png").map((imagen) => (
                                    <img alt="img"
                                        src={`data:${imagen.type};base64,${imagen.bytes}`}
                                        className="ImgBlog"
                                    />
                                ))}
                            </div>

                            <div className="ContainerImg4">
                                {imagenes.filter((imagen) => imagen.name === "marca8.png").map((imagen) => (
                                    <img alt="img"
                                        src={`data:${imagen.type};base64,${imagen.bytes}`}
                                        className="ImgBlog"
                                    />
                                ))}
                            </div>

                        </div>
                    </Carousel.Item>

                    <Carousel.Item className="ContainerCarruselSection">
                        <div className="CarruselSection">

                            <div className="ContainerImg1">
                                {imagenes.filter((imagen) => imagen.name === "marca9.png").map((imagen) => (
                                    <img alt="img"
                                        src={`data:${imagen.type};base64,${imagen.bytes}`}
                                        className="ImgBlog"
                                    />
                                ))}
                            </div>

                            <div className="ContainerImg2">
                                {imagenes.filter((imagen) => imagen.name === "marca10.png").map((imagen) => (
                                    <img alt="img"
                                        src={`data:${imagen.type};base64,${imagen.bytes}`}
                                        className="ImgBlog"
                                    />
                                ))}
                            </div>

                            <div className="ContainerImg3">
                                {imagenes.filter((imagen) => imagen.name === "marca11.png").map((imagen) => (
                                    <img alt="img"
                                        src={`data:${imagen.type};base64,${imagen.bytes}`}
                                        className="ImgBlog"
                                    />
                                ))}
                            </div>

                            <div className="ContainerImg4">
                                {imagenes.filter((imagen) => imagen.name === "marca12.png").map((imagen) => (
                                    <img alt="img"
                                        src={`data:${imagen.type};base64,${imagen.bytes}`}
                                        className="ImgBlog"
                                    />
                                ))}
                            </div>

                        </div>
                    </Carousel.Item>



                </Carousel>

            </div>

        </div>
    )

}
export default Marcas;
