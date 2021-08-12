import React, { useEffect, useState } from "react"
import "./Publicaciones.css"
import { useHome } from '../context/home-context'
import clienteAxios from '../config/clienteAxios'
function Publicaciones(props) {
    const { blog, oneImage } = useHome()

    return (
        <div className="ContainerPublicaciones">
            {blog.map((publicacion) => (
                <div className="ContainerAux">
                    <div className="ContainerPublicacionesTitulo">
                        <h1 className="PublicacionesTitulo">{publicacion.title}</h1>
                    </div>
                    <div className="SubContainerPublicaciones">
                        <div className="ContainerPublicacionesImg1">
                            {oneImage.map((i) => (
                                <img className="PublicacionesImg" src={`data:${i.type};base64,${i.bytes}`} />
                            ))}
                        </div>
                        <div className="ContainerPublicacionesTextos1">
                            <h2 className="PublicacionesSubTitulo">
                                <b>{publicacion.subtitle}</b>
                            </h2>
                            <p className="PublicacionesParrafos">
                                {publicacion.description}
                            </p>
                            <p className="PublicacionesParrafos">
                                {publicacion.description1}
                            </p>
                        </div>
                        <div className="ContainerPublicacionesTextos2">
                            <h2 className="PublicacionesSubTitulo">
                                <b>{publicacion.subtitle2}</b>
                            </h2>
                            <p className="PublicacionesParrafos">
                                {publicacion.description2}
                            </p>
                            <p className="PublicacionesParrafos">
                                {publicacion.description3}
                            </p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )

}
export default Publicaciones;