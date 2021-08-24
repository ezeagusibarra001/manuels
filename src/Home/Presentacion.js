import React from "react"
import "./Presentacion.css"
import { useHome } from "../context/home-context";

function Presentacion() {
    const {imagenes} = useHome()

    return(

        <div className="ContainerPresentacionFondo">
             {imagenes.filter((imagen) => imagen.name === "portadahome.png").map((imagen)=>(
                <img alt="img"
                    src={`data:${imagen.type};base64,${imagen.bytes}`}
                    className="ImgBlog"
                />
            ))}
        </div>
    )
    
}
export default Presentacion;