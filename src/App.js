import React from "react"
import {BrowserRouter,Route} from "react-router-dom"
import Home from "./Home/Home"
import Clasesonline from './Clasesonline/Clasesonline';
import Blog from "./Blog/Blog";
import Login from "./Login/Login";

function App() {

  
  return (

    <div>

      <BrowserRouter>

      <Route path="/" component={Home} exact />
      <Route path="/Clasesonline" component={Clasesonline} exact />
      <Route path="/Blog" component={Blog} />
      <Route path="/Login" component={Login} />

      </BrowserRouter>

    </div>
     

  );
}

export default App;
