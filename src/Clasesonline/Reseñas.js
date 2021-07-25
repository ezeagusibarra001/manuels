import React, { useState} from "react";
import "./Reseña.css"

function Reseñas() {

    const [reseñaform , setreseñaform]=useState({name:"",coment:""})

    const handlechange=(event)=>{
        const name=event.target.name
        const value=event.target.value
        setreseñaform({...reseñaform,[name]:value})
        console.log(value,name,"Keep an eye")
        console.log(reseñaform.name,reseñaform.coment,"Keep an eye")
    }
    return(

        <div className="ContainerPadreReseña">
            <div className="ContainerSubPadreReseña1">
                <div className="ContainerReseñaTitulo">
                    <h1 className="ReseñaTitulo">RESEÑAS</h1> 
                </div>
                <div className="ContainerReseñaTexto">
                    <p className="ReseñaTexto1"> 
                        Si ya hiciste un curso conmigo o tomaste clases clases personalizadas
                    </p>
                    <p className="ReseñaTexto2">
                        podes dejar tu comentario acá para que todes se animen
                    </p>
                </div>
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
                                    <input type="text" className="InputReseña1"
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
                                    <textarea type="text" className="InputReseña2" 
                                    name="coment"
                                    type="text" 
                                    maxLength="260"
                                    value={reseñaform.coment} 
                                    onChange={handlechange}
                                    />
                                </td>
                            </tr>
                        </table>
                    </form>
                </div>
                <button className="ButtonReseñas" >ENVIAR</button>
            </div>
        </div>
    )
    
}
export default Reseñas;