import React, { useState } from "react";
import "../cssSteps/step2.css";
import Button from "react-bootstrap/Button";
import { useHome } from "../../context/home-context";
import { useToasts } from "react-toast-notifications";
import clienteAxios from "../../config/clienteAxios";
function Step2() {
  const [stateDescuento, setStateDescuento] = useState(false);
  const { currentClase } = useHome();
  const { addToast } = useToasts();
  const [discount, setDiscount] = useState({ code: "" });
  const handleDiscount = (e) => {
    setDiscount({ [e.target.name]: e.target.value });
    //console.log(e.target.value)
  };
  const getDiscount = async () => {
    await clienteAxios
      .get(`/discounts/names/${discount.code}`)
      .then((res) => {
        console.log(res.data);
        setStateDescuento(true);
        addToast("¡Promocion aplicada!", {
          appearance: "success",
          autoDismiss: true,
        });
      })
      .catch((err) => {
        console.log("error post", err);
        setStateDescuento(false);
        addToast("¡Oh! Codigo Incorrecto", {
          appearance: "warning",
          autoDismiss: true,
        });
      });
  };
  return (
    <div className="container height">
      <h1 className="row Checkouttitle">Medios de Pago</h1>
      <div className="row">
        <div className="col-md-6">
          <h1 className="CheckoutSubtitleB">
            Transferencia Bancaria: B.GALICIA
          </h1>
          <h1 className="CheckoutB">CBU: 0070306030004017201477</h1>
          <h1 className="CheckoutB">CUIL: 27346237320</h1>
          <h1 className="CheckoutB">ALIAS: LARGO.ALCE.PAMPA</h1>
        </div>
        <div className="col-md-6">
          <h1 className="CheckoutSubtitleB">Mercado Pago</h1>

          <h1 className="CheckoutB">
            <a target="_blank" rel="noreferrer" href={currentClase.link}>
              Click Aqui{" "}
            </a>
            para <strong>PAGAR</strong> la clase.
          </h1>

          <h1 className="CheckoutB">
            <a target="_blank" rel="noreferrer" href={currentClase.link1}>
              Click Aqui{" "}
            </a>
            para <strong>SEÑAR</strong> la clase.
          </h1>
          <h1 className="CheckoutSubtitleB">Codigo de Descuento</h1>
          <input
            className="CheckoutinputStep2"
            type="text"
            name="code"
            placeholder="Codigo de Descuento"
            maxLength="10"
            onChange={handleDiscount}
          />
          <Button
            className="walletPiola"
            onClick={getDiscount}
          >
            Aplicar Descuento
          </Button>
          {stateDescuento === true ? (
            <h1 className="CheckoutB">
              <a
                target="_blank"
                rel="noreferrer"
                href={currentClase.discountLink}
              >
                Click Aqui{" "}
              </a>
              para <strong>PAGAR</strong> la clase bonificada.
            </h1>
          ) : (
            <div></div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Step2;
