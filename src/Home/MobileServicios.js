import React from "react";
import "./MobileServicios.css"
import { Carousel } from "3d-react-carousal";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function MobileServicios() {
  var slides = [
    <Card >
      <Card.Img variant="top" />
      <Card.Body>
        <Card.Text>
          <p>
            Talleres grupales de locución, neutro, oratoria, radio, podcast.
          </p>
          <p>
            Clases personalizadas de: locución, oratoria, radio, neutro y
            podcast.
          </p>
          <p>Asesorías Únicas</p>
        </Card.Text>
      </Card.Body>
    </Card>,

    <Card>
      <Card.Img variant="top" />
      <Card.Body>
        <Card.Text>
          <p>
            Talleres para empresas: locución, radioteatro, radio y
            podcast.
          </p>
          <p>Workshop para empresas: locución, oratoria, neutro. </p>
          <p>Asesorías Únicas</p>
        </Card.Text>
      </Card.Body>
    </Card>,

    <Card>
      <Card.Img variant="top" />
      <Card.Body>
        <Card.Text>
          <p>Locuciones comerciales castellano neutro y rioplatense</p>
          <p>Grabaciones en homestudio propio.</p>
          <p>Conducción de eventos: Radio, Podcast y TV </p>
        </Card.Text>
      </Card.Body>
    </Card>,
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
