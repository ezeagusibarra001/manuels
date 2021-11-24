import React,{useState} from "react"
import "./Publicaciones.css"
import { useHome } from '../context/home-context'
import dayjs from 'dayjs'
import ModalBlog from "./ModalBlog"
function Publicaciones() {
    const { blog,dominio} = useHome()
    const [modalBlog, setModalBlog]=useState(false)
    const [imgBlog, setImgBlog]=useState()
    const OpenModal =(e)=>{
        var imgB = document.createElement("img");
        imgB = e.target
        //img.src = e.target.src;
        //img.alt = e.target.alt;
        setImgBlog(imgB)
        setModalBlog(true)
        console.log(imgBlog)
    }
    return (
        <div className="ContainerPublicaciones">
            {blog.map((publicacion) => (
                <div className="ContainerAux">
                    <div className="ContainerPublicacionesTitulo">
                        <h1 className="PublicacionesTitulo">{publicacion.title}</h1>
                    </div>
                    <div className="SubContainerPublicaciones">
                        <div className="ContainerPublicacionesImg1">
                          {publicacion.image === null 
                          ?<div></div>  
                          :
                            <>
                            <img alt="img" className="PublicacionesImg" src={dominio+publicacion.idPublications+"-"+ publicacion.name} onClick={OpenModal}/>
                            </>               
                          }
                        </div>
                        <div className="ContainerPublicacionesTextos1">
                            <h2 className="PublicacionesSubTitulo">
                                <b>{dayjs(publicacion.date).format("DD/MM/YY")} - {publicacion.subtitle}</b>
                            </h2>
                            <p className="PublicacionesParrafos">
                                {publicacion.description}
                            </p>
                            <p className="PublicacionesParrafos">
                                {publicacion.description1}
                            </p>
                        </div>
                        <div className="ContainerPublicacionesTextos2">
                            <h2 className="PublicacionesSubTitulo">
                                <b>{publicacion.subtitle2}</b>
                            </h2>
                            <p className="PublicacionesParrafos">
                                {publicacion.description2}
                            </p>
                            <p className="PublicacionesParrafos">
                                {publicacion.description3}
                            </p>
                        </div>
                    </div>
                </div>
            ))}
            {    
                modalBlog &&
                <ModalBlog modalBlog={modalBlog} setModalBlog={setModalBlog} imgBlog={imgBlog}/>
            }
        </div>
    )
}
export default Publicaciones;
    