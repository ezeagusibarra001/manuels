import React,{useRef,useState,useEffect} from "react"
import "./Modalguide.css"
function Modalguide2(props) {
    const [showmodal2,setShowmodal2]=useState(false)
    useEffect(() => {setShowmodal2(true)},[]);
    const Card = useRef(null)
    const CloseModal =()=>{
        /*LE ASIGNAMOS UN MOVIMIENTO VERTICAL EN Y */
        Card.current.style.transition = "500ms ease-out all"
        Card.current.style.transform = "translateY(-100px)"
        /*LE INDICAMOS QUE LLEVE LA VISIBILIDAD DEL MODAL A CERO*/
        Card.current.style.opacity = "0%"
        /*UNA VEZ QUE FINALIZO LA TRASITION SE SETEA EL HOOK PARA QUE SE DEJE DE RENDERIZAR*/
        Card.current.addEventListener("transitionend",()=>{setShowmodal2(false)})
    }
    return (
        <>
            {
                showmodal2 &&
                <div className="ModalguideContainer2">
                    <div className="CardContainer" ref={Card}>
                        <div className="HeaderModal">
                            <img alt="img" className="ImgmodalGuide" src="../assets/logo2.png" />
                            <button className="ButtonCloseModal" onClick={CloseModal}>
                                <h4 className="CloseButton">X</h4>
                            </button>
                        </div>
                        <div className="BodyModal">
                            <div className="ContainerPaso">
                                <img alt="img"
                                    src="../assets/iconoc9.webp"
                                    className="GuideIconos"
                                />
                                <p className="GuideTexto">
                                    Completa los siguientes campos con los datos personales de la persona
                                    que se esta inscribiendo a la clase
                                </p>
                            </div>
                            <div className="ContainerPaso">
                                <img alt="img"
                                    src="../assets/iconoc9.webp"
                                    className="GuideIconos"
                                />
                                <p className="GuideTexto">
                                    Eleg?? que met??do de pago se adapta mejor a vos
                                    (Transferencia Bancaria, Mercado Pago o Paypal).
                                </p>
                            </div>
                            <div className="ContainerPaso">
                                <img alt="img"
                                    src="../assets/iconoc9.webp"
                                    className="GuideIconos"
                                />
                                <p className="GuideTexto">
                                    <b> IMPORTANTE: </b>
                                    No olvides adjuntar el comprobante. Preferentemente en formato PDF o imagen PNG.
                                </p>
                            </div>
                            <div className="ContainerPaso">
                                <img alt="img"
                                    src="../assets/iconoc9.webp"
                                    className="GuideIconos"
                                />
                                <p className="GuideTexto">
                                    Una vez completados los pasos anteriores solo queda confirmar la <b>inscripci??n</b> ??Exitos!
                                </p>
                            </div>
                            <div className="ContainerPaso">
                                <img
                                    alt="img"
                                    src="../assets/iconoc9.webp"
                                    className="GuideIconos"
                                />
                                <p className="GuideTexto">
                                    En caso de tener alg??n tipo de complicaci??n <b> <a target="_blank" rel="noreferrer" href="https://www.instagram.com/manuels.locucion/?hl=es-la">??Contactame! </a> </b>
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