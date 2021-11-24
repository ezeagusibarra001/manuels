import React,{useState} from "react";
import MobileServicios from "./MobileServicios";
import DesktopServicios from "./DesktopServicios";
function DesktopMobile() {
  const [screenSize,setScreenSize]=useState(window.innerWidth)
    const screenChange =()=>{
        setScreenSize(window.innerWidth)
        console.log("Screen size:",screenSize)
    }
    window.addEventListener("resize",()=>{screenChange();}) //SE EJECUTA CADA VEZ QUE LA PANTALLA CAMBIA DE TAMAÑO
    window.addEventListener("load",()=>{screenChange();})   //SE EJECUTA CADA VEZ QUE LA PAGINA SE RECARGA
  if(screenSize>800) {
    return(
      <div id="Servicios"> 
        <DesktopServicios/>
      </div>
    )
  } 
  else {
    return (
      <div id="Servicios"> 
        <MobileServicios/>
      </div>
    )
  }
}
export default DesktopMobile;
