import React,{useState} from "react"
import NabvarDesktop from "./NabvarDesktop"
import NabvarMobile from "./NabvarMobile"
import {scroller} from "react-scroll";
import NabvarAdmin from "./NabvarAdmin";
import {useHome} from "../context/home-context";


function Nabvar(props) {

    /*-------------TRAIGO DEL CONTEXT EL ESTADO DEL LOGIN PARA REALIZAR LA LOGICA-------------*/
    const {login, setLogin}=useHome()
    /*----------------------------------------------------------------------------------------*/

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
    if(login===false){
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
    else{
        return(
            <NabvarAdmin />
        )
    }

   
}
export default Nabvar;
