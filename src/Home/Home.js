import React from "react"
import Layout from "../Layout";
import Presentacion from "./Presentacion";
import Experiencia from "./Experiencia";
import Video from "./Video";
import Servicios from "./Servicios";
import Marcas from "./Marcas";
import Feedback from "./Feedback";
import Loading from "../Loading/Loading";



function Home(props) {
    return(

        <Layout>
           <Presentacion />
           <Experiencia />
           <Video />
           <Servicios />
           <Marcas />
           <Feedback/>
           <Loading />
        </Layout>
    )
    
}
export default Home;
