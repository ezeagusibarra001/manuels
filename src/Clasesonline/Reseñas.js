import React, { useState } from "react";
import "./Reseña.css"
import clienteAxios from '../config/clienteAxios'
import { useHome } from '../context/home-context'
import { useToasts } from "react-toast-notifications";
function Reseñas() {
    const [reseñaform, setreseñaform] = useState({ name: "", description: "", state: 0 })
    const { addToast } = useToasts();
    const { obtenerReseñas } = useHome()
    const handlechange = (event) => {
        const name = event.target.name
        const value = event.target.value
        setreseñaform({ ...reseñaform, [name]: value })
        console.log(reseñaform.name, reseñaform.description, "Keep an eye")
    }
    var postData = {
        "name": reseñaform.name,
        "description": reseñaform.description,
        "state": 0,
    }
    const submit = async () => {
        await clienteAxios
            .post("/reviews", postData)
            .then((res) => {
                console.log(res.data);
                obtenerReseñas();
                addToast("¡Gracias! Tu opinion nos importa.", {
                    appearance: "success",
                    autoDismiss: true,
                });
                setreseñaform({name:"",description:""}) //PARA LIMPIAR EL FORMULARIO
            })
            .catch((err) => {
                console.log("error post", err);
                console.log(postData)
                addToast("Ocurrio un error :(", {
                    appearance: "danger",
                    autoDismiss: true,
                });
                setreseñaform({name:"",description:""}) //PARA LIMPIAR EL FORMULARIO
            });
    };
    return (
        <div className="ContainerPadreReseña">
            <div className="ContainerSubPadreReseña1">
                <h1 className="ReseñaTitulo">RESEÑAS</h1>
                <p className="ReseñaTexto">
                    Si ya hiciste un curso conmigo 
                    podes dejar tu comentario acá para que todes se animen
                </p>
            </div>
            <div className="ContainerSubPadreReseña2">
                <div className="ContainerReseñaForm">
                    <form className="ReseñaForm">
                        <table className="ReseñaForm">
                            <tr>
                                <td>
                                    <label className="Label">Tu nombre</label>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <input className="InputReseña1"
                                        name="name"
                                        type="text"
                                        value={reseñaform.name}
                                        onChange={handlechange}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label className="Label">Dejame tu comentario</label>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <textarea
                                        className="InputReseña2"
                                        name="description"
                                        type="text"
                                        maxLength="260"
                                        value={reseñaform.description}
                                        onChange={handlechange}
                                    />
                                </td>
                            </tr>
                        </table>
                    </form>
                </div>
                <button className="ButtonReseñas" onClick={submit}>ENVIAR</button>
            </div>
        </div>
    )
}
export default Reseñas;