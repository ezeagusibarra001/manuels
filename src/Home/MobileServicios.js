import React from "react";
import "./MobileServicios.css"
import { Carousel } from "3d-react-carousal";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function MobileServicios() {
  var slides = [
    
    <div className="ContainerCardServiciosMobile">
      <div className="ContainerImgServiciosMobile">
        <img className="ImgServiciosMobile" src="../assets/icono1.png"/>
      </div>
      <div className="ContainerTextoServiciosMobile">
        <p className="TextoServiciosMobile">Talleres grupales de Locución , Neutro , Oratoria , Radio , Podcast </p>
        <p className="TextoServiciosMobile">Clases personalizadas de: Locución , Oratoria , Radio , Neutro y Podcast</p>
      </div>
    </div>,

    <div className="ContainerCardServiciosMobile">
      <div className="ContainerImgServiciosMobile">
        <img className="ImgServiciosMobile" src="../assets/icono2.png"/>
      </div>
      <div className="ContainerTextoServiciosMobile">
        <p className="TextoServiciosMobile">Talleres grupales de Locución , Neutro , Oratoria , Radio , Podcast </p>
        <p className="TextoServiciosMobile">Clases personalizadas de: Locución , Oratoria , Radio , Neutro y Podcast</p>
      </div>
    </div>,

    <div className="ContainerCardServiciosMobile">
    <div className="ContainerImgServiciosMobile">
      <img className="ImgServiciosMobile" src="../assets/icono3.png"/>
    </div>
    <div className="ContainerTextoServiciosMobile">
      <p className="TextoServiciosMobile">Talleres grupales de Locución , Neutro , Oratoria , Radio , Podcast </p>
      <p className="TextoServiciosMobile">Clases personalizadas de: Locución , Oratoria , Radio , Neutro y Podcast</p>
    </div>
    </div>,
  ];

  return (

    <div className="ContainerPadreMobileServicios" >
      <div className="ContainerTituloServiciosMobile">
        <h1 className="TituloServiciosMobile">SERVICIOS</h1>
      </div>

    <div className="ContainerCaruselServiciosMobile"> </div>
      <Carousel slides={slides} autoplay={true} interval={100000} className="CaruselServiciosMobile" />
    </div>

  );
}

export default MobileServicios;
