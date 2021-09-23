import React, { useState } from "react";
import Layout from "../Layout";
import HorizontalLinearStepper from "./HorizontalLinearStepper";
function CheckoutStep() {
  const [currentPayment, setCurrentPayment] = useState({
    name: "",
    lastname: "",
    mail: "",
    phone: "",
  });
  // eslint-disable-next-line
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
  const submit = () => {
      console.log(currentPayment)
  }
  const saveStep1 = () => {
    sessionStorage.setItem('name',currentPayment.name)
    sessionStorage.setItem('lastname',currentPayment.lastname)
    sessionStorage.setItem('mail',currentPayment.mail)
    sessionStorage.setItem('phone',currentPayment.phone)
  }
  return (
    <Layout>
      <HorizontalLinearStepper 
      handleChange={handleChange}
      Styles={Styles}
      submit={submit}
      saveStep1={saveStep1}
      />
    </Layout>
  );
}

export default CheckoutStep;
