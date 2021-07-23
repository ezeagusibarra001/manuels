import React  from "react"
import Layout from "../Layout";
import PortadaBlog from "./PortadaBlog";
import Publicaciones from "./Publicaciones";


function Blog(props) {


    return(

       <Layout>
           <PortadaBlog />
           <Publicaciones />
       </Layout>
    )
    
}
export default Blog;