import React from "react"
import { useHome } from "../context/home-context";
import "./Portadablog.css"

function PortadaBlog() {
    const {imagenes} = useHome()

    return(


        <div className="ContenedorPortadaBlog">
            <div className="ContenedorImgBlog">
            {imagenes.filter((imagen) => imagen.name === "fondoblog.png").map((imagen)=>(
                <img alt="img"
                    src={`data:${imagen.type};base64,${imagen.bytes}`}
                    className="ImgBlog"
                />
            ))}
            </div>
            <div className="ContenedorTextos">
                <div className="SubContenedorTextos">
                    <h1 className="Blogtitulo">Mi blog</h1>
                    <p className="Blogtexto">
                        Un espacio lleno de contenidos los cuales harán que tu comunicación oral
                        sea efectiva , correcta y espontanea
                    </p>
                </div>
            </div>
            <button className="BlogButton">VER PUBLICACIONES</button>
        </div>
    )
    
}
export default PortadaBlog;