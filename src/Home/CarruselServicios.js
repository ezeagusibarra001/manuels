<<<<<<< Updated upstream
import React from "react"
=======
import React from 'react';
>>>>>>> Stashed changes
import { Carousel } from '3d-react-carousal';
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function CarruselServicios() {
  let slides = [
    <Card style={{ width: '50%' }} alt="1">
      <Card.Img variant="top" />
      <Card.Body>
        <Card.Text>
          <p>Talleres grupales de locución,
            neutro, oratoria, radio, podcast.</p>
          <p>Clases personalizadas de:
            locución, oratoria, radio, neutro
            y podcast. </p>
          <p style={{ visibility: 'hidden' }}>Asesorías Únicas</p>
          <p style={{ visibility: 'hidden' }}>Asesorías Únicas</p>
        </Card.Text>
      </Card.Body>
    </Card>,
    <Card style={{ width: '50%' }} alt="1">
      <Card.Img variant="top" />
      <Card.Body>
        <Card.Text>
          <p>Talleres disruptivos para
            empresas: locución, radioteatro,
            radio y podcast.</p>
          <p>Workshop para empresas:
            locución, oratoria, neutro. </p>
          <p>Asesorías Únicas</p>
          <p style={{ visibility: 'hidden' }}>Asesorías Únicas</p>

        </Card.Text>
      </Card.Body>
    </Card>,
    <Card style={{ width: '50%' }} alt="1">
      <Card.Img variant="top" />
      <Card.Body>
        <Card.Text>
          <p>Locuciones comerciales castellano
            neutro y rioplatense</p>
          <p>Grabaciones en homestudio
            propio.</p>
          <p>Conducción de eventos</p>
          <p>Radio, Podcast y TV</p>
        </Card.Text>
      </Card.Body>
    </Card>,
  ];
  return <div><Carousel slides={slides} autoplay={true} interval={10000} /></div>;
}

export default CarruselServicios;



