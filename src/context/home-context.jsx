import React,{useState,useEffect} from "react";
import clienteAxios from '../config/clienteAxios'
const HomeContext = React.createContext();
export function HomeProvider(props) {
    //HELP DE MAIL
    /*useEffect(() => {
        console.log("help mail")
        if(window.location.href === "https://script.google.com/macros/s/AKfycbxcxQLxjtmKz3jQEZ-zeqrXxYMdcbSzoH5yaiHgvQ/exec"){
            window.location.href = "http://localhost:3000"
        }
    },300)*/
     // WEB_READY
     const [web_ready,setWeb_ready] = useState(false)
    setTimeout(() => {
        setWeb_ready(true)
     }, 2500);
    //IMAGENES API
    const [imagenes, setImagenes] =useState([]);
    useEffect(()=>{/*obtenerImagenes()*/;},[]);
    const obtenerImagenes = async () => {
        await clienteAxios
        .get("/images")
        .then((res) => {
            setImagenes(res.data);
        })
        .catch((error) => {
            console.log("IMAGENES",error);
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

  useEffect(() => {obtenerClases();}, []);
    const obtenerClases = async () => {
    await clienteAxios
      .get("/lessons")
      .then((clases) => {
        setClases(clases.data);
        console.log("CLASES:",clases.data);
      })
      .then(() => {
        setLoading(false);
      })
      .catch((error) => {
        console.log("CLASES",error);
      });
    };
    //BLOG API
    const [blog, setBlog] = useState([]);
    useEffect(() => {
        obtenerBlogs();
    }, []);
    const obtenerBlogs = async () => {
        await clienteAxios
        .get("/publications")
        .then((res) => {
            setBlog(res.data);
            console.log("BLOG:",res.data);
        }).then(() => {
            setLoadingBlog(false)
        }).catch((error) => {
            console.log("Blog",error)
            setErrorBlog(true)
            setLoadingBlog(false)
            console.log("ErrorBlog",errorBlog)
            console.log("LoadingBlog",loadingBlog)
        });
    };
    //ONE IMAGE API
    const [oneImage, setOneImage] = useState([]);
    useEffect(() => {
        //obtenerImg();
    }, []);
    const obtenerImg = async () => {
        await clienteAxios
        .get("/images/icono1.png")
        .then((res) => {
            setOneImage(res.data);
            console.log(res.data);
        })
        .catch((error) => {
            console.log("IMG",error)
        });
    };
    //RESEÑAS API
    const [reviews, setReviews] = useState([]);
    useEffect(() => {obtenerReseñas();},[]);
    const obtenerReseñas = async () => {
        await clienteAxios
        .get("/reviews")
        .then((res) => {
            setReviews(res.data);
            console.log(res.data);
        }).then(() => {
            setLoadingFed(false)
        })
        .catch((error) => {
            console.log("REVIEWS",error)
        });
    };
    //CODE API
    const [code, setCode] = useState([]);
    useEffect(() => {
        obtenerCode();
        // eslint-disable-next-line
    }, []);
    const obtenerCode = async () => {
        await clienteAxios
        .get("/discounts")
        
        .then((res) => {
            setCode(res.data);
            console.log("CÓDIGOS:",res.data);
        })
        .catch((error) => {
            console.log("CÓDIGOS",error)
        });
    };
    /*ESTADO DEL LOGIN
      <-- NO TIENE SENTIDO USAR UN HOOK , LA LOGICA DEL LOGIN SE RESUELVE CON LOS METODOS localStorage.setItem() Y localStorage.removeItem()-->*/
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
    //CURRENT INSCRIPCIÓN
    const [CheckForm,setCheckForm] = useState({name: "",lastname: "",mail: "",phone: "",})
    //CURRENT CHECKOUT CLASE
    const [currentClase, setCurrentClase] = useState();
    const [currentDates, setCurrentDates] = useState([]);
    //LOADING CLASES
    const [loading, setLoading] = useState(true)
    //LOADING BLOG
    const [loadingBlog, setLoadingBlog] = useState(true)
    //ERROR BLOG
    const [errorBlog, setErrorBlog] = useState(false)
    //LOADING FEEDBACK
    const [loadingFed, setLoadingFed] = useState(true)
    //LOADING POST CHECKOUT
    const [loadingCheckout, setLoadingCheckout] = useState(true)
    // FLOJO DE PAPELES
    const [dominio, setDominio] = useState("https://backmanuels.herokuapp.com/")
    //DECLARO QUIEN ES EL CONTEXT
    const value = {
        clases, obtenerClases, jwt, setJwt, axiosConfig, reviews, obtenerReseñas,
        currentClase, setCurrentClase, imagenes, obtenerImagenes, blog, obtenerBlogs, oneImage, 
        loading, loadingBlog, loadingFed,loadingCheckout, setLoadingCheckout ,web_ready,setWeb_ready, code, 
        obtenerCode,CheckForm,setCheckForm, currentDates, setCurrentDates, dominio , setDominio , errorBlog, setErrorBlog
    };
    return <HomeContext.Provider value={value} {...props} />;
}
//EXPORTO EL CONTEXT
export function useHome() {
    const context = React.useContext(HomeContext);
    if (!context) {
        throw new Error("Something wrong have happended");
    }
    return context;
}
