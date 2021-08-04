import React, { useState, useEffect } from "react";
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
    const [login, setLogin] = useState(false)
    console.log("Estado del login:", login)
    /*---------------------------------------------------ARRAY RESEÑAS--------------------------------------------*/
    const [feedbacks, setFeedbacks] = useState([
        {
            id:1,
            reseña: "Desafie todos mis miedos , me supere a mi misma utilizando el poder de mi voz. Gracias Manuels por haberme ayudado a alcanzar una mejor version de mi misma!!!",
            author: "Petosa Ayala Franco",
            validator: true,
        },
        {
            id:2,
            reseña: "Desafie todos mis miedos , me supere a mi misma utilizando el poder de mi voz Gracias Manuels por haberme ayudado a alcanzar una mejor version de mi misma!!! Hoy me siento mas influencer que nunca.A seguir creciendo",
            author: "Ibarra Ezeuiel Agustin",
            validator: true,
        },
        {
            id:3,
            reseña: "Desafie todos mis miedos , me supere a mi misma utilizando el poder de mi voz Gracias Manuels por haberme ayudado a alcanzar una mejor version de mi misma!!! Hoy me siento mas influencer que nunca.A seguir creciendo. Super interesante y enriquecedor.",
            author: "Oubiña Maria Pilar",
            validator: true,
        },
        {
            id:4,
            reseña: "Me encanta la pija",
            author: "Centu",
            validator: false,
        },
        {
            id:5,
            reseña: "Mi amor fue culpa de tiffer puedo jurarlo",
            author: "Joaquin Jimenez Jaureche",
            validator: true,
        },
    ])
    /*------------------------------------------------------------------------------------------------------------*/
    //JWT
    const [jwt, setJwt] = useState()
    //AXIOSJWT
    let axiosConfig = {
        headers: {
            'Authorization': `Bearer ${jwt}`,
            "Access-Control-Allow-Origin": "http://localhost:3000",
            'Access-Control-Allow-Credentials': 'true',
            /*   'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE',*/
            'Access-Control-Allow-Headers': 'Authorization'
        }
    };
    //DECLARO QUIEN ES EL CONTEXT
    const value = {
        clases, login, setLogin, obtenerClases, jwt, setJwt, feedbacks, setFeedbacks,axiosConfig
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
