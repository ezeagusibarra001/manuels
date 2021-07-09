import React from "react"
import {BrowserRouter,Route} from "react-router-dom"
import Home from "./Home/Home"
import Clasesonline from './Clasesonline/Clasesonline';

function App() {

  
  return (

    <div>

      <BrowserRouter>

      <Route path="/" component={Home} exact />
      <Route path="/Clasesonline" component={Clasesonline} exact />

      </BrowserRouter>

    </div>
     

  );
}

export default App;
