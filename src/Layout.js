import React,{useState} from "react"
import Nabvar from "./Nabvar/Nabvar";
import Footer from "./Footer/Footer";
import {useHome} from "./context/home-context"

function Layout(props) {

    const {login, setLogin}=useHome()
    return(

        <div>
            {
                login===false?<Nabvar/>:<div></div>
            }
            {props.children}
            <Footer/>
            
        </div>
    )
    
}
export default Layout;
