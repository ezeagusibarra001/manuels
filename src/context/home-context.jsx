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
    //RESEÑAS API
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        obtenerReseñas();
    }, []);
    const obtenerReseñas = async () => {
        await clienteAxios.get("/reviews").then((res) => {
            setReviews(res.data);
            console.log(res.data);
        });
    };
    //ESTADO DEL LOGIN
    const [login, setLogin] = useState(false)
    console.log("Estado del login:", login)
    //ESTAO DEL LOADING
    const [loading, setLoading]=useState(false)
    /*---------------------------------------------------ARRAY RESEÑAS--------------------------------------------*/
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
        clases, login, setLogin, obtenerClases, jwt, setJwt,axiosConfig,loading,setLoading
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
