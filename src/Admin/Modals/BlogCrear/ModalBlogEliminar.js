import React from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import clienteAxios from '../../../config/clienteAxios'
import { useHome } from '../../../context/home-context'
import "../../Admin.css"
import { useToasts } from "react-toast-notifications";
function ModalBlogEliminar(props) {
    const { addToast } = useToasts();
    const { obtenerBlogs, blog } = useHome()
    const { showEliminar, setShowEliminar } = props;
    const handleClose = () => {
        setShowEliminar(false)
    }
    const handleEliminar = async (blog) => {
        await clienteAxios
            .delete(`/publications/${blog.idPublications}`)
            .then((res) => {
                console.log(res.data);
                addToast("Blog Eiminado! :)", {
                    appearance: "success",
                    autoDismiss: true,
                });
                obtenerBlogs()
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
                    <Modal.Title id="modal-tittle">Eliminar publicacion</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <ul aria-label="Default select example">
                        {blog.map((blog) => (
                            <div>
                                <li>{blog.title}</li>
                                <Button
                                    variant="primary"
                                    onClick={() => handleEliminar(blog)}
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

export default ModalBlogEliminar;
