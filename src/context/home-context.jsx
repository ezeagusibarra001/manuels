import React, { useState, useEffect } from "react";
import clienteAxios from '../config/clienteAxios'
const HomeContext = React.createContext();

export function HomeProvider(props) {
     // WEB_READY
     const [web_ready,setWeb_ready] = useState(false)
    setTimeout(() => {
        setWeb_ready(true)
     }, 2500);
    //IMAGENES API
    const [imagenes, setImagenes] = useState([]);
    useEffect(() => {
        obtenerImagenes();
    }, []);
    const obtenerImagenes = async () => {
        await clienteAxios.get("/images").then((res) => {
            setImagenes(res.data);
        });
    };
    //IMAGENES HOME
    /*const [portadahome, setPortadahome] = useState([]);
    useEffect(() => {
        obtenerImagenesHome();
    }, []);
    const obtenerImagenesHome = async () => {
        await clienteAxios.get("/images/portada.png").then((res) => {
            setPortadahome(res.data);
            //setWeb_ready(true)
        });
    };*/
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
        }).then(() => {
            setLoading(false)
        }).catch((error) => {
            console.log(error)
        });
    };
    //BLOG API
    const [blog, setBlog] = useState([]);
    useEffect(() => {
        obtenerBlogs();
    }, []);
    const obtenerBlogs = async () => {
        await clienteAxios.get("/publications/").then((res) => {
            setBlog(res.data);
            console.log(res.data);
        }).then(() => {
            setLoadingBlog(false)
        }).catch((error) => {
            console.log(error)
        });
    };
    //ONE IMAGE API
    const [oneImage, setOneImage] = useState([]);
    useEffect(() => {
        obtenerImg();
    }, []);
    const obtenerImg = async () => {
        await clienteAxios.get("/images/icono1.png").then((res) => {
            setOneImage(res.data);
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
        }).then(() => {
            setLoadingFed(false)
        }).catch((error) => {
            console.log(error)
        });
    };
    //CODE API
    const [code, setCode] = useState([]);
    useEffect(() => {
        obtenerCode();
        // eslint-disable-next-line
    }, []);
    const obtenerCode = async () => {
        await clienteAxios.get("/discounts", axiosConfig).then((res) => {
            setCode(res.data);
            console.log(res.data);
        }).then((res) => {
            console.log(res.data)
        }).catch((error) => {
            console.log(error)
        });
    };
    //ESTADO DEL LOGIN
    const [login, setLogin] = useState(false)
    console.log("Estado del login:", login)
    /*------------------------------------------------------------------------------------------------------------*/
    //JWT
    const [jwt, setJwt] = useState()
    //AXIOSJWT
    let axiosConfig = {
        headers: {
            'Authorization': `Bearer ${sessionStorage.getItem('jwtToken')}`,
            "Access-Control-Allow-Origin": "http://localhost:3000",
            'Access-Control-Allow-Credentials': 'true',
            /*   'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE',*/
            'Access-Control-Allow-Headers': 'Authorization'
        }
    };
   
    //CURRENT CHECKOUT CLASE
    const [currentClase, setCurrentClase] = useState();
    //LOADING CLASES
    const [loading, setLoading] = useState(true)
    //LOADING BLOG
    const [loadingBlog, setLoadingBlog] = useState(true)
    //LOADING FEEDBACK
    const [loadingFed, setLoadingFed] = useState(true)
    //LOADING POST CHECKOUT
    const [loadingCheckout, setLoadingCheckout] = useState(true)
    //DECLARO QUIEN ES EL CONTEXT
    const value = {
        clases, login, setLogin, obtenerClases, jwt, setJwt, axiosConfig, reviews, obtenerReseñas,
        currentClase, setCurrentClase, imagenes, obtenerImagenes, blog, obtenerBlogs, oneImage, loading, loadingBlog, loadingFed,
        loadingCheckout, setLoadingCheckout ,web_ready,setWeb_ready, code, obtenerCode
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
