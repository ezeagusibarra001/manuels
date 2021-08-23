import React,{useState} from "react"
import "./App.css"
import { BrowserRouter, Route } from "react-router-dom"
import Home from "./Home/Home"
import Clasesonline from './Clasesonline/Clasesonline';
import Blog from "./Blog/Blog";
import Login from "./Login/Login";
import AdminClases from "./Admin/AdminClases"
import AdminBlog from "./Admin/AdminBlog"
import AdminReseñas from "./Admin/AdminReseñas"
import AdminPagos from "./Admin/AdminPagos"
import Checkout from "./Checkout/Checkout";
import Form from "./Formulario/Form";
import { HomeProvider } from './context/home-context'
import { ToastProvider } from "react-toast-notifications";
import Loading from "./Loading/Loading";

function App() {
  // eslint-disable-next-line
  const [web_ready,setWeb_ready] = useState(true) /*NO SE PUEDE USAR EL CONTEXT LA LOGICA LA TENEMOS QUE TRAER DIRECTAMENTE DEL APP JS CUANDO HAGAMOS ALGUN GET */
  return (
    <div className="ContainerGod">
      {
        web_ready ?
        <>
        <div className="FondoBlanco"/> {/*LO USAMOS PARA EL EFECTO DEL FONDO BLANCO*/}
        <ToastProvider autoDismiss autoDismissTimeout={3000} placement="bottom-right">
          <HomeProvider>
            <BrowserRouter>
              <Route path="/" component={Home} exact />
              <Route path="/Clasesonline" component={Clasesonline} exact />
              <Route path="/Blog" component={Blog} exact />
              <Route path="/Login" component={Login} exact />
              <Route path="/AdminClases" component={AdminClases} exact />
              <Route path="/AdminBlog" component={AdminBlog} exact />
              <Route path="/AdminReseñas" component={AdminReseñas} exact />
              <Route path="/AdminPagos" component={AdminPagos} exact />
              <Route path="/Checkout" component={Checkout} exact />
              <Route path="/form/:asunto" component={Form} exact />
            </BrowserRouter>
          </HomeProvider>
        </ToastProvider>
        </>
        :
        <div className="ContainerLoadingApp"> 
          <Loading/>
        </div>
      }
    </div>
  );
}
export default App;
