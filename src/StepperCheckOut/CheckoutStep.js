import React, { useState } from "react";
import Layout from "../Layout";
import HorizontalLinearStepper from "./HorizontalLinearStepper";
import moment from "moment";
import { useHome } from "../context/home-context";
import clienteAxios from '../config/clienteAxios'
function CheckoutStep() {
  const { currentClase } = useHome();
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
  const submit = async() => {
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
      formdata.set("dateSelected", moment(fecha.date).format("YYYY/MM/DD"));
    }
    formdata.set("phone", currentPayment.phone);
    /*-------------HAGO EL POST-----------*/
    await clienteAxios
      .post("/payments", formdata)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log("error post", err);
        
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
      setFile={setFile}
      />
    </Layout>
  );
}

export default CheckoutStep;
