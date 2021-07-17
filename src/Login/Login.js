import React from "react"
import Layout from "../Layout";
import "./Login.css"


function Login() {


    return(

        <Layout>
            <div className="ContainerPadreLogin">
                <div className="ContainerForm">
                    <form className="FormLogin">
                        <input className="LoginInput1" type="text" placeholder="Usuario" />
                        <input className="LoginInput2" type="password" placeholder="Password" />
                    </form>
                </div>
            </div>
        </Layout>
    )
    
}
export default Login;