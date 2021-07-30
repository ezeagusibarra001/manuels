import React, { useState, useEffect} from "react";
import clienteAxios from '../config/clienteAxios'
const HomeContext = React.createContext();

export function HomeProvider(props) {
    //API
    //CLASES API
    const [clases, setClases] = useState([]);
    useEffect(() => {
        obtenerClases();
    }, []);
    const obtenerClases = async () => {
        await clienteAxios.get("/lessons").then((res) => {
            setClases(res.data);
            console.log(res.data);
        });
    };
    //ESTADO DEL LOGIN
    const [login, setLogin]=useState(false)
    console.log("Estado del login:",login)
/*---------------------------------------------------ARRAY RESEÑAS--------------------------------------------*/
const [feedbacks, setFeedbacks]=useState( [
    {
        reseña:"Desafie todos mis miedos , me supere a mi misma utilizando el poder de mi voz. Gracias Manuels por haberme ayudado a alcanzar una mejor version de mi misma!!!",
        author:"Petosa Ayala Franco",
        validator:true,
    },
    {
        reseña:"Desafie todos mis miedos , me supere a mi misma utilizando el poder de mi voz Gracias Manuels por haberme ayudado a alcanzar una mejor version de mi misma!!! Hoy me siento mas influencer que nunca.A seguir creciendo",
        author:"Ibarra Ezeuiel Agustin",
        validator:true,
    },
    {
        reseña:"Desafie todos mis miedos , me supere a mi misma utilizando el poder de mi voz Gracias Manuels por haberme ayudado a alcanzar una mejor version de mi misma!!! Hoy me siento mas influencer que nunca.A seguir creciendo. Super interesante y enriquecedor.",
        author:"Oubiña Maria Pilar",
        validator:true,
    },
    {
        reseña:"Me encanta la pija",
        author:"Centu",
        validator:false,
    },
    {
        reseña:"Mi amor fue culpa de tiffer puedo jurarlo",
        author:"Joaquin Jimenez Jaureche",
        validator:true,
    },
])
/*------------------------------------------------------------------------------------------------------------*/
    //DECLARO QUIEN ES EL CONTEXT
    const value = {
        clases,login,setLogin,obtenerClases,feedbacks,setFeedbacks,
    };
    return <HomeContext.Provider value={value} {...props} />;
}
//EXPORTO EL CONTEXT
export function useHome() {
    const context = React.useContext(HomeContext);
    if (!context) {
        throw new Error("Something wrong had happended");
    }
    return context;
}
