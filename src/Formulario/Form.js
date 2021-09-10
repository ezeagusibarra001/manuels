import React,{useState , useRef} from "react"
import Layout from "../Layout";
import "./Form.css"
function Form(props) {
    const asunto = props.match.params.asunto //TOMO EL VALOR DE LA URL
const [form , setForm] = useState({
    name:"",
    email:"",
    asunto:asunto,
    consulta:"",
})
const handleConsulta=(e)=>{
    setForm({ ...form, [e.target.name]: e.target.value, })
    console.log(form.name)
    console.log(form.email)
    console.log(form.asunto)
    console.log(form.consulta)
}
/*----------------------------------------------------------------------------------------------------------*/
    return(
        <Layout>
            <div className="ContainerFormulario">
                <dv className="ContainerActive">
                    <h1 className="TituloActive">Haceme tu Consulta</h1>
                </dv>
                <div className="ActiveUp">
                    <div className="FormularioIcono">
                        <svg xmlns="http://www.w3.org/2000/svg" width="70" height="40" fill="#a06ab4" className="IconoForm" viewBox="0 0 16 16">
                            <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
                        </svg>
                    </div>
                </div>
                <div className="ContainerFormularioConsulta">
                    <form className="FormularioConsulta">
                        <label className="LabelFormulario">NOMBRE</label>
                        <input 
                        onChange={handleConsulta}
                        className="InputFormulario"
                        name="name" 
                        value={form.name}
                        />
                        <label className="LabelFormulario">MAIL</label>
                        <input 
                        onChange={handleConsulta}
                        className="InputFormulario"
                        name="email" 
                        value={form.email}
                        />
                        <label className="LabelFormulario">ASUNTO</label>
                        <input
                        className="InputFormulario" 
                        name="question" 
                        value={form.asunto}
                        />
                        <label className="LabelFormulario">MENSAJE/CONSULTA</label>
                        <textarea 
                        onChange={handleConsulta}
                        className="textareaFormulario"
                        name="consulta" 
                        />
                        <button className="ButtonFormularioConsulta">Enviar</button>
                    </form>
                </div>
            </div>
        </Layout>
    )
}
export default Form;