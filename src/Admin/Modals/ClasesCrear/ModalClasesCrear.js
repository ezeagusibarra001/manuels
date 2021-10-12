import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import clienteAxios from "../../../config/clienteAxios";
import { useHome } from "../../../context/home-context";
import "../../Admin.css";
import { useToasts } from "react-toast-notifications";
function ModalClasesCrear(props) {
  const { addToast } = useToasts();
  const { obtenerClases } = useHome();
  const { showCrear, setShowCrear } = props;
  const [Styles, setStyles] = useState();
  const [currentClase, setCurrentClase] = useState({
    title: "",
    description: "",
    forwho: "",
    duration: "",
    teacher: "",
    requirements: "",
    link: "",
    link1: "",
    date: "",
    quota: 10,
    descountLink: "",
    price: 1000,
  });
  const handleClose = () => {
    setShowCrear(false);
  };
  const handleChange = (e) => {
    setCurrentClase({ ...currentClase, [e.target.name]: e.target.value });
    //const max = e.target.maxLength
    if (
      0 < e.target.value.length &&
      e.target.value.length < e.target.maxLength
    ) {
      setStyles({ outlineColor: "green" });
    } else {
      setStyles({ outlineColor: "red" });
    }
    console.log(currentClase);
  };
  var postData = {
    title: currentClase.title,
    description: currentClase.description,
    forwho: currentClase.forwho,
    duration: currentClase.duration,
    teacher: currentClase.teacher,
    requirements: currentClase.requirements,
    link: currentClase.link,
    link1: currentClase.link1,
    date: currentClase.date,
    quota: currentClase.quota,
    descountLink: currentClase.descountLink,
    price: currentClase.price,
  };

  const submit = async () => {
    await clienteAxios
      .post("/lessons", postData)
      .then((res) => {
        console.log(res.data);
        console.log("postData", postData);
        obtenerClases();
        handleClose();
        addToast("Clase creada", {
          appearance: "success",
          autoDismiss: true,
        });
      })
      .catch((err) => {
        console.log("error post", err);
        handleClose();
        addToast("Ha ocurrido un error", {
          appearance: "error",
          autoDismiss: true,
        });
      });
  };
  return (
    <div>
      <Modal
        show={showCrear}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title id="modal-tittle">Crear clase</Modal.Title>
        </Modal.Header>
        <Modal.Body className="row">
          <div className="col-6">
            <textarea
              type="text"
              placeholder="Titulo"
              maxLength="16"
              onChange={handleChange}
              name="title"
              style={Styles}
              className="CCinputTitle"
            />
            <br></br>
            <textarea
              name="description"
              as="textarea"
              placeholder="Descripcion de la clase"
              maxLength="200"
              style={Styles}
              onChange={handleChange}
              className="CCinputDescription"
            />
            <br></br>
            <textarea
              name="forwho"
              as="textarea"
              placeholder="¿Quienes pueden hacerlo?"
              maxLength="120"
              style={Styles}
              onChange={handleChange}
              className="CCinputForwho"
            />
            <br></br>
            <Card.Title>Especificaciones</Card.Title>
            <textarea
              name="duration"
              as="textarea"
              placeholder="4 encuentros de 90min. 1 clase semanal. Duración total: 1 mes"
              maxLength="65"
              style={Styles}
              onChange={handleChange}
              className="CCinputDuration"
            />
            <br></br>

            <Card.Title>Precio</Card.Title>
            <Form.Control
              type="number"
              placeholder="Precio"
              onChange={handleChange}
              name="price"
              maxLength="4"
            />
          </div>
          <div className="col-6">
            <textarea
              name="teacher"
              as="textarea"
              placeholder="Dictado por:"
              maxLength="55"
              style={Styles}
              onChange={handleChange}
              className="CCinputTeacher"
            />
            <br></br>
            <textarea
              name="requirements"
              as="textarea"
              placeholder="Requisitos:"
              maxLength="65"
              style={Styles}
              onChange={handleChange}
              className="CCinputRequisitos"
            />
            <br></br>
            <textarea
              name="link"
              as="textarea"
              placeholder="Link Mercado Pago:"
              maxLength="100"
              style={Styles}
              onChange={handleChange}
              className="CCinputRequisitos"
            />
            <br></br>
            <textarea
              name="link1"
              as="textarea"
              placeholder="Link Seña Pago:"
              maxLength="100"
              style={Styles}
              onChange={handleChange}
              className="CCinputRequisitos"
            />
            <br></br>
            <textarea
              name="descountLink"
              as="textarea"
              placeholder="Link de Descuento:"
              maxLength="100"
              style={Styles}
              onChange={handleChange}
              className="CCinputRequisitos"
            />
            <br></br>
            <Card.Title>Vacantes</Card.Title>
            <Form.Control
              type="number"
              placeholder="Vacantes"
              onChange={handleChange}
              name="quota"
            />
            <br></br>
            <Card.Title>Primer fecha</Card.Title>
            <Form.Control type="date" name="date" onChange={handleChange} />
            <br></br>
          </div>
        </Modal.Body>
        <Modal.Footer>
          {currentClase.title === "" || currentClase.description === "" ? (
            <Button variant="primary" disabled onClick={submit}>
              Crear
            </Button>
          ) : (
            <Button variant="primary" onClick={submit}>
              Crear
            </Button>
          )}
          <Button variant="primary" onClick={handleClose}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default ModalClasesCrear;
