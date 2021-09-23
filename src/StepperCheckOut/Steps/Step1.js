import React from "react";
import "../cssSteps/step1.css";

function Step1(props) {
  const {Styles, handleChange, currentPayment} = props;

  return (
    <div className="container height">
      <h1 className="Checkouttitle">Completá los siguientes datos</h1>

      <div className="row">
        <div>
          <input
            className="Checkoutinput"
            type="text"
            name="name"
            value={currentPayment.name}
            placeholder="Nombre"
            style={Styles}
            maxLength="20"
            onChange={handleChange}
          />

          <input
            className="Checkoutinput"
            type="text"
            name="lastname"
            placeholder="Apellido"
            value={currentPayment.lastname}
            style={Styles}
            maxLength="20"
            onChange={handleChange}
          />

          <input
            className="Checkoutinput"
            type="number"
            name="phone"
            placeholder="Telefono"
            value={currentPayment.phone}
            style={Styles}
            onChange={handleChange}
            maxLength="15"
          />

          <input
            className="Checkoutinput"
            type="e-mail"
            value={currentPayment.mail}
            name="mail"
            placeholder="E-mail"
            style={Styles}
            maxLength="50"
            onChange={handleChange}
          />
        </div>
      </div>
    </div>
  );
}

export default Step1;
