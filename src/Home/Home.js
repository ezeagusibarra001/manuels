import React from "react"
import Layout from "../Layout";
import Presentacion from "./Presentacion";
import Experiencia from "./Experiencia";
import Video from "./Video";
import Servicios from "./Servicios";


function Home(props) {


    return(

        <Layout>
           <Presentacion/>
           <Experiencia/>
           <Video/>
           <Servicios/>
        </Layout>
    )
    
}
export default Home;
