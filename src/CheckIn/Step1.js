import React from "react"
import "./CheckIn.css"
function Step1(props){
    const setCheckForm = props.setCheckForm
    const CheckForm = props.CheckForm
    const handlecheckin =(e)=>{
        setCheckForm({ ...CheckForm,[e.target.name]:e.target.value });
        console.log(e.target.name,":",e.target.value)
    }
    return(
        <div className="ContainerStep1">
            <h2 className="Step1Title">Paso 1°: Complete los datos</h2>
            <div className="CheckInForm">
                <input 
                    className="CheckInInput" 
                    placeholder="Nombre" 
                    name="name"
                    value={CheckForm.name}
                    onChange={handlecheckin}
                />
                <input 
                    className="CheckInInput" 
                    placeholder="Apellido"
                    name="lastname"
                    value={CheckForm.lastname}
                    onChange={handlecheckin}
                />
                <input 
                    className="CheckInInput" 
                    placeholder="Telefono"
                    name="phone"
                    value={CheckForm.phone}
                    onChange={handlecheckin}
                />
                <input 
                    className="CheckInInput" 
                    placeholder="E-mail"
                    name="mail"
                    value={CheckForm.mail}
                    onChange={handlecheckin}
                />
            </div>
        </div>
    )
}
export default Step1;