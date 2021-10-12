import React, { useState } from "react";
import "../cssSteps/step3.css";
import { useHome } from "../../context/home-context";
import dayjs from 'dayjs'
import { useHistory } from "react-router-dom";
import { useToasts } from "react-toast-notifications";
import Button from "react-bootstrap/Button";
import clienteAxios from "../../config/clienteAxios";
import Form from "react-bootstrap/Form";
function Step2(props) {
  const history = useHistory();
  const { addToast } = useToasts();
  const { setFecha, fecha } = props;
  const {
    currentClase,
    setStateDescuento,
    setFormaPago,
    setSeña,
    formaPago,
    seña,
  } = useHome();
  const [discount, setDiscount] = useState({ code: "" });

  const x = [];
  if (currentClase !== undefined) {
    const dates = currentClase.dates;
    dates.forEach((d) => {
      x.push(d);
    });
  } else {
    history.push("/ClasesOnline");
    addToast("Porfavor intentelo de nuevo sin recargar la pagina.", {
      appearance: "error",
      autoDismiss: true,
    });
  }
  /*HANDLE DATEE */
  const handleDate = (e) => {
    setFecha({ date: e });
  };
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
          autoDismiss: false,
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
      <h1 className="row Checkouttitle">Personaliza tu pago</h1>
      <div className="row">
        <div className="col-md-6">
          <h1 className="CheckoutSubtitleB">Eleji la fecha de tu clase</h1>
          <Form>
            <div key="inline-radio-date" className="mb-3">
              {!x[0] ? (
                <div></div>
              ) : fecha.date === x[0].date ? (
                <Form.Check
                  className="CheckoutLabel3"
                  inline
                  label={dayjs(x[0].date).add(1, 'day').format('DD/MM')}
                  type="radio"
                  name="date"
                  onClick={() => handleDate(x[0].date)}
                  id="inline-radio-1"
                  checked
                />
              ) : (
                <Form.Check
                  className="CheckoutLabel3"
                  inline
                  label={dayjs(x[0].date).add(1, 'day').format('DD/MM')}
                  type="radio"
                  name="date"
                  onClick={() => handleDate(x[0].date)}
                  id="inline-radio-1"
                />
              )}
              {!x[1] ? (
                <div></div>
              ) : fecha.date === x[1].date ? (
                <Form.Check
                  className="CheckoutLabel3"
                  inline
                  label={dayjs(x[1].date).add(1, 'day').format('DD/MM')}
                  onClick={() => handleDate(x[1].date)}
                  name="date"
                  type="radio"
                  id="inline-radio-2"
                  checked
                />
              ) : (
                <Form.Check
                  className="CheckoutLabel3"
                  inline
                  label={dayjs(x[1].date).add(1, 'day').format('DD/MM')}
                  onClick={() => handleDate(x[1].date)}
                  name="date"
                  type="radio"
                  id="inline-radio-2"
                />
              )}
            </div>
          </Form>
          <div>
            <h1 className="CheckoutSubtitleB">¿Como prefiere pagar?</h1>

            <Form>
              {["radio"].map((type) => (
                <div key={`inline-${type}-pay`} className="mb-3">
                  {formaPago === "transferencia" ? (
                    <Form.Check
                      className="CheckoutLabel3"
                      inline
                      label="Transferencia Bancaria"
                      name="pay"
                      type={type}
                      id={`inline-${type}-1-pay`}
                      onClick={() => setFormaPago("transferencia")}
                      checked
                    />
                  ) : (
                    <Form.Check
                      className="CheckoutLabel3"
                      inline
                      label="Transferencia Bancaria"
                      name="pay"
                      type={type}
                      id={`inline-${type}-1-pay`}
                      onClick={() => setFormaPago("transferencia")}
                    />
                  )}
                  {formaPago === "mercado" ? (
                    <Form.Check
                      className="CheckoutLabel3"
                      inline
                      label="Mercado Pago"
                      onClick={() => setFormaPago("mercado")}
                      name="pay"
                      type={type}
                      id={`inline-${type}-2-pay`}
                      checked
                    />
                  ) : (
                    <Form.Check
                      className="CheckoutLabel3"
                      inline
                      label="Mercado Pago"
                      onClick={() => setFormaPago("mercado")}
                      name="pay"
                      type={type}
                      id={`inline-${type}-2-pay`}
                    />
                  )}
                </div>
              ))}
            </Form>
          </div>
        </div>
        <div className="col-md-6">
          <h1 className="CheckoutSubtitleB">Codigo de Descuento</h1>
          <input
            className="CheckoutinputStep2"
            type="text"
            name="code"
            placeholder="Codigo de Descuento"
            maxLength="10"
            onChange={handleDiscount}
          />
          <Button className="walletPiola" onClick={getDiscount}>
            Aplicar Descuento
          </Button>
          <br></br>
          <div>
            <h1 className="CheckoutSubtitleB2">¿Seña o pago completo?</h1>
            <Form>
              {["radio"].map((type) => (
                <div key={`inline-${type}-seña`} className="mb-3">
                  {seña === true ? (
                    <Form.Check
                      className="CheckoutLabel3"
                      inline
                      label="Señar clase"
                      name="seña"
                      type={type}
                      id={`inline-${type}-1-seña`}
                      onClick={() => setSeña(true)}
                      checked
                    />
                  ) : (
                    <Form.Check
                      className="CheckoutLabel3"
                      inline
                      label="Señar clase"
                      name="seña"
                      type={type}
                      id={`inline-${type}-1-seña`}
                      onClick={() => setSeña(true)}
                    />
                  )}
                  {seña === false ? (
                    <Form.Check
                      className="CheckoutLabel3"
                      inline
                      label="Pago completo"
                      onClick={() => setSeña(false)}
                      name="seña"
                      type={type}
                      id={`inline-${type}-2-seña`}
                      checked
                    />
                  ) : (
                    <Form.Check
                      className="CheckoutLabel3"
                      inline
                      label="Pago completo"
                      onClick={() => setSeña(false)}
                      name="seña"
                      type={type}
                      id={`inline-${type}-2-seña`}
                    />
                  )}
                </div>
              ))}
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Step2;
