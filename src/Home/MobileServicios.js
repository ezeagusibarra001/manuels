import React from "react";
import "./MobileServicios.css"
import { Carousel } from "3d-react-carousal";
import Button from "react-bootstrap/Button";

function MobileServicios() {
  var slides = [
    
    <div className="ContainerCardServiciosMobile">
      <div className="ContainerImgServiciosMobile">
        <img className="ImgServiciosMobile" src="../assets/icono1.png"/>
      </div>
      <div className="ContainerTextoServiciosMobile1">
        <p className="Texto1ServiciosMobile1">Talleres para empresas: Locución,Radioteatro y Podcast</p>
        <p className="Texto2ServiciosMobile1">Workshop para empresas:</p>
        <p className="Texto3ServiciosMobile1">Locución,Oratoria Neutro </p>
        <p className="Texto4ServiciosMobile1">Asesorias Únicas</p>
      </div>
    </div>,

    <div className="ContainerCardServiciosMobile">
      <div className="ContainerImgServiciosMobile">
        <img className="ImgServiciosMobile" src="../assets/icono2.png"/>
      </div>
      <div className="ContainerTextoServiciosMobile2">
        <p className="Texto1ServiciosMobile2">Locuciones comerciales castellano neutro y rioplatense </p>
        <p className="Texto2ServiciosMobile2">Grabaciones en homestudio propio</p>
        <p className="Texto3ServiciosMobile2">Conducción de eventos</p>
        <p className="Texto4ServiciosMobile2">Radio, Podcast y TV</p>
      </div>
    </div>,

    <div className="ContainerCardServiciosMobile">
    <div className="ContainerImgServiciosMobile">
      <img className="ImgServiciosMobile" src="../assets/icono3.png"/>
    </div>
    <div className="ContainerTextoServiciosMobile3">
      <p className="Texto1ServiciosMobile3">Talleres grupales de: Locución ,Neutro,Oratoria,Radio,Podcast </p>
      <p className="Texto2ServiciosMobile3">Clases personalizadas de:</p>
      <p className="Texto3ServiciosMobile4">Locución,Oratoria,Radio, Neutro y Podcast</p>
    </div>
    </div>,
  ];

  return (
    <div className="ContainerGodServiciosMobile"> 
      <div className="ContainerPadreMobileServicios" >
        <div className="ContainerTituloServiciosMobile">
          <h1 className="TituloServiciosMobile">SERVICIOS</h1>
        </div>
          <Carousel slides={slides} autoplay={true} interval={5000} className="CaruselServiciosMobile" />
      </div>
    </div>

  );
}

export default MobileServicios;
