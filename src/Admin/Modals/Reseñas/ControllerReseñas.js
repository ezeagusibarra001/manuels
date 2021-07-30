import React, { useState } from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Card from 'react-bootstrap/Card'
/*import clienteAxios from '../../../config/clienteAxios'*/
import {useHome} from '../../../context/home-context'
import "../../Admin.css"
import { useToasts } from "react-toast-notifications";
import Feedback from '../../../Home/Feedback'


function Controllerreseñas(props) {

    const {feedbacks} = useHome()
/*-----------------------------------------------------------------------------*/
    const showVerReseñas= props.showVerReseñas
    const setShowVerReseñas= props.setShowVerReseñas
    const handleCloseVerReseñas = () => setShowVerReseñas(false);
/*-----------------------------------------------------------------------------*/

    

    return(

        <div>
            
        <Modal show={showVerReseñas} onHide={handleCloseVerReseñas}>
            <Modal.Header closeButton />
            {feedbacks.map((feedbacks) => (
                <Modal.Body>
                    <textarea 
                    value={feedbacks.author}
                    />
                    <textarea 
                    value={feedbacks.reseña}
                    />
                    <button>Aceptar</button>
                    <button>Eliminar</button>
                </Modal.Body>
             ))}
            <Modal.Footer>
                <Button onClick={handleCloseVerReseñas}>Close</Button>
                <Button  onClick={handleCloseVerReseñas}>Save Changes</Button>
            </Modal.Footer>
        </Modal>

        </div>
    )
    
}
export default Controllerreseñas;