import React from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import clienteAxios from '../../../config/clienteAxios'
import { useHome } from '../../../context/home-context'
import "../../Admin.css"
import { useToasts } from "react-toast-notifications";
function ModalReseñasEliminar(props) {
    const { addToast } = useToasts();
    const {obtenerReseñas,reviews} = useHome()
    const {showEliminarRev, setEliminarRev} = props;
    const handleClose = () => {
        setEliminarRev(false)
    }
    const handleEliminar = async (review) => {
        await clienteAxios
        .delete(`/reviews/${review.idReview}`)
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
                    <Modal.Title id="modal-tittle">Eliminar Reseña</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <ul aria-label="Default select example">
                        {
                            reviews===undefined
                            ?<h5>No hay reseñas :)</h5>
                            :
                            <>
                            {reviews.map(review=>(
                                <div>
                                    <li>{review.name}</li>
                                    <p>{review.description}</p>
                                    <Button
                                        variant="primary"
                                        onClick={() => handleEliminar(review)}
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
export default ModalReseñasEliminar;
