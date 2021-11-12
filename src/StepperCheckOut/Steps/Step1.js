import React from "react";
import "../cssSteps/step1.css";

function Step1(props) {
  const { Styles, handleChange, currentPayment } = props;

  return (
    <div className="container height">
      <h1 className="Checkouttitle">Completá los siguientes datos</h1>

      <div className="row">
        <form
          class="gform"
          method="POST"
          data-email="ezeagusibarra@gmail.com"
          action="https://script.google.com/macros/s/AKfycbwqbzn6u6vTMDWGndc397V9jzmx5N87aIK_2jIF1w/exec"
        >
          <input
            className="Checkoutinput"
            type="text"
            name="clientname"
            value={currentPayment.clientname}
            placeholder="Nombre"
            style={Styles}
            maxLength="20"
            onChange={handleChange}
          />

          <input
            className="Checkoutinput"
            type="text"
            name="clientlastname"
            placeholder="Apellido"
            value={currentPayment.clientlastname}
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
            type="email"
            id="emailInput"
            value={currentPayment.email}
            name="email"
            placeholder="E-mail"
            style={Styles}
            maxLength="50"
            onChange={handleChange}
          />
          <button onClick="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Step1;
