import React from "react"
import Layout from "../Layout";
import PortadaBlog from "./PortadaBlog";
import Publicaciones from "./Publicaciones";
import BlogError from "./BlogError";
import {useHome} from '../context/home-context'
import Loading from '../Loading/Loading'
function Blog(props) {
    const {loadingBlog,errorBlog} = useHome()
    return (
        <Layout>
            <PortadaBlog />
            {
                loadingBlog
                ?<Loading/>
                :
                <>
                {
                    errorBlog
                    ?<BlogError/>
                    :<Publicaciones/>
                }        
                </>
            }
        </Layout>
    )
}
export default Blog;