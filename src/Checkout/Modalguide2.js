import React from "react"
import "./Modalguide.css"
function Modalguide2(props) {
    const showmodal = props.showmodal
    const setShowmodal = props.setShowmodal
    const CloseModal =()=>{
        setShowmodal(false)
    }
    return (
        <>
            {
                showmodal &&
                <div className="ModalguideContainer2">
                    <div className="CardContainer">
                        <div className="HeaderModal">
                            <img alt="img" className="ImgmodalGuide" src="../assets/logo2.png" />
                            <button className="ButtonCloseModal" onClick={CloseModal}>
                                <h4 className="CloseButton">X</h4>
                            </button>
                        </div>
                        <div className="BodyModal">
                            <div className="ContainerPaso">
                                <img alt="img"
                                    src="../assets/iconoc9.png"
                                    className="GuideIconos"
                                />
                                <p className="GuideTexto">
                                    Completa los siguientes campos con los datos personales de la persona
                                    que se esta inscribiendo a la clase
                                </p>
                            </div>
                            <div className="ContainerPaso">
                                <img alt="img"
                                    src="../assets/iconoc9.png"
                                    className="GuideIconos"
                                />
                                <p className="GuideTexto">
                                    Elegí que metódo de pago se adapta mejor a vos
                                    (Transferencia Bancaria o Mercado Pago).
                                </p>
                            </div>
                            <div className="ContainerPaso">
                                <img alt="img"
                                    src="../assets/iconoc9.png"
                                    className="GuideIconos"
                                />
                                <p className="GuideTexto">
                                    <b> IMPORTANTE: </b>
                                    No olvides adjuntar el comprobante. Preferentemente en formato PDF o imagen PNG.
                                </p>
                            </div>
                            <div className="ContainerPaso">
                                <img alt="img"
                                    src="../assets/iconoc9.png"
                                    className="GuideIconos"
                                />
                                <p className="GuideTexto">
                                    Una vez completados los pasos anteriores solo queda confirmar la <b>inscripción</b> ¡Exitos!
                                </p>
                            </div>
                            <div className="ContainerPaso">
                                <img
                                    alt="img"
                                    src="../assets/iconoc9.png"
                                    className="GuideIconos"
                                />
                                <p className="GuideTexto">
                                    En caso de tener algún tipo de complicación <b> <a target="_blank" rel="noreferrer" href="https://www.instagram.com/manuels.locucion/?hl=es-la">¡Contactame! </a> </b>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}
export default Modalguide2;