import React from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

import "../../Admin.css"
function ModalVoucher(props) {
    const { showVoucher, setShowVoucher, currentVoucher } = props;
    const handleClose = () => {
        setShowVoucher(false)
    }

    return (
        <div>

            <Modal
                show={showVoucher}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title id="modal-tittle">Eliminar Clase</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                {currentVoucher === undefined
                ?<div></div>
                : <img alt="img" className="voucher" src={`data:${currentVoucher.type};base64,${currentVoucher.bytes}`} />}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleClose}>Cerrar</Button>

                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default ModalVoucher;
