import React from "react"
import Layout from "../Layout";
import Portada from "./Portada";
import ClasesPersonalizadas from "./ClasesPersonalizadas"
import ClasesGrupales from "./ClasesGrupales";
import Cursos from "./Cursos";
import "./Cursos.css"

function Clasesonline(props) {

    const cursos=[
        {
            id:1,
            titulo:"Locución",
            texto1:"  Es el primer acercamiento con el mundo de la locución y experimentación con la voz, abordando formatos como: informativo, publicidad y narración, como también herramientas de articulación y oratoria",
            texto2:"Personas que trabajen con la voz. Curiosos y aquellos que quieran trabajar sus nervios y vergüenza de exposición oral",
            texto3:"CUPOS LIMITADOS - PRÓXIMAS FECHAS 05/06 Y 12/06",
            texto4:"QUIERO INSCRIBIRME",
        },
        {
            id:2,
            titulo:"Locución",
            texto1:"  Es el primer acercamiento con el mundo de la locución y experimentación con la voz, abordando formatos como: informativo, publicidad y narración, como también herramientas de articulación y oratoria",
            texto2:"Personas que trabajen con la voz. Curiosos y aquellos que quieran trabajar sus nervios y vergüenza de exposición oral",
            texto3:"CUPOS LIMITADOS - PRÓXIMAS FECHAS 05/06 Y 12/06",
            texto4:"QUIERO INSCRIBIRME",
        },
        {
            id:3,
            titulo:"Locución",
            texto1:"  Es el primer acercamiento con el mundo de la locución y experimentación con la voz, abordando formatos como: informativo, publicidad y narración, como también herramientas de articulación y oratoria",
            texto2:"Personas que trabajen con la voz. Curiosos y aquellos que quieran trabajar sus nervios y vergüenza de exposición oral",
            texto3:"CUPOS LIMITADOS - PRÓXIMAS FECHAS 05/06 Y 12/06",
            texto4:"QUIERO INSCRIBIRME",
        },
        {
            id:4,
            titulo:"Locución",
            texto1:"  Es el primer acercamiento con el mundo de la locución y experimentación con la voz, abordando formatos como: informativo, publicidad y narración, como también herramientas de articulación y oratoria",
            texto2:"Personas que trabajen con la voz. Curiosos y aquellos que quieran trabajar sus nervios y vergüenza de exposición oral",
            texto3:"CUPOS LIMITADOS - PRÓXIMAS FECHAS 05/06 Y 12/06",
            texto4:"QUIERO INSCRIBIRME",
        },
        {
            id:5,
            titulo:"Locución",
            texto1:"  Es el primer acercamiento con el mundo de la locución y experimentación con la voz, abordando formatos como: informativo, publicidad y narración, como también herramientas de articulación y oratoria",
            texto2:"Personas que trabajen con la voz. Curiosos y aquellos que quieran trabajar sus nervios y vergüenza de exposición oral",
            texto3:"CUPOS LIMITADOS - PRÓXIMAS FECHAS 05/06 Y 12/06",
            texto4:"QUIERO INSCRIBIRME",
        },
        {
            id:6,
            titulo:"Locución",
            texto1:"  Es el primer acercamiento con el mundo de la locución y experimentación con la voz, abordando formatos como: informativo, publicidad y narración, como también herramientas de articulación y oratoria",
            texto2:"Personas que trabajen con la voz. Curiosos y aquellos que quieran trabajar sus nervios y vergüenza de exposición oral",
            texto3:"CUPOS LIMITADOS - PRÓXIMAS FECHAS 05/06 Y 12/06",
            texto4:"QUIERO INSCRIBIRME",
        },
    ]
    return(

        <div>
            <Layout>
              <Portada />
              <ClasesPersonalizadas />
              <ClasesGrupales />
              <div className="ContainerPadreCursos">
                <div className="ContainerHijoCursos">
                    <div className="SubContainerHijoCursos">
                        {cursos.map(cursos=><Cursos data={cursos} />)}
                    </div>
                </div>
              </div>
            </Layout>
        </div>
    )
    
}
export default Clasesonline;
