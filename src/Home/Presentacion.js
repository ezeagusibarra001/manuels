import React from "react"
import "./Presentacion.css"
import { useHome } from "../context/home-context";
function Presentacion() {
    const {portadahome} = useHome()
    return(
        <div className="ContainerPresentacionFondo">
            {portadahome.filter((imagen) => imagen.name === "portada.png").map((imagen)=>(
                <img alt="img"
                    src={`data:${imagen.type};base64,${imagen.bytes}`}
                    className="ImgPresentacion"
                />
            ))}
        </div>
    )
}
export default Presentacion;