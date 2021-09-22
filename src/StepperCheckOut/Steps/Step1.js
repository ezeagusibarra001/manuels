import React from "react";
import "../cssSteps/step1.css";

function Step1() {
  return (
    <div className="container">
      <h1 className="Checkouttitle">Completá los siguientes datos</h1>

      <div className="row">
        <div>
          <input
            className="Checkoutinput"
            type="text"
            name="name"
            placeholder="Nombre"
            //style={Styles}
            maxLength="15"
            //onChange={handleChange}
          />

          <input
            className="Checkoutinput"
            type="text"
            name="lastname"
            placeholder="Apellido"
            //style={Styles}
            maxLength="15"
            //onChange={handleChange}
          />

          <input
            className="Checkoutinput"
            type="number"
            name="phone"
            placeholder="Telefono"
            //style={Styles}
            //onChange={handleChange}
            maxLength="15"
          />

          <input
            className="Checkoutinput"
            type="e-mail"
            name="email"
            placeholder="E-mail"
            //style={Styles}
            maxLength="50"
            //onChange={handleChange}
          />
        </div>
      </div>
    </div>
  );
}

export default Step1;
