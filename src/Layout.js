import React from "react"
import Nabvar from "./Nabvar/Nabvar";
import Footer from "./Footer/Footer";
import Loading from "./Loading/Loading";
import { useHome} from './context/home-context'
import "./App.css"

function Layout(props) {
    const {web_ready} = useHome()
    return(

        <div>
            <Nabvar/>
                <div className="ContainerGod">
                {
                    web_ready ?
                    <>
                    <div className="FondoBlanco"/> {/*LO USAMOS PARA EL EFECTO DEL FONDO BLANCO*/}
                    {props.children}
                    </>
                    :
                    <div className="ContainerLoadingApp"> 
                        <Loading/>
                    </div>
                }
                </div>
            <Footer/>
        </div>
    )
    
}
export default Layout;
