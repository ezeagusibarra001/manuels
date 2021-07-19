import React, {useState} from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Card from 'react-bootstrap/Card'
import "../Admin.css"
function ModalClasesCrear(props) {
    const { showCrear, setShowCrear } = props;
    const [currentClase, setCurrentClase] = useState([{
        title: '',
        description: '',
        forWho: '',
        duration: '',
        teacher: '',
        requeriments: '',
        dates: [{
            date: ''
        }],
        quota: ''
    }])
    const handleClose = () => {
        setShowCrear(false)
    }
    const handleChange = (e) => {
        setCurrentClase({
            ...currentClase,
            [e.target.name] : e.target.value
        })
    }
    const submit = () => {
        alert(currentClase.date)
    }
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
                        <Form.Control type="text" placeholder="Titulo" onChange={handleChange} name="title"/>
                        <br></br>
                        <Form.Control
                            name="description"
                            as="textarea"
                            placeholder="Descripcion de la clase"
                            style={{ height: '100px' }}
                            onChange={handleChange}
                        />
                        <br></br>
                        <Form.Control
                        name="forWho"
                            as="textarea"
                            placeholder="¿Quienes pueden hacerlo?"
                            style={{ height: '75px' }}
                            onChange={handleChange}
                        />
                        <br></br>
                        <Card.Title>Especificaciones</Card.Title>
                        <Form.Control
                        name="duration"
                            as="textarea"
                            placeholder="4 encuentros de 90min. 1 clase semanal. Duración total: 1 mes"
                            style={{ height: '75px' }}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="col-6">
                        <Form.Control
                        name="teacher"
                            as="textarea"
                            placeholder="Dictado por:"
                            style={{ height: '60px' }}
                            onChange={handleChange}
                        />
                        <br></br>
                        <Form.Control
                        name="requeriments"
                            as="textarea"
                            placeholder="Requisitos:"
                            style={{ height: '60px' }}
                            onChange={handleChange}
                        />
                        <br></br>
                        <Card.Title>Vacantes</Card.Title>
                        <Form.Control type="number" placeholder="Vacantes" onChange={handleChange} name="quota"/>
                        <br></br>
                        <Card.Title>Primer fecha</Card.Title>
                        <Form.Control type="date" onChange={handleChange} name="date" />
                        <br></br>
                        <Card.Title>Segunda fecha</Card.Title>
                        <Form.Control type="date" onChange={handleChange} name="description" />
                        
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={submit}>Crear</Button>
                    <Button variant="primary" onClick={handleClose}>Cerrar</Button>

                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default ModalClasesCrear
