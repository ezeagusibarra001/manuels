import React, { useState } from "react";
import Layout from "../Layout";
import "./Login.css"
import { useHistory } from "react-router-dom"
import { useHome } from "../context/home-context";
import { useToasts } from "react-toast-notifications";
import clienteAxios from '../config/clienteAxios'
function Login(props) {
    const { addToast } = useToasts();
    const history = useHistory()
    /* TRAIGO DEL CONTEXT EL ESTADO DEL LOGIN ( HOOK VARIABLE ) */
    const {setJwt} = useHome()
    const [currentLogin, setCurrentLogin]=useState({user:"",pass:""})
    const [showPassword,setShowPassword]=useState(true)
    const handlePassword=()=>{
        let inputPassword=document.querySelector(".LoginInput2") //BY CLASS
        //let EyeOpen=document.querySelector("#EyeOpen") BY ID
        if(inputPassword.type==="password"){
            inputPassword.type="text"
            setShowPassword(false)
        }else{
            inputPassword.type="password"
            setShowPassword(true)
        }
    }
    const handlechange = (e) => {
        setCurrentLogin({ ...currentLogin,[e.target.name]: e.target.value,})
        console.log("login", currentLogin)
    }
    const onPress = (e) =>{if(e.key === "Enter"){handlesubmit()}}
    const handlesubmit = async () => {
        console.log(currentLogin)
        await clienteAxios
            .post("/login", {
                user: currentLogin.user,
                pass: currentLogin.pass
            })
            .then((res) => {
                console.log(res.data.jwt);
                let token = res.data.jwt
                setJwt(res.data.jwt)
                sessionStorage.setItem('jwtToken', token)
                console.log(sessionStorage.getItem('jwtToken'))
                addToast("Usuario logueado", {
                    appearance: "success",
                    autoDismiss: true,
                });
                localStorage.setItem("login",true)
                history.push("/AdminClases")
            })
            .catch((err) => {
                console.log("error post", err);
                console.log(currentLogin)
                addToast("Acceso denegado", {
                    appearance: "error",
                    autoDismiss: true,
                });
            });
    };
    return (
        <Layout>
            <div className="ContainerPadreLogin">
                <div className="ContainerForm">
                    <div className="FormLogin">
                        <input
                            className="LoginInput1"
                            type="text" placeholder="Usuario"
                            name="user"
                            onChange={handlechange}
                            onKeyPress={(e)=>onPress(e)}
                        />
                        <input
                            className="LoginInput2"
                            type="password"
                            name="pass"
                            placeholder="Password"
                            onChange={handlechange}
                            onKeyPress={(e)=>onPress(e)}
                        />
                        {
                            showPassword
                            ?
                            <svg xmlns="http://www.w3.org/2000/svg" onClick={handlePassword} fill="#a06ab4" id="EyeClose" class="bi bi-eye-slash" viewBox="0 0 16 16">
                                <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7.028 7.028 0 0 0-2.79.588l.77.771A5.944 5.944 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755-.165.165-.337.328-.517.486l.708.709z"/>
                                <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829l.822.822zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829z"/>
                                <path d="M3.35 5.47c-.18.16-.353.322-.518.487A13.134 13.134 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7.029 7.029 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12-.708.708z"/>
                            </svg>
                            :
                            <svg xmlns="http://www.w3.org/2000/svg" onClick={handlePassword} fill="#a06ab4" id="EyeOpen" class="bi bi-eye" viewBox="0 0 16 16">
                                <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/>
                                <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>
                            </svg>
                        }    
                        <div className="ContainerLoginButton">
                            <button className="LoginButton" onClick={handlesubmit} >Login</button>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}
export default Login;