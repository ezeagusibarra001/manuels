import React from "react"
import Nabvar from "./Nabvar/Nabvar";
import Footer from "./Footer/Footer";

function Layout(props) {

    return(

        <div>
            <Nabvar/>
            {props.children}
            <Footer/>
        </div>
    )
    
}
export default Layout;
