import React from "react";
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import "./Modalguide.css"


function Modalguide(props) {

    const show2= props.show2
    const handleClose2= props.handleClose2

    return(

        <div>
            <Modal show={show2} onHide={handleClose2}>
                <Modal.Header closeButton>
                    <div className="ContainerHeader">
                        <img alt="img"
                            src="../assets/logo2.png"
                            className="Guideimg"
                        />
                        <h1 className="GuideTitle">Pasos para inscribirse</h1>
                    </div>
                </Modal.Header>
                <Modal.Body>
                    <div className="ContainerPasos">
                        <div className="ContainerPaso">
                            <div className="ContainerGuideImg">
                                <img alt="img"
                                    src="../assets/iconoc9.png"
                                    className="GuideIconos"
                                />
                            </div>
                            <p className="GuideTexto">
                                Completa los siguientes campos con los datos personales de la persona 
                                que se esta inscribiendo a la clase
                            </p>
                        </div>
                        <div className="ContainerPaso">
                            <div className="ContainerGuideImg">
                                <img alt="img"
                                    src="../assets/iconoc9.png"
                                    className="GuideIconos"
                                />
                            </div>
                            <p className="GuideTexto">
                                Elegí que metódo de pago se adapta mejor a vos 
                                (Transferencia Bancaria o Mercado Pago).
                            </p>
                        </div>
                        <div className="ContainerPaso">
                            <div className="ContainerGuideImg">
                                <img alt="img"
                                    src="../assets/iconoc9.png"
                                    className="GuideIconos"
                                />
                            </div>
                            <p className="GuideTexto">
                                <b> IMPORTANTE: </b>
                                No olvides adjuntar el comprobante. Preferentemente en formato PDF o imagen PNG.
                            </p>
                        </div>
                        <div className="ContainerPaso">
                            <div className="ContainerGuideImg">
                                <img alt="img"
                                    src="../assets/iconoc9.png"
                                    className="GuideIconos"
                                />
                            </div>
                            <p className="GuideTexto">
                                Una vez completados los pasos anteriores solo queda confirmar la <b>inscripción</b> ¡Exitos!
                            </p>
                        </div>
                        <div className="ContainerPaso">
                            <div className="ContainerGuideImg">
                                <img
                                    alt="img"
                                    src="../assets/iconoc9.png"
                                    className="GuideIconos"
                                />
                            </div>
                            <p className="GuideTexto">
                                En caso de tener algún tipo de complicación <b> <a target="_blank" rel="noreferrer" href="https://www.instagram.com/manuels.locucion/?hl=es-la">¡Contactame! </a> </b>
                            </p>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleClose2}>Entendido</Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
    
}
export default Modalguide;