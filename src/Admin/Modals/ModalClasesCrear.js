import React, { useState } from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Card from 'react-bootstrap/Card'
import clienteAxios from '../../config/clienteAxios'
import {useHome} from '../../context/home-context'
import "../Admin.css"
import { useToasts } from "react-toast-notifications";
function ModalClasesCrear(props) {
    const { addToast } = useToasts();
    const {obtenerClases} = useHome()
    const { showCrear, setShowCrear } = props;
    const [date1, setDate1] = useState({date:""})
    const [date2, setDate2] = useState({date:""})
    const [currentClase, setCurrentClase] = useState([])
    const handleClose = () => {
        setShowCrear(false)
    }
    const handleChange = (e) => {
        setCurrentClase({
            ...currentClase,
            [e.target.name]: e.target.value
        })
        console.log(currentClase)
    }
    var selectDate1 = document.querySelector("div:nth-child(2) > input:nth-child(9)")
    var selectDate2 = document.querySelector("div:nth-child(2) > input:nth-child(13)")
    const handleDate1 = (e) => {
        setDate1({ date: e.target.value })
    }
    const submitDate1 = () => {
        selectDate1.disabled = true;
    }
    const handleDate2 = (e) => {
        setDate2({ date: e.target.value })
    }
    const submitDate2 = () => {
        selectDate2.disabled = true;
    }
    const submit = async () => {
        await clienteAxios
            .post("/lessons", {
                title: currentClase.title,
                description: currentClase.description,
                forWho: currentClase.forWho,
                duration: currentClase.duration,
                teacher: currentClase.teacher,
                requeriments: currentClase.requeriments,
                dates: [{
                    date: date1.date
                }, {
                    date: date2.date || ""
                }],
                quota: currentClase.quota
            })
            .then((res) => {
                console.log(res.data);
                obtenerClases();
                addToast("Clase creada", {
                    appearance: "success",
                    autoDismiss: true,
                });
            })
            .catch((err) => {
                console.log("error post", err);
            });
    };
    const [Styles , setStyles]=useState({})
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
                        <Form.Control 
                        type="text" 
                        placeholder="Titulo" 
                        maxLength="22"
                        onChange={handleChange} 
                        name="title" 
                        style={Styles}
                        />
                        <br></br>
                        <Form.Control
                            name="description"
                            as="textarea"
                            placeholder="Descripcion de la clase"
                            maxLength="210"
                            style={{ height: '100px' }}
                            onChange={handleChange}
                        />
                        <br></br>
                        <Form.Control
                            name="forWho"
                            as="textarea"
                            placeholder="¿Quienes pueden hacerlo?"
                            maxLength="150"
                            style={{ height: '75px' }}
                            onChange={handleChange}
                        />
                        <br></br>
                        <Card.Title>Especificaciones</Card.Title>
                        <Form.Control
                            name="duration"
                            as="textarea"
                            placeholder="4 encuentros de 90min. 1 clase semanal. Duración total: 1 mes"
                            maxLength="65"
                            style={{ height: '75px' }}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="col-6">
                        <Form.Control
                            name="teacher"
                            as="textarea"
                            placeholder="Dictado por:"
                            maxLength="65"
                            style={{ height: '60px' }}
                            onChange={handleChange}
                        />
                        <br></br>
                        <Form.Control
                            name="requeriments"
                            as="textarea"
                            placeholder="Requisitos:"
                            maxLength="65"
                            style={{ height: '60px' }}
                            onChange={handleChange}
                        />
                        <br></br>
                        <Card.Title>Vacantes</Card.Title>
                        <Form.Control type="number" placeholder="Vacantes" onChange={handleChange} name="quota" />
                        <br></br>
                        <Card.Title>Primer fecha</Card.Title>
                        <Form.Control type="date" name="date1" onChange={handleDate1} />
                        <Button variant="primary" onClick={submitDate1}>Elegir</Button>
                        <br></br>
                        <Card.Title>Segunda fecha</Card.Title>
                        <Form.Control type="date" name="date2" onChange={handleDate2} />
                        <Button variant="primary" onClick={submitDate2}>Elegir</Button>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={(e)=>submit(e)}>Crear</Button>
                    <Button variant="primary" onClick={handleClose}>Cerrar</Button>

                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default ModalClasesCrear
