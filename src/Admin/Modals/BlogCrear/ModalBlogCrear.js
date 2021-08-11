import React, { useState } from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Card from 'react-bootstrap/Card'
import clienteAxios from '../../../config/clienteAxios'
import { useHome } from '../../../context/home-context'
import "../../Admin.css"
import { useToasts } from "react-toast-notifications";
function ModalBlogCrear(props) {
    const { addToast } = useToasts();
    const { blog, obtenerBlogs, axiosConfig } = useHome()
    const { showCrear, setShowCrear } = props;
    const [Styles, setStyles] = useState()
    const [currentBlog, setCurrentBlog] = useState({
        "title": "",
        "description": "",
        "description1": "",
        "description2": "",
        "description3": "",
        "subtitle": "",
        "subtitle2": "",
        "image": {
            "idImage": ""
        }
    })
    const handleClose = () => {
        setShowCrear(false)
    }
    const handleChange = (e) => {
        setCurrentBlog({ ...currentBlog, [e.target.name]: e.target.value, })
        const max = e.target.maxLength
        if (0 < (e.target.value).length && (e.target.value).length < e.target.maxLength) {
            setStyles({ outlineColor: "green" })
        }
        else {
            setStyles({ outlineColor: "red" })
        }
        console.log(currentBlog)
    }
    var postData = {

        "title": "ANGULAR JS",
        "description": "El elemento es posicionado de acuerdo al flujo normal del documento, y luego es desplazado con relación a su ancestro que se desplace más cercano y su bloque contenedor (ancestro en nivel de bloque más cercano) incluyendo elementos relacionados a tablas, basados en los valores de top, right, bottom, y left. El desplazamiento no afecta la posición de ningún otro elmento.",
        "description1": "El elemento es posicionado de acuerdo al flujo normal del documento, y luego es desplazado con relación a su ancestro que se desplace más cercano y su bloque contenedor (ancestro en nivel de bloque más cercano) incluyendo elementos relacionados a tablas, basados en los valores de top, right, bottom, y left. El desplazamiento no afecta la posición de ningún otro elmento.",
        "description2": "",
        "description3": "",
        "subtitle": "Exploramiento y uso de la voz como metodologia psicoterapeutica",
        "subtitle2": "Exploramiento y uso de la voz como metodologia psicoterapeutica",
        "image": {
            "idImage": 9
        }
    }
    const submit = async () => {
        await clienteAxios
            .post("/publications", postData, axiosConfig)
            .then((res) => {
                console.log(res.data);
                obtenerBlogs();
                handleClose()
                addToast("Blog creado", {
                    appearance: "success",
                    autoDismiss: true,
                });
            })
            .catch((err) => {
                console.log("error post", err);
                console.log(axiosConfig)
                console.log(postData)
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

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={submit}>Crear</Button>
                    <Button variant="primary" onClick={handleClose}>Cerrar</Button>

                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default ModalBlogCrear
