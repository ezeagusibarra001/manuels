import React, { useState, useEffect} from "react";
import Layout from "../Layout";
import "./Login.css"
import {useHistory} from "react-router-dom"
import {useHome} from "../context/home-context";



function Login(props) {
    const history = useHistory()
    /* TRAIGO DEL CONTEXT EL ESTADO DEL LOGIN ( HOOK VARIABLE ) */
    const {login, setLogin}=useHome()

    const [Loginform , setLoginForm]=useState({usuario:"",password:""})
    
    const handlechange=(event)=>{
        const name=event.target.name
        const value=event.target.value
        console.log(name, value)
        setLoginForm({...Loginform,[name]:value})

        const usuariolenght=Loginform.usuario.length
        const passwordlenght=Loginform.password.length
        console.log("Caracteres usuario:",usuariolenght)
        console.log("Caracteres password:",passwordlenght)

        if(usuariolenght>=10 || passwordlenght>=10){
            setWarning("min 6 - max 10 caracteres") 
        }
        else{
            setWarning("")  
        }
    }

    const [Warning ,setWarning]=useState("")
   
    const handlesubmit=()=>{
        setLogin(true)
        history.push("/AdminClases")
    }
    return(
        <Layout>
            <div className="ContainerPadreLogin">
                <div className="ContainerForm">
                    <form className="FormLogin" onSubmit={handlesubmit}>
                        <input 
                        className="LoginInput1" 
                        type="text" placeholder="Usuario"
                        name="usuario"
                        value={Loginform.usuario} 
                        onChange={handlechange}
                        />
                        <input 
                        className="LoginInput2" 
                        type="password"
                        name="password"
                        placeholder="Password" 
                        value={Loginform.password}
                        onChange={handlechange}
                        />
                        <div className="Warning">
                            <h6 className="Warning">{Warning}</h6>
                        </div>
                        <div className="ContainerLoginButton">
                            <button className="LoginButton" type="submit">Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </Layout>
    )
    
}
export default Login;