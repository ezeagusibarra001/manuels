import React, { useState } from "react";
import Layout from "../Layout";
import "./Form.css";
import axios from "axios";
import { useToasts } from "react-toast-notifications";
function Form(props) {
  const { addToast } = useToasts();
  const asunto = props.match.params.asunto; //TOMO EL VALOR DE LA URL
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: asunto,
    message: "",
  });
  const handleConsulta = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleEnviarMail =  async() => {
    var formdata = new FormData();
    formdata.set('name', form.name)
    formdata.set('email', form.email)
    formdata.set('subject', form.subject)
    formdata.set('message', form.message)
  
    await axios
      .post("https://script.google.com/macros/s/AKfycbxcxQLxjtmKz3jQEZ-zeqrXxYMdcbSzoH5yaiHgvQ/exec", formdata)
      .then((res) => {
        console.log(res.data);
        addToast("¡Mail enviado!", {
          appearance: "success",
          autoDismiss: true,
      });
      })
      .catch((err) => {
        console.log("error post", err);
      });
  };
  /*----------------------------------------------------------------------------------------------------------*/
  return (
    <Layout>
      <div className="ContainerFormulario">
        <dv className="ContainerActive">
          <h1 className="TituloActive">Haceme tu Consulta</h1>
        </dv>
        <div className="ActiveUp">
          <div className="FormularioIcono">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="70"
              height="40"
              fill="#a06ab4"
              className="IconoForm"
              viewBox="0 0 16 16"
            >
              <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
            </svg>
          </div>
        </div>
        <div className="ContainerFormularioConsulta">
          <div /*class="gform" method="POST" action="https://script.google.com/macros/s/AKfycbxcxQLxjtmKz3jQEZ-zeqrXxYMdcbSzoH5yaiHgvQ/exec"*/ className="FormularioConsulta">
            <label className="LabelFormulario">NOMBRE</label>
            <input
              onChange={handleConsulta}
              className="InputFormulario"
              name="name"
              value={form.name}
            />
            <label className="LabelFormulario">MAIL</label>
            <input
              onChange={handleConsulta}
              className="InputFormulario"
              name="email"
              value={form.email}
            />
            <label className="LabelFormulario">ASUNTO</label>
            <input
              className="InputFormulario"
              name="subject"
              value={form.subject}
            />
            <label className="LabelFormulario">MENSAJE/CONSULTA</label>
            <textarea
              onChange={handleConsulta}
              className="textareaFormulario"
              name="message"
              value={form.message}
            />
            <button className="ButtonFormularioConsulta" onClick={handleEnviarMail} /*onClick="submit"*/>
              Enviar
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
}
export default Form;
