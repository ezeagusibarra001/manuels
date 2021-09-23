import React from "react";
import "../cssSteps/step3.css";
import Button from "react-bootstrap/Button";
function Step3() {
  return (
    <div className="container height">
      <h1 className="row Checkouttitle">Finaliza tu compra</h1>
      <div className="row">
        <div className="col-md-6">
          <h1 className="CheckoutSubtitleB">Eleji la fecha de tu clase</h1>
          <input type="radio" id="n1" name="date" />
          <label className="CheckoutLabel2">22/8</label>
          <input type="radio" id="n1" name="date" />
          <label className="CheckoutLabel2">29/8</label>
        </div>
        <div className="col-md-6">
        <h1 className="CheckoutSubtitleB">Adjunta el comprobante de pago</h1>
        <input
            className="CheckoutinputComprobante"
            type="file"
            name="file"
          />
        </div>
      </div>
      <Button className="row CheckoutButton">Comprar</Button>
    </div>
  );
}

export default Step3;
