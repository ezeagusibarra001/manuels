import React from "react";
import Modal from 'react-bootstrap/Modal'
import "./Modalguide.css"
import Loading from '../Loading/Loading'

function ModalLoading(props) {
    const { modalLoading } = props;

    return (

        <div>
            
            <Modal show={modalLoading}>
                <Modal.Body>
                    <div className="ContainerDiv">
                        <Loading />
                    </div>
                </Modal.Body>
            </Modal>
        </div>
    )

}
export default ModalLoading;