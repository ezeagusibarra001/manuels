import React from "react";
import "../cssSteps/step2.css";
import Button from "react-bootstrap/Button";
function Step2() {
  return (
    <div className="container">
      <h1 className="row Checkouttitle">Medios de Pago</h1>
      <div className="row">
        <div className="col">
          <h1 className="CheckoutSubtitleB">
            Transferencia Bancaria: B.GALICIA
          </h1>
          <h1 className="CheckoutB">CBU: 0070306030004017201477</h1>
          <h1 className="CheckoutB">CUIL: 27346237320</h1>
          <h1 className="CheckoutB">ALIAS: LARGO.ALCE.PAMPA</h1>
        </div>
        <div className="col">
          <h1 className="CheckoutSubtitleB">Mercado Pago</h1>

          <h1 className="CheckoutB">
            <a href="#">Click Aqui </a>para pagar la clase.
          </h1>

          <h1 className="CheckoutB">
            <a href="#">Click Aqui </a>para señar la clase.
          </h1>
          <h1 className="CheckoutSubtitleB">Codigo de Descuento</h1>
          <input
            className="CheckoutinputStep2"
            type="text"
            name="descuento"
            placeholder="Descuento"
            //style={Styles}
            maxLength="15"
            //onChange={handleChange}
          />
          <Button className="walletPiola">Aplicar Descuento</Button>
        </div>
      </div>
    </div>
  );
}

export default Step2;
