import React, {useEffect, useState}  from "react"
import "./Publicaciones.css"
import {useHome} from '../context/home-context'
import clienteAxios from '../config/clienteAxios'
function Publicaciones(props) {
    //const {blog, imagenes, jwt} = useHome()
    //BLOG API
    const [blog, setBlog] = useState([]);
    useEffect(() => {
        obtenerBlogs();
    }, []);
    const obtenerBlogs = async () => {
        await clienteAxios.get("/publications/").then((res) => {
            setBlog(res.data);
            console.log(res.data);
        });
    };

    const x = () => {
        obtenerBlogs()
    }
    return(
        <div>
            {blog.map((i)=>(
                <img src={`data:${i.image.type};base64,${i.image.bytes}`}/>
            ))}
            <button onClick={x}></button>
       
         
        </div>
    )
    
}
export default Publicaciones;