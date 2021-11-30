import React, { useState } from "react";
import { useToasts } from "react-toast-notifications";
import { useHistory } from "react-router-dom";
import clienteAxios from "../config/clienteAxios";
import axios from "axios";
import dayjs from "dayjs"; //ESTA LIBRERIA SIRVE PARA MANEJAR LAS FECHAS
function Step3(props) {
  const { addToast } = useToasts();
  const history = useHistory();
  const obtenerClases = props.obtenerClases;
  const setIcon3 = props.setIcon3;
  const step = props.step;
  const setStep = props.setStep;
  const {DescAplicado, setDescAplicado} = props;
  /*------------TRAIGO LA INFORMACIÓN DE LA CLASE A LA QUE SE ESTAN ANOTANDO------------*/
  const currentClase = props.currentClase;
  /*------------TRAIGO LA INFORMACIÓN DEL FORM PARA INSCRIBIRSE------------*/
  const CheckForm = props.CheckForm;
  /*------------ATRAPAR EL FILE EN UN HOOK------------*/
  const [file, setFile] = useState({ file: null });
  const handleFile = (e) => {
    let file = e.target.files[0];
    setFile({ file: file });
    console.log("File:", file);
  };

  const handleEnviarMail = async () => {
    let formdataPayments = new FormData();
    formdataPayments.set("clientname", CheckForm.name);
    formdataPayments.set("clientlastname", CheckForm.lastname);
    formdataPayments.set("email", CheckForm.mail);
    formdataPayments.set("lesson", currentClase[0].title);
    formdataPayments.set("dateSelected",dayjs(currentClase[0].date).format("DD/MM/YY"));
    formdataPayments.set("phone", CheckForm.phone);
    await axios
      .post(
        "https://script.google.com/macros/s/AKfycbygzZi7uaAUEFC7HxxEiO9S7ZXeX7oKfgGvqS0S/exec",
        formdataPayments
      )
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log("error post mail", err);
      });
  };
  const HandleSubmit = async (e) => {
    /*----LOGICA PARA EL LOADING DEL BUTTON----*/
    var btnLc=document.getElementById("ButtonConfirm")
    btnLc.classList.add("LoadingCheck")
    btnLc.classList.add("Desabled")
    /*-----------------------------------------*/
    let image = file.file;
    let formdata = new FormData();
    formdata.set("image", image);
    formdata.set("clientname", CheckForm.name);
    formdata.set("clientlastname", CheckForm.lastname);
    formdata.set("email", CheckForm.mail);
    formdata.set("lesson", currentClase[0].title); //TRAE UN ARRAY DE UN SOLO OBJETO
    formdata.set("price", currentClase[0].price);     //TRAE UN ARRAY DE UN SOLO OBJETO
    formdata.set("dateSelected",dayjs(currentClase[0].date).format("DD/MM/YY"));
    formdata.set("phone", CheckForm.phone);
    if (image!==null) {
      await clienteAxios
        .post("/payments", formdata)
        .then(async () => {
          await handleEnviarMail();
        })
        .then(() => {
          addToast("¡Gracias por tu reserva!", {
            appearance: "success",
            autoDismiss: true,
          });
          btnLc.classList.remove("LoadingCheck")
          btnLc.classList.remove("Desabled")
          obtenerClases();
          let bar3 = document.querySelector(".Bar3");
          bar3.style.transition = "1s ease-in-out";
          bar3.style.width = "100%";
          bar3.style.backgroundColor = "#a06ab4";
          let tres = document.querySelector(".tres");
          bar3.addEventListener("transitionend", () => {
            tres.style.backgroundColor = "#a06ab4";
            setIcon3(true);
            setStep(step + 1);
          });
        })
        .catch((err) => {
          btnLc.classList.remove("LoadingCheck")
          btnLc.classList.remove("Desabled")
          console.log("error post", err);
          addToast("Oh! Algo no salio como lo esperabamos.", {
            appearance: "error",
            autoDismiss: true,
          });
          setTimeout(function () {
            history.push("/ClasesOnline");
          }, 2000);
        });
    } else {
      btnLc.classList.remove("LoadingCheck")
      btnLc.classList.add("Desabled")
      addToast("Debes adjuntar el comprobante de pago", {
        appearance: "warning",
        autoDismiss: true,
      });
    }
  };
  return (
    <div className="ContainerStep3">
      <h2 className="Step3Title">Paso 3°: Confirmar inscripción</h2>
      <div className="ChechDatosContainer">
        <div className="ScrollContent">
          <h5>Comprobar los datos:</h5>
          <p>
            {" "}
            <img
              alt="img"
              src="../assets/iconoc9.webp"
              className="WelcomeIconos"
            />
            Te has inscripto en la clase: <b>{currentClase[0].title} </b>
          </p>
          <p>
            {" "}
            <img
              alt="img"
              src="../assets/iconoc9.webp"
              className="WelcomeIconos"
            />
            Fecha: <b>{dayjs(currentClase[0].date).format("DD/MM/YY")}</b>
          </p>
          <p>
            {" "}
            <img
              alt="img"
              src="../assets/iconoc9.webp"
              className="WelcomeIconos"
            />
            Nombre: <b>{CheckForm.name} </b>
          </p>
          <p>
            {" "}
            <img
              alt="img"
              src="../assets/iconoc9.webp"
              className="WelcomeIconos"
            />
            Nombre: <b>{CheckForm.lastname} </b>
          </p>
          <p>
            {" "}
            <img
              alt="img"
              src="../assets/iconoc9.webp"
              className="WelcomeIconos"
            />
            E-mail: <b>{CheckForm.mail} </b>
          </p>
          <p>
            {" "}
            <img
              alt="img"
              src="../assets/iconoc9.webp"
              className="WelcomeIconos"
            />
            Telefono: <b>{CheckForm.phone} </b>
          </p>
          <p>
            {" "}
            <img
              alt="img"
              src="../assets/iconoc9.webp"
              className="WelcomeIconos"
            />
            Monto Transferido: <b>$
              {
                DescAplicado === true
                ? currentClase[0].price*0.80
                :currentClase[0].price
              }</b>{" "}
          </p>
        </div>
      </div>
      <p className="TextComprobante">Adjuntar comprobante:</p>
      <input
        className="CheckComprobante"
        type="file"
        name="file"
        onChange={(e) => handleFile(e)}
      />
      <button className="ButtonConfirm" id="ButtonConfirm" onClick={HandleSubmit}>
        Confirmar inscripción
      </button>
    </div>
  );
}
export default Step3;
