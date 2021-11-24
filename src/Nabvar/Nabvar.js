import React,{useState} from "react"
import NabvarDesktop from "./NabvarDesktop"
import NabvarMobile from "./NabvarMobile"
import {scroller} from "react-scroll";
import NabvarAdmin from "./NabvarAdmin";
function Nabvar(props) {
    const [screenSize,setScreenSize]=useState(window.innerWidth)
    const screenChange =()=>{
        setScreenSize(window.innerWidth)
        console.log("Screen size:",screenSize)
    }
    window.addEventListener("resize",()=>{screenChange();}) //SE EJECUTA CADA VEZ QUE LA PANTALLA CAMBIA DE TAMAÑO
    window.addEventListener("load",()=>{screenChange();})   //SE EJECUTA CADA VEZ QUE LA PAGINA SE RECARGA
/*-------------OPTIMIZAMOS EL CODIGO ENVIANDO A TRAVES DE LAS PROPS LOS METODOS DE SCROLL A LOS COMPONNETES MOBILE Y DESKTOP-------------*/
    const ScrollServicios=()=>{
        scroller.scrollTo('Servicios',{
            smooth: true,
            offset: -70,
            duration:2500,
        })
    }
    const ScrollExperiencia=()=>{
        scroller.scrollTo('Experiencia',{
            smooth: true,
            offset: -70,
            duration:2000,
        })
    } 
/*-----------------------------------------------------------------------------------------------------------------------------------------*/
    if(localStorage.getItem("login")){ //EVALUAMOS EL VALOR DE LA VARIABLE GUARDADA EN EL STORAGE DEL NAVEGADOR
        return(<NabvarAdmin/>)
    }else{
        if(screenSize>700){
            return(<NabvarDesktop ScrollServicios={ScrollServicios} ScrollExperiencia={ScrollExperiencia} />)
        }
        else{return(<NabvarMobile ScrollServicios={ScrollServicios} ScrollExperiencia={ScrollExperiencia}/>)}
    }  
}
export default Nabvar;
