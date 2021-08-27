import React from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import clienteAxios from '../../../config/clienteAxios'
import { useHome } from '../../../context/home-context'
import "../../Admin.css"
import { useToasts } from "react-toast-notifications";
function CodeEliminar(props) {
    const { addToast } = useToasts();
    const { obtenerCode, code, axiosConfig } = useHome()
    const { showEliminarRev, setEliminarRev} = props;
    const handleClose = () => {
        setEliminarRev(false)
    }
    const handleEliminar = async (id) => {
        await clienteAxios
            .delete(`/discount/${id}`,axiosConfig)
            .then((res) => {
                console.log(res.data);
                addToast("Reseña eliminada!", {
                    appearance: "success",
                    autoDismiss: true,
                });
                obtenerCode()
            })
            .catch((err) => {
                console.log("error delete", err);
                console.log(code)
            });
    };
    return (
        <div>

            <Modal
                show={showEliminarRev}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title id="modal-tittle">Eliminar Code</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <ul aria-label="Default select example">
                        {code.map((code) => (
                            <div>
                                <li>{code.code}</li>
                                <Button
                                    variant="primary"
                                    onClick={() => handleEliminar(code.idDiscounts)}
                                >Borrar</Button>
                            </div>
                        ))}
                    </ul>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleClose}>Cerrar</Button>

                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default CodeEliminar;
