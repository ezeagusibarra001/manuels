import React from "react"
import "./Cursos.css"
import "./Talleres.css"
import Layout from "../Layout";
import Portada from "./Portada";
import ClasesPersonalizadas from "./ClasesPersonalizadas"
import ClasesGrupales from "./ClasesGrupales";
import Cursos from "./Cursos";
import Talleres from "./Talleres";
import Gift from "./Gift";
import Reseñas from "./Reseñas"
import {useHome} from '../context/home-context'

function Clasesonline(props) {
    const {clases} = useHome()
    const talleres=[
        {
            titulo:"Empresariales",
            subtitulo:"Masterclass o Workshop para empresas: LOCUCIÓN Y ORATORIA",
            texto1:"Dirigido a empleados y autoridades. Los contenidos varían según necesidades de la empresa o grupo de trabajo. Puede ser de manera presencial o virtual. La cantidad de encuentros dependerá de la cantidad de asistentes o temas a abordar",
            texto2:"Los workshops tienen formato taller con actividades y participaciones de los asistentes, en cambio las masterclass son expositivas e informativas",
            texto3:"Dictado por: Manuela Sanchez Guarin, locutora nacional y docente.",
            texto4:"Se entrega material de práctica y certificado de asistencia y finalización.",
            fondo:{
                backgroundColor:"white"
            },
            texto:{
                color:"#a06ab4",
                fontWeight:"600",
            },
            button:{
                backgroundColor:"#ffd743",
                color:"white",
            }
        },
        {
            titulo:"Talleres disruptivos",
            subtitulo:"Para empresas: LOCUCIÓN, PODCAST Y RADIO TEATRO",
            texto1:"Aprender en espacios recreativos, lúdicos y distendidos. Conocerse y conocer al otro en un ambiente de juego. La práctica de contenidos y valores transversales como la escucha, respeto e intercambio, mediante de nuevas experimentaciones vocales y corporales.",
            texto2:"Los workshops tienen formato taller con actividades y participaciones de los asistentes, en cambio las masterclass son expositivas e informativas",
            texto3:"Dictado por: Manuela Sanchez Guarin, locutora nacional y docente.",
            texto4:"Se entrega material de práctica y certificado de asistencia y finalización.",
            fondo:{
                backgroundColor:"#a06ab4"
            },
            texto:{
                color:"white",
                fontWeight:"600",
            },
            button:{
                backgroundColor:"#ffd743",
                color:"#a06ab4",
            }
        
        },
        {
            titulo:"Asesorías Únicas",
            subtitulo:"Para empresas: LOCUCIÓN, PODCAST Y RADIO TEATRO",
            texto1:"Guiar, acompañar y corregir momentos. Una exposición oral, un video en off, una preparación de casting, vivo, video, una entrevista laboral, entre otras. Un espacio personalizado para preparar un tema específico.",
            texto2:"¿Quiénes pueden tomarla? Todo el que necesite asesoría para ensayar o corregir una presentación.Requisitos: No se necesita experiencia previa. Conexión a internet.",
            texto3:"Dictado por: Manuela Sanchez Guarin, locutora nacional y docente.",
            texto4:"Cantidad de encuentros necesarios de 1 hora cada uno",
            fondo:{
                backgroundColor:"white"
            },
            texto:{
                color:"#a06ab4",
                fontWeight:"600",
            },
            button:{
                backgroundColor:"#ffd743",
                color:"white",
            }
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
                        {clases.map(data=><Cursos data={data}/>)}
                    </div>
                </div>
              </div>
              <div className="ConatinerPadreTalleres">
                <div className="ContainerSubTalleres">
                    {talleres.map(talleres=><Talleres data={talleres} />)}
                </div>
              </div>
              <Gift />
              <Reseñas />
            </Layout>
        </div>
    )
    
}
export default Clasesonline;
