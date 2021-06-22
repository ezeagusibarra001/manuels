import React,{useState} from "react"
import Layout from "../Layout";
import Presentacion from "./Presentacion";
import Experiencia from "./Experiencia";
import Video from "./Video";


function Home(props) {


    return(

        <Layout>
           <Presentacion/>
           <Experiencia/>
           <Video/>
        </Layout>
    )
    
}
export default Home;
