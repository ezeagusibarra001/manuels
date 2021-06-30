import React from "react"
import Layout from "../Layout";
import Presentacion from "./Presentacion";
import Experiencia from "./Experiencia";
import Video from "./Video";
import CarruselServicios from "./CarruselServicios";
import Marcas from "./Marcas";


function Home(props) {
    return(

        <Layout>
           <Presentacion/>
           <Experiencia/>
           <Video/>
           <CarruselServicios/>
           <Marcas/>
        </Layout>
    )
    
}
export default Home;
