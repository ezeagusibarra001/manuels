import React,{useState,useEffect} from "react";
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'


function CheckOutModal(props) {
    const name="NOMBRE DEL CURSO"
    const show= props.show
    const handleClose= props.handleClose
    const handleSubmit= props.handleSubmit

    return(

        <div>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>¿Estas seguro?</Modal.Title>
                </Modal.Header>
                <Modal.Body>Ustéd esta confirmando su Inscripción al curso {name}</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}> Cancelar</Button>
                    <Button variant="primary" onClick={handleSubmit}>Confirmar</Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
    
}
export default CheckOutModal;