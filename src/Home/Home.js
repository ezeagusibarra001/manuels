import React from "react"
import Layout from "../Layout";
import Presentacion from "./Presentacion";
import Experiencia from "./Experiencia";
import Video from "./Video";
import DesktopMobile from "./DesktopMobile";
import Marcas from "./Marcas";


function Home(props) {
    return(

        <Layout>
           <Presentacion/>
           <Experiencia/>
           <Video/>
           <DesktopMobile/>
           <Marcas/>
        </Layout>
    )
    
}
export default Home;
