import React,{useRef} from "react"
import Layout from "../Layout";
import "./Form.css"

function Form(props) {
    const asunto = props.match.params.asunto //TOMO EL VALOR DE LA URL

    const Container = useRef(null) //LO SETEAMOS EN NULL EN EL COMIENZO
    const Titulo = useRef(null)    //LO SETEAMOS EN NULL EN EL COMIENZO
    const BtnUp = useRef(null)       //LO SETEAMOS EN NULL EN EL COMIENZO
    const BtnDown = useRef(null)       //LO SETEAMOS EN NULL EN EL COMIENZO

    const clickUp =() =>{
        Container.current.className = "ContainerInactive"
        Titulo.current.className    = "TituloInactive" 
        BtnUp.current.className     = "InactiveUp" 
        BtnDown.current.className   = "ActiveDown" 
    }
    const clickDown =() =>{
        Container.current.className = "ContainerActive"
        Titulo.current.className    = "TituloActive"
        BtnUp.current.className     = "ActiveUp" 
        BtnDown.current.className   = "InactiveDown" 
    }
    return(
        <Layout>
            <div className="ContainerFormulario">
                <div className="ContainerActive" ref={Container}>
                    <h1 className="TituloActive" ref={Titulo}>Haceme tu Consulta</h1>
                </div>
                <div className="ActiveUp" ref={BtnUp}>
                    <div className="FormularioIcono" onClick={clickUp}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="70" height="40" fill="#a06ab4" className="IconoForm" viewBox="0 0 16 16">
                            <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
                        </svg>
                    </div>
                </div>
                <div className="InactiveDown" ref={BtnDown}>
                    <div className="FormularioIcono" onClick={clickDown}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="70" height="40" fill="#a06ab4" className="IconoForm" viewBox="0 0 16 16">
                            <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
                        </svg>
                    </div>
                </div>
                <div className="ContainerFormularioConsulta">
                    <form className="FormularioConsulta">
                        <label className="LabelFormulario">NOMBRE</label>
                        <input 
                        className="InputFormulario"
                        name="name" 
                        value=""
                        />
                        <label className="LabelFormulario">MAIL</label>
                        <input 
                        className="InputFormulario"
                        name="email" 
                        value=""
                        />
                        <label className="LabelFormulario">ASUNTO</label>
                        <input
                        className="InputFormulario" 
                        name="question" 
                        value={asunto}
                        />
                        <label className="LabelFormulario">MENSAJE/CONSULTA</label>
                        <textarea 
                        className="textareaFormulario"
                        name="question" 
                        />
                        <button className="ButtonFormularioConsulta">Enviar</button>
                    </form>
                </div>
            </div>
        </Layout>
    )
}

export default Form;