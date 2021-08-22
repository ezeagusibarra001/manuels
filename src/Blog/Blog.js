import React from "react"
import Layout from "../Layout";
import PortadaBlog from "./PortadaBlog";
import Publicaciones from "./Publicaciones";
import {useHome} from '../context/home-context'
import Loading from '../Loading/Loading'
function Blog(props) {
    const {loadingBlog} = useHome()
    return (

        <Layout>
            <PortadaBlog />
            {loadingBlog === true
                ? <Loading />
                :
                <Publicaciones />
            }
        </Layout>
    )
}
export default Blog;