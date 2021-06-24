import React from "react"
import Layout from "../Layout";
import Presentacion from "./Presentacion";
import Experiencia from "./Experiencia";
import Video from "./Video";
import Servicios from "./Servicios";
import CarruselSlides from "./CarruselServicios"

function Home(props) {


    return(

        <Layout>
           <Presentacion/>
           <Experiencia/>
           <Video/>
           <CarruselSlides/>
        </Layout>
    )
    
}
export default Home;
