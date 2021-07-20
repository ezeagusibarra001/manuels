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
    //DECLARO QUIEN ES EL CONTEXT
    const value = {
        clases,login,setLogin,obtenerClases
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
