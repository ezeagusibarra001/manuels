import React from "react";
import MobileServicios from "./MobileServicios";
import DesktopServicios from "./DesktopServicios";

function DesktopMobile() {
  if (window.innerWidth > 800) {
    return <div className="ContainerPadreServicios" id="Servicios"><DesktopServicios/></div>;
  } else {
    return <div className="ContainerPadreServicios" id="Servicios"><MobileServicios/></div>;
  }
}
export default DesktopMobile;
