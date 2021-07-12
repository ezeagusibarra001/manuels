import React from "react"
import Layout from "../Layout";
import Portada from "./Portada";
import ClasesPersonalizadas from "./ClasesPersonalizadas"
import ClasesGrupales from "./ClasesGrupales";

function Clasesonline(props) {


    return(

        <div>
            <Layout>
              <Portada />
              <ClasesPersonalizadas />
              <ClasesGrupales />
            </Layout>
        </div>
    )
    
}
export default Clasesonline;
