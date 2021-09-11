import React from "react"
import Layout from "../Layout";
import Presentacion from "./Presentacion";
import Experiencia from "./Experiencia";
import Video from "./Video";
import Servicios from "./Servicios";
import CarruselMarcas from "./CarruselMarcas";
import Feedback from "./Feedback";
function Home(props) {
    return(
        <Layout>
           <Presentacion />
           <Experiencia />
           <Video />
           <Servicios />
           <CarruselMarcas />
           <Feedback/>
        </Layout>
    )
}
export default Home;
