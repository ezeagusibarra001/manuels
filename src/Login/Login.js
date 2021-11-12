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
    const {setJwt, setLogin } = useHome()

    const [currentLogin, setCurrentLogin] = useState({
        user: "",
        pass: ""
    })

    const handlechange = (e) => {
        setCurrentLogin({ ...currentLogin, [e.target.name]: e.target.value, })
        console.log("login", currentLogin)
    }
    const onPress = (e) =>{
       // console.log(e.key)
        if(e.key === "Enter"){
            //console.log("Enter")
            handlesubmit()
        }
       // handlesubmit()
    }
    /*const submit = () => {
        addToast("Usuario logueado", {
            appearance: "success",
            autoDismiss: true,
        });
        setLogin(true)
        history.push("/AdminClases")
    }*/
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
                
                setLogin(true)
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