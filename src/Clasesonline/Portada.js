import React from "react"
import "./PortadaClases.css"
import {useHome} from '../context/home-context'
function Portada(props) {
    const {imagenes} = useHome()
    return(

        <div className="ContainerFondoPortada">
            <img className="ImgPortada" src="./assets/portadaclasesonline.png"></img>
        </div>
    )
    
}
export default Portada;
