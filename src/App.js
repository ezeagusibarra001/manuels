import React from "react"
import { BrowserRouter, Route } from "react-router-dom"
import Home from "./Home/Home"
import Clasesonline from './Clasesonline/Clasesonline';
import Blog from "./Blog/Blog";
import Login from "./Login/Login";
import AdminClases from "./Admin/AdminClases"
import AdminBlog from "./Admin/AdminBlog"
import AdminReseñas from "./Admin/AdminReseñas"
import AdminPagos from "./Admin/AdminPagos"
//import Checkout from "./Checkout/Checkout";
import CheckoutStep from './StepperCheckOut/CheckoutStep'
import Form from "./Formulario/Form";
import { HomeProvider} from './context/home-context'
import { ToastProvider } from "react-toast-notifications";
import AdminCode from './Admin/AdminCode'
function App() {
  // eslint-disable-next-line
  return (
        <ToastProvider autoDismiss autoDismissTimeout={3000} placement="bottom-right">
          <HomeProvider>
            <BrowserRouter>
              <Route path="/" component={Home} exact />
              <Route path="/Clasesonline" component={Clasesonline} exact />
              <Route path="/Blog" component={Blog} exact />
              <Route path="/Login" component={Login} exact />
              <Route path="/AdminClases" component={AdminClases} exact />
              <Route path="/AdminCode" component={AdminCode} exact />
              <Route path="/AdminBlog" component={AdminBlog} exact />
              <Route path="/AdminReseñas" component={AdminReseñas} exact />
              <Route path="/AdminPagos" component={AdminPagos} exact />
              <Route path="/Checkout" component={CheckoutStep} exact />
              <Route path="/form/:asunto" component={Form} exact />
            </BrowserRouter>
          </HomeProvider>
        </ToastProvider>
  );
}
export default App;
