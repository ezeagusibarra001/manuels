import React,{useRef} from "react"
import "./ModalBlog.css"
function ModalBlog(props) {
const publicacion = props.publicacion
const setModalBlog = props.setModalBlog
const ModalContainerImg = useRef(null)
const ModalContainer = useRef(null)
const CloseModal =()=>{
    ModalContainer.current.style.transition="400ms ease-out all"
    ModalContainer.current.style.opacity="0%"
    ModalContainerImg.current.style.transition="400ms ease-out all"
    ModalContainerImg.current.style.transform="translateY(-400px)"
    ModalContainerImg.current.style.opacity="0%"
    /*CUANDO TERMINA LA TRANSICION SE SETEA EN FALSE EL HOOK MODAL */
    ModalContainerImg.current.addEventListener("transitionend",()=>{setModalBlog(false)})
}
    return(
        <div className="ModalContainerBlog" ref={ModalContainer}>
            <div className="ModalContainerImg" ref={ModalContainerImg}>
                <img
                    className="ImgBlgoModal"
                    alt="Img"
                    src={publicacion}
                />
                <span className="CloseButtonBlog" onClick={CloseModal}>X</span>
            </div>
        </div>
    )
}
export default ModalBlog;