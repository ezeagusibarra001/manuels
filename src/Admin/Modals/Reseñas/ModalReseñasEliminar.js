import React from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import clienteAxios from '../../../config/clienteAxios'
import { useHome } from '../../../context/home-context'
import "../../Admin.css"
import { useToasts } from "react-toast-notifications";
function ModalReseñasEliminar(props) {
    const { addToast } = useToasts();
    const { obtenerReseñas, reviews, axiosConfig } = useHome()
    const { showEliminarRev, setEliminarRev} = props;
    const handleClose = () => {
        setEliminarRev(false)
    }
    const handleEliminar = async (id) => {
        await clienteAxios
            .delete(`/reviews/${id}`,axiosConfig)
            .then((res) => {
                console.log(res.data);
                addToast("Reseña eliminada!", {
                    appearance: "success",
                    autoDismiss: true,
                });
                obtenerReseñas()
            })
            .catch((err) => {
                console.log("error delete", err);
                console.log(reviews)
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
                    <Modal.Title id="modal-tittle">Eliminar Clase</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <ul aria-label="Default select example">
                        {reviews.map((reviews) => (
                            <div>
                                <li>{reviews.name}</li>
                                <p>{reviews.commentary}</p>
                                <Button
                                    variant="primary"
                                    onClick={() => handleEliminar(reviews.idReview)}
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

export default ModalReseñasEliminar;
