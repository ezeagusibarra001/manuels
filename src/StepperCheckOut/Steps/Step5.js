import React from "react";
import "../cssSteps/step3.css";
import { useHome } from "../../context/home-context";
import ModalLoading from "../../Checkout/ModalLoading";
import { useHistory } from "react-router-dom";
import { useToasts } from "react-toast-notifications";
function Step5(props) {
  const history = useHistory();
  const { addToast } = useToasts();
  const { setFile, modalLoading, setModalLoading } = props;
  const { currentClase } = useHome();
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
          <p className="moadal">
            "Para finalizar por favor adjunta en formato imagen (PNG, JPG, JPEG..) el comprobante por el pago de la clase. "
          </p>
        </div>
        <div className="margin col-md-6">
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

export default Step5;
