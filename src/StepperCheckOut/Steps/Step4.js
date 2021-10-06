import React from "react";
import "../cssSteps/step4.css";
import { useHome } from "../../context/home-context";
import dayjs from 'dayjs'

import ListGroup from "react-bootstrap/ListGroup";
function Step4(props) {
  const { currentClase, seña, stateDescuento, formaPago } = useHome();
  const { currentPayment, fecha } = props;
  return (
    <div className="container height">
      <h1 className="row Checkouttitle">Comproba tus datos</h1>
      <div className="scroll row">
        <div className="col-md-6">
          <ListGroup variant="flush">
            <ListGroup.Item className="lista">
              Nombre : <strong>{currentPayment.name}</strong>
            </ListGroup.Item>
            <ListGroup.Item className="lista">
              Apellido : <strong>{currentPayment.lastname}</strong>
            </ListGroup.Item>
            <ListGroup.Item className="lista">
              Telefono : <strong>{currentPayment.phone}</strong>
            </ListGroup.Item>
            <ListGroup.Item className="lista">
              Mail : <strong>{currentPayment.mail}</strong>
            </ListGroup.Item>
          </ListGroup>
        </div>
        <div className="col-md-6">
          <ListGroup variant="flush">
            <ListGroup.Item className="lista">
              Comienzo de cursada :{" "}
              <strong>{dayjs(fecha.date).add(1, 'day').format('DD/MM')}</strong>
            </ListGroup.Item>
            <ListGroup.Item className="lista">
              Monto abonado :{" "}
              <strong>
                ${stateDescuento === true
                  ? currentClase.price * 0.8
                  : seña === true
                  ? currentClase.price * 0.2
                  : currentClase.price}
              </strong>
            </ListGroup.Item>
            <ListGroup.Item className="lista">
              Metodo de pago :{" "}
              <strong>
                {formaPago === "transferencia"
                  ? "Transferencia Bancaria"
                  : formaPago === "mercado"
                  ? "Mercado Pago"
                  : ""}
              </strong>
            </ListGroup.Item>
            <ListGroup.Item className="lista">
              Descuento aplicado : <strong>{stateDescuento === true ? "Si" : "No"}</strong>
            </ListGroup.Item>
          </ListGroup>
        </div>
      </div>
    </div>
  );
}

export default Step4;
