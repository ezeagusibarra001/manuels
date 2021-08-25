import React, { useState } from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Card from 'react-bootstrap/Card'
import clienteAxios from '../../../config/clienteAxios'
import { useHome } from '../../../context/home-context'
import "../../Admin.css"
import { useToasts } from "react-toast-notifications";
function ModalClasesCrear(props) {
    const { addToast } = useToasts();
    const { obtenerClases, axiosConfig } = useHome()
    const { showCrear, setShowCrear } = props;
    const [superDates, setSuperDates] = useState([])
    const [Styles, setStyles] = useState()
    const [currentClase, setCurrentClase] = useState({
        title: "",
        description: "",
        forWho: "",
        duration: "",
        teacher: "",
        requeriments: "",
        link: "",
        link1: "",
        dates: [{
            date: ""
        }, {
            date: "" || ""
        }],
        quota: "",
        discountLink: ""
    })
    const handleClose = () => {
        setShowCrear(false)
    }
    const handleChange = (e) => {
        setCurrentClase({ ...currentClase, [e.target.name]: e.target.value, })
        //const max = e.target.maxLength
        if (0 < (e.target.value).length && (e.target.value).length < e.target.maxLength) {
            setStyles({ outlineColor: "green" })
        }
        else {
            setStyles({ outlineColor: "red" })
        }
        console.log(currentClase)
    }
    const handleDate1 = (e) => {
        setSuperDates([...superDates, { date: e.target.value }])
        console.log(superDates)
    }
    const handleDate2 = (e) => {
        setSuperDates([...superDates, { date: e.target.value }])
        console.log(superDates)
    }
    var postData = {
        title: currentClase.title,
        description: currentClase.description,
        forWho: currentClase.forWho,
        duration: currentClase.duration,
        teacher: currentClase.teacher,
        requeriments: currentClase.requeriments,
        link: currentClase.link,
        link1: currentClase.link1,
        dates: superDates,
        quota: currentClase.quota,
        discountLink: currentClase.discountLink
    };

    
    const submit = async () => {
        await clienteAxios
            .post("/lessons", postData, axiosConfig)
            .then((res) => {
                console.log(res.data);
                obtenerClases();
                handleClose()
                addToast("Clase creada", {
                    appearance: "success",
                    autoDismiss: true,
                });
            })
            .catch((err) => {
                console.log("error post", err);
                handleClose()
                addToast(err, {
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
                            maxLength="22"
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
                            name="forWho"
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
                            name="requeriments"
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
                            name="discountLink"
                            as="textarea"
                            placeholder="Link de Descuento:"
                            maxLength="100"
                            style={Styles}
                            onChange={handleChange}
                            className="CCinputRequisitos"
                        />
                        <br></br>
                        <Card.Title>Vacantes</Card.Title>
                        <Form.Control type="number" placeholder="Vacantes" onChange={handleChange} name="quota" />
                        <br></br>
                        <Card.Title>Primer fecha</Card.Title>
                        <Form.Control type="date" name="date1" onChange={handleDate1} />
                        <br></br>
                        <Card.Title>Segunda fecha</Card.Title>
                        <Form.Control type="date" name="date2" onChange={handleDate2} />
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    {currentClase.title === "" || currentClase.description === "" || superDates.length < 1
                    ?
                    <Button variant="primary" disabled onClick={submit}>Crear</Button>
                    :
                    <Button variant="primary" onClick={submit}>Crear</Button>
                    }
                    <Button variant="primary" onClick={handleClose}>Cerrar</Button>

                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default ModalClasesCrear
