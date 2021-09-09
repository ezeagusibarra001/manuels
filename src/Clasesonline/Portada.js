import React from "react"
import { useHome } from "../context/home-context";
import "./PortadaClases.css"

function Portada(props) {
    const {imagenes} = useHome()
    return(

        <div className="ContainerFondoPortada">
           {imagenes.filter((imagen) => imagen.name === "clasesonline.png").map((imagen)=>(
                <img alt="img"
                    src={`data:${imagen.type};base64,${imagen.bytes}`}
                    className="ImgBlog"
                />
            ))}
        </div>
    )
    
}
export default Portada;
