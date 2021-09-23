import React, {useState} from "react";
import "../cssSteps/step3.css";
import { useHome } from "../../context/home-context";
import moment from "moment";
import ModalLoading from "../../Checkout/ModalLoading";
function Step3(props) {
  
  const {setFecha, setFile, modalLoading, setModalLoading} = props;
  const { currentClase } = useHome();
  const x = [];
  if (currentClase !== undefined) {
    const dates = currentClase.dates;
    dates.forEach((d) => {
      x.push(d);
    });
  }
  /*HANDLE DATEE */
  const handleDate = (e) => {
    console.log(moment(e).format("YYYY/MM/DD"));
    setFecha({ date: e });
  };
  /*handle fileee */
  
  const handleFile = (e) => {
    let file = e.target.files[0];
    setFile({ file: file });
  };
  return (
    <div className="container height">
      <h1 className="row Checkouttitle">Finaliza tu compra</h1>
      <div className="row">
        <div className="col-md-6">
          <h1 className="CheckoutSubtitleB">Eleji la fecha de tu clase</h1>

          {!x[0] ? (
              <div></div>
            ) : (
              <input
                type="radio"
                name="date"
                onClick={() => handleDate(x[0].date)}
              />
            )}{" "}
            <label className="CheckoutLabel2">
              {!x[0] ? <div></div> : moment(x[0].date).format("DD/MM")}
            </label>
            {!x[1] ? (
              <div></div>
            ) : (
              <input
              
                name="date"
                type="radio"
                onClick={() => handleDate(x[1].date)}
              />
            )}{" "}
            {!x[1] ? (
              <div></div>
            ) : (
              <label className="CheckoutLabel2">
                {moment(x[1].date).format("DD/MM")}
              </label>
            )}
        </div>
        <div className="col-md-6">
        <h1 className="CheckoutSubtitleB">Adjunta el comprobante de pago</h1>
        <input
            className="CheckoutinputComprobante"
            type="file"
            name="file"
            onChange={(e) => handleFile(e)}
          />
        </div>
      </div>
      <ModalLoading
        modalLoading={modalLoading}
        setModalLoading={setModalLoading}
      />
    </div>
  );
}

export default Step3;

