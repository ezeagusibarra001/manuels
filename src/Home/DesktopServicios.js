import React from "react";
import "./DesktopServicios.css";
import Card from "react-bootstrap/Card";
import Carousel from "react-bootstrap/Carousel";

function DesktopServicios() {


  return (
      <div className="ContainerPadreServiciosDesktop">

        <div className="ContainerTituloServiciosDesktop">
          <h1 className="TituloServiciosDesktop">SERVICIOS</h1>
        </div>

        <div className="ContainerCard1Desktop">

          <div className="Card1Desktop">
            <div className="ContainerIconoDesktop"> 
              <img className="IconoDesktop1" src="../assets/icono1.png"></img>
            </div>
            <p className="Texto1Card1">Locuciones comerciales castellano neutro y rioplatense</p>
            <p className="Texto2Card1">Grabaciones en el homestudio propio</p>
            <p className="Texto3Card1">Conducción de eventos: Radio , Podcast y TV </p>
            <div className="ContainerButtonCardDesktop"> 
              <button className="ButtonCardDesktop"> ¡CONTACTATE CONMIGO! </button>
            </div>

          </div>
        </div>

        <div className="ContainerCard2Desktop">

          <div className="Card2Desktop">
            <div className="ContainerIconoDesktop">
              <img className="IconoDesktop2" src="../assets/icono2.png"></img>
            </div>
            <p className="Texto1Card2">Talleres grupales de locución , neutro ,oratoria , radio , podcast.</p>
            <p className="Texto2Card2"> Clases personalizadas de:</p>
            <p className="Texto3Card2">
              Locución,
              Oratoria,
              Radio,
              Neutro y Podcast
            </p>
            <div className="ContainerButtonCardDesktop"> 
              <button className="ButtonCardDesktop"> VER MÁS </button>
            </div>

          </div>
        </div>

        <div className="ContainerCard3Desktop">

          <div className="Card3Desktop">
            <div className="ContainerIconoDesktop">
              <img className="IconoDesktop3" src="../assets/icono3.png"></img>
            </div>
            <p className="Texto1Card3">Talleres para empresas: Locucion , Radioteatro , radio y Podcast </p>
            <p className="Texto2Card3"> work shop para empresas: Locución , Oratoria , Neutro.</p>
            <p className="Texto3Card3"> Asesorias Únicas</p>
            <div className="ContainerButtonCardDesktop"> 
              <button className="ButtonCardDesktop"> VER MÁS </button>
            </div>

          </div>
        </div>

        

      </div>
  )
}
export default DesktopServicios;
