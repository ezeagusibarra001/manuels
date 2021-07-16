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
import { HomeProvider } from './context/home-context'
function App() {

  return (

    <div>
      <HomeProvider>
        <BrowserRouter>
          <Route path="/" component={Home} exact />
          <Route path="/Clasesonline" component={Clasesonline} exact />
          <Route path="/Blog" component={Blog} />
          <Route path="/Login" component={Login} />
          <Route path="/AdminClases" component={AdminClases}/>
          <Route path="/AdminBlog" component={AdminBlog}/>
          <Route path="/AdminReseñas" component={AdminReseñas}/>
          <Route path="/AdminPagos" component={AdminPagos}/>
        </BrowserRouter>
      </HomeProvider>
    </div>


  );
}

export default App;
