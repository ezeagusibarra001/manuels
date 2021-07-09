import React,{useState} from "react"
import NabvarDesktop from "./NabvarDesktop"
import NabvarMobile from "./NabvarMobile"
import {scroller} from "react-scroll";


function Nabvar(props) {

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
    if(window.innerWidth>800){

        return(
            <NabvarDesktop ScrollServicios={ScrollServicios} ScrollExperiencia={ScrollExperiencia}/>
        )
    }
    else{
        return(
            <NabvarMobile ScrollServicios={ScrollServicios} ScrollExperiencia={ScrollExperiencia}/>
        )
    }
   
}
export default Nabvar;
