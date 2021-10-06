import React, { useState } from "react";
import Layout from "../Layout";
import HorizontalLinearStepper from "./HorizontalLinearStepper";
import dayjs from 'dayjs'
import { useHome } from "../context/home-context";
import clienteAxios from "../config/clienteAxios";
import { useToasts } from "react-toast-notifications";
import { useHistory } from "react-router-dom";
function CheckoutStep() {
  const history = useHistory();
  const { addToast } = useToasts();
  const { currentClase, setStateDescuento, formaPago, seña } = useHome();
  const [currentPayment, setCurrentPayment] = useState({
    name: "",
    lastname: "",
    mail: "",
    phone: "",
  });
  const [fecha, setFecha] = useState({ date: "" });
  // eslint-disable-next-line
  const [file, setFile] = useState({
    file: null,
  });
  const [Styles, setStyles] = useState();
  const handleChange = (e) => {
    setCurrentPayment({ ...currentPayment, [e.target.name]: e.target.value });
    if (
      0 < e.target.value.length &&
      e.target.value.length < e.target.maxLength
    ) {
      setStyles({ outlineColor: "green" });
    } else {
      setStyles({ outlineColor: "red" });
    }
  };
  const [modalLoading, setModalLoading] = useState(false);
  const submit = async (handleNext) => {
    setStateDescuento(false)
    setModalLoading(true);
    /*-----------------JUNTO TODO EN UN FORMDATA-----------------*/
    let image = file.file;
    let formdata = new FormData();
    if (image !== null) {
      formdata.set("file", image);
    }
    formdata.set("name", currentPayment.name);
    formdata.set("lastname", currentPayment.lastname);
    formdata.set("email", currentPayment.email);
    if (currentClase !== undefined) {
      formdata.set("lesson", currentClase.idLesson);
      formdata.set("dateSelected", dayjs(fecha.date).format('YYYY/MM/DD'));
    }
    formdata.set("phone", currentPayment.phone);
    /*-------------HAGO EL POST-----------*/
    await clienteAxios
      .post("/payments", formdata)
      .then((res) => {
        console.log(res.data);
        setModalLoading(false);
        handleNext();
      })
      .catch((err) => {
        console.log("error post", err);
        console.log(image.size)
        console.log(formdata.get("dateSelected"))
        setModalLoading(false);
        addToast("¡Oh! Algo salio mal..", {
          appearance: "error",
          autoDismiss: false,
        });
        addToast("Maximo tamaño permitido 1 MB", {
          appearance: "info",
          autoDismiss: false,
        });
      });
  };
  const validationStep1 = (handleNext) => {
    if (currentPayment.phone === "") {
      addToast("El campo Telefono es obligatorio", {
        appearance: "warning",
        autoDismiss: true,
      });
    }else if(currentPayment.name === ""){
      addToast("El campo Nombre es obligatorio", {
        appearance: "warning",
        autoDismiss: true,
      });
    }else if(currentPayment.lastname === ""){
      addToast("El campo Apellido es obligatorio", {
        appearance: "warning",
        autoDismiss: true,
      });
    }else if(currentPayment.mail === ""){
      addToast("El campo Mail es obligatorio", {
        appearance: "warning",
        autoDismiss: true,
      });
    }else if (document.querySelector("#emailInput").validationMessage !== ''){
      addToast("Ingrese un mail valido", {
        appearance: "warning",
        autoDismiss: true,
      });
    }else{
      handleNext()
    }
  };
  const validationStep5 = (handleNext) => {
    if (fecha.date === "") {
      addToast("Elija una fecha porfavor", {
        appearance: "warning",
        autoDismiss: true,
      });
    }else if (file.file == null) {
      addToast("Adjunte su comprobante de pago porfavor", {
        appearance: "warning",
        autoDismiss: true,
      });
    }else{
      submit(handleNext)
    }
  }
  const validationStep2 = (handleNext) => {
    if (fecha.date === "") {
      addToast("Elija una fecha porfavor", {
        appearance: "warning",
        autoDismiss: true,
      });
    }else if (formaPago === "") {
      addToast("Elija un metodo de pago porfavor", {
        appearance: "warning",
        autoDismiss: true,
      });
    }else if (seña === "") {
      addToast("Elija si seña o abona completo", {
        appearance: "warning",
        autoDismiss: true,
      });
    }else{
      handleNext()
    }
  }
  if(currentClase === undefined){
    history.push("/ClasesOnline")
    addToast("Porfavor intentelo de nuevo sin recargar la pagina.", {
      appearance: "error",
      autoDismiss: true,
    });
  }
  return (
    <Layout>
      <HorizontalLinearStepper
        handleChange={handleChange}
        Styles={Styles}
        submit={submit}
        currentPayment={currentPayment}
        setFecha={setFecha}
        fecha={fecha}
        setFile={setFile}
        modalLoading={modalLoading}
        setModalLoading={setModalLoading}
        validationStep1={validationStep1}
        validationStep2={validationStep2}
        validationStep5={validationStep5}
      />
    </Layout>
  );
}

export default CheckoutStep;
