import React from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
function ReturnCrear(props) {
    const {showCrear, handleClose, handleChange, Styles, handleFile, submit} = props;
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
                        <textarea
                            type="text"
                            placeholder="Titulo"
                            maxLength="22"
                            onChange={handleChange}
                            name="title"
                            style={Styles}
                            className="CCinputTitle"
                        />
                        <br></br>
                        <textarea
                            type="text"
                            placeholder="Subtitulo 1"
                            maxLength="22"
                            onChange={handleChange}
                            name="subtitle"
                            style={Styles}
                            className="CCinputTitle"
                        />
                        <br></br>
                        <textarea
                            name="description"
                            as="textarea"
                            placeholder="Descripcion para subtitulo 1"
                            maxLength="200"
                            style={Styles}
                            onChange={handleChange}
                            className="CCinputDescription"
                        />
                        <br></br>
                        <textarea
                            name="description1"
                            as="textarea"
                            placeholder="Descripcion para subtitulo 1"
                            maxLength="200"
                            style={Styles}
                            onChange={handleChange}
                            className="CCinputDescription"
                        />
                        <br></br>
                    </div>
                    <div className="col-6">
                        <Form.Label>Imagen</Form.Label>
                        <Form.Control type="file"
                            name="file"
                            onChange={(e) => handleFile(e)}
                        />
                        <br></br>
                        <textarea
                            type="text"
                            placeholder="Subtitulo 2"
                            maxLength="22"
                            onChange={handleChange}
                            name="subtitle2"
                            style={Styles}
                            className="CCinputTitle"
                        />
                        <br></br>
                        <textarea
                            name="description2"
                            as="textarea"
                            placeholder="Descripcion para subtitulo 2"
                            maxLength="200"
                            style={Styles}
                            onChange={handleChange}
                            className="CCinputDescription"
                        />
                        <br></br>
                        <textarea
                            name="description3"
                            as="textarea"
                            placeholder="Descripcion para subtitulo 2"
                            maxLength="200"
                            style={Styles}
                            onChange={handleChange}
                            className="CCinputDescription"
                        />
                        <br></br>
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

export default ReturnCrear
