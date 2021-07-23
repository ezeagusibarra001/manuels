import React from "react"
import "./Portadablog.css"

function PortadaBlog() {



    return(


        <div className="ContenedorPortadaBlog">
            <div className="ContenedorImgBlog">
                <img 
                    src="./assets/logo1.png
                    "
                    className="ImgBlog"
                />
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
        </div>
    )
    
}
export default PortadaBlog;