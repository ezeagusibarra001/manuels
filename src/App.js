import React from "react"
import { BrowserRouter, Route } from "react-router-dom"
import Home from "./Home/Home"
import Clasesonline from './Clasesonline/Clasesonline';
import Blog from "./Blog/Blog";
import Login from "./Login/Login";
import Admin from "./Admin/Admin"
import {HomeProvider} from './context/home-context'
function App() {

  return (

    <div>
      <HomeProvider>
            <BrowserRouter>
              <Route path="/" component={Home} exact />
              <Route path="/Clasesonline" component={Clasesonline} exact />
              <Route path="/Blog" component={Blog} />
              <Route path="/Login" component={Login} />
              <Route path="/Admin" component={Admin} />
        </BrowserRouter>
      </HomeProvider>
    </div>


  );
}

export default App;
