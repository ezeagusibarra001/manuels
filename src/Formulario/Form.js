import React from "react"
import Layout from "../Layout";
import "./Form.css"

function Form(props) {
    const asunto = props.match.params.asunto
    return(
        <Layout>
            <div className="ContainerForm">
                <div className="ContainerFormTitulo">
                    <h1 className="FormTitulo">Haceme tu Consulta</h1>
                </div>
                <div className="ContainerFormIcono">
                    <svg xmlns="http://www.w3.org/2000/svg" width="70" height="40" fill="#a06ab4" class="bi bi-caret-down-fill" viewBox="0 0 16 16">
                        <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
                    </svg>
                </div>
                <div className="ContainerFormualario">
                    <form className="Formulario">
                        <label className="LabelForm">NOMBRE</label>
                        <input 
                        className="InputFormulario"
                        name="name" 
                        value=""
                        />
                        <label className="LabelForm">MAIL</label>
                        <input 
                        className="InputFormulario"
                        name="email" 
                        value=""
                        />
                        <label className="LabelForm">ASUNTO</label>
                        <input
                        className="InputFormulario" 
                        name="question" 
                        value={asunto}
                        />
                        <label className="LabelForm">MENSAJE/CONSULTA</label>
                        <textarea 
                        className="textareaFormulario"
                        name="question" 
                        />
                    </form>
                </div>
            </div>
        </Layout>
    )
}

export default Form;