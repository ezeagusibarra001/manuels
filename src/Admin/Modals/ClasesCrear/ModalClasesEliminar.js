import React from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import clienteAxios from '../../../config/clienteAxios'
import { useHome } from '../../../context/home-context'
import "../../Admin.css"
import { useToasts } from "react-toast-notifications";
function ModalClasesEliminar(props) {
    const { addToast } = useToasts();
    const { obtenerClases,clases} = useHome()
    const { showEliminar, setShowEliminar } = props;
    const handleClose = () => {
        setShowEliminar(false)
    }
    const handleEliminar=async(clase)=>{
        await clienteAxios
            .delete(`/lessons/${clase.idLesson}`)
            .then((res) => {
                console.log(res.data);
                addToast("Clase eliminada!", {
                    appearance: "success",
                    autoDismiss: true,
                });
                obtenerClases()
            })
            .catch((err) => {
                console.log("error delete", err);
            });
    };
    return (
        <div>
            <Modal
                show={showEliminar}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title id="modal-tittle">Eliminar Clase</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <ul aria-label="Default select example">
                        {// eslint-disable-next-line 
                            clases.length==0
                            ?
                            <>
                            <h5>No hay clases :)</h5>
                            </>
                            :
                            <>
                            {clases.map((clase) => (
                                <div>
                                    <li>{clase.title}</li>
                                    <Button
                                        variant="primary"
                                        onClick={() => handleEliminar(clase)}
                                    >Borrar</Button>
                                </div>
                            ))}
                            </>
                        }
                    </ul>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleClose}>Cerrar</Button>

                </Modal.Footer>
            </Modal>
        </div>
    )
}
export default ModalClasesEliminar;
