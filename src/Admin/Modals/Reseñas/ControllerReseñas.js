import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import clienteAxios from "../../../config/clienteAxios";
import { useHome } from "../../../context/home-context";
import "../../Admin.css";
import { useToasts } from "react-toast-notifications";
import { Card } from "react-bootstrap";

function Controllerreseñas(props) {
  const { addToast } = useToasts();
  const { reviews, axiosConfig, obtenerReseñas } = useHome();
  const handleEliminar = async (review) => {
    await clienteAxios
      .delete(`/reviews/${review.idReview}`)
      .then((res) => {
        addToast("Reseña eliminada!", {
            appearance: "success",
            autoDismiss: true,
          });
        obtenerReseñas();
      })
      .catch((err) => {
        console.log("error delete", err);
      });
  };
  const handleModificar = async (review) => {
    await clienteAxios
      .put(`/reviews/accept/${review.idReview}`)
      .then((res) => {
        console.log("Reseña Actualizada", res.data);
        addToast("Reseña Live! :)", {
          appearance: "success",
          autoDismiss: true,
        });
        obtenerReseñas();
      })
      .catch((err) => {
        console.log("error put", err);
        console.log(review.idReview);
        console.log(axiosConfig);
      });
  };
  /*-----------------------------------------------------------------------------*/
  const showVerReseñas = props.showVerReseñas;
  const setShowVerReseñas = props.setShowVerReseñas;
  const handleCloseVerReseñas = () => setShowVerReseñas(false);
  /*-----------------------------------------------------------------------------*/
  return (
    <div>
      <Modal show={showVerReseñas} onHide={handleCloseVerReseñas}>
        <Modal.Header closeButton />
        {reviews
          .filter((reviews) => reviews.state === 0)
          .map((review) => (
            <Modal.Body>
              <Card>
                <label>{review.name}</label>
                <label>{review.description}</label>
                <Button
                  className="col-6"
                  variant="primary"
                  onClick={() => handleEliminar(review)}
                >
                  Borrar
                </Button>
                <br></br>
                <Button
                  className="col-6"
                  variant="outline-primary"
                  onClick={() => handleModificar(review)}
                >
                  Aceptar
                </Button>
              </Card>
            </Modal.Body>
          ))}
        <Modal.Footer>
          <Button variant="outline-primary" onClick={handleCloseVerReseñas}>
            Close
          </Button>
          <Button onClick={handleCloseVerReseñas}>Save Changes</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
export default Controllerreseñas;
