import React from "react";
import "../cssSteps/step2.css";
import { useHome } from "../../context/home-context";
import "../cssSteps/step3.css";

function Step3() {
  const { currentClase, stateDescuento, formaPago, seña } = useHome();

  return (
    <div className="container height">
      <h1 className="row Checkouttitle">
        Monto a pagar: $
        {stateDescuento === true
          ? currentClase.price * 0.8
          :
          seña === true
          ?
          currentClase.price * 0.2
          :
          currentClase.price}
      </h1>
      <div className="row">
        {formaPago === "transferencia" ? (
          <div className="col-md-6">
            <h1 className="CheckoutSubtitleB">
              Transferencia Bancaria: B.GALICIA
            </h1>
            <h1 className="CheckoutB">CBU: 0070306030004017201477</h1>
            <h1 className="CheckoutB">CUIL: 27346237320</h1>
            <h1 className="CheckoutB">ALIAS: LARGO.ALCE.PAMPA</h1>
          </div>
        ) : (
          <div className="col-md-6">
            <h1 className="CheckoutSubtitleB">Mercado Pago</h1>
            <h1 className="CheckoutB">
              <a
                target="_blank"
                rel="noreferrer"
                href={
                  stateDescuento === true
                    ? sessionStorage.getItem("discountLink")
                    :
                    seña === true
                    ?
                    sessionStorage.getItem("link1")
                    :
                    sessionStorage.getItem("link")
                }
              >
                Click Aqui{" "}
              </a>
              para <strong className="pagar">PAGAR</strong> la clase.
            </h1>
          </div>
        )}
      </div>
    </div>
  );
}

export default Step3;
