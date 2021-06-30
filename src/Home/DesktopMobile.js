import React from "react";
import CarruselServicios from "./CarruselServicios";
import Servicios from "./Servicios";

function DesktopMobile() {
  if (window.innerWidth > 767) {
    return <div className="ContainerPadreServicios"><Servicios/></div>;
  } else {
    return <div className="ContainerPadreServicios"><CarruselServicios/></div>;
  }
}
export default DesktopMobile;
