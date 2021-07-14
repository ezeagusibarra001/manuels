import React from "react"
import "./Cursos.css"


function Cursos(props) {

    const data=props.data

    return(
        
                    <div className="ContainerItemsCursos">
                        <div className="ContainerCursosTitulos">
                            <h2 className="CursosTitulos">{data.titulo}</h2>
                        </div>
                        <div className="ContainerCursosTextos1">
                            <p className="CursosTextos1"> 
                                Es el primer acercamiento con el mundo de la locución y experimentación 
                                con la voz, abordando formatos como: informativo, publicidad y narración, como 
                                también herramientas de articulación y oratoria
                            </p>
                        </div>
                        <div className="ContainerCursosSubTitulos">
                            <h6 className="CursosSubTitulos">¿Quienes pueden hacerlo?</h6>
                        </div>
                        <div className="ContainerCursosTextos2">
                            <p className="CursosTextos2"> 
                                Personas que trabajen con la voz. Curiosos y aquellos que quieran trabajar sus nervios 
                                y vergüenza de exposición oral
                            </p>
                        </div>
                        <div className="ContainerIconosCursos">
                            <div className="ContainerImgCursos">
                                <img className="ImgCursos" src="./assets/iconoc1.png"/>
                            </div>
                            <div className="ContainerCursosTextitos">
                                <p className="CursosTextitos"> 
                                    4 encuentros de 90min.1 clase semanal.Duración total: 1 mes
                                </p>
                            </div>
                            <div className="ContainerImgCursos">
                                <img className="ImgCursos" src="./assets/iconoc1.png"/>
                            </div>
                            <div className="ContainerCursosTextitos">
                                <p className="CursosTextitos"> 
                                    4 encuentros de 90min.1 clase semanal.Duración total: 1 mes
                                </p>
                            </div>
                            <div className="ContainerImgCursos">
                                <img className="ImgCursos" src="./assets/iconoc1.png"/>
                            </div>
                            <div className="ContainerCursosTextitos">
                                <p className="CursosTextitos"> 
                                    4 encuentros de 90min.1 clase semanal.Duración total: 1 mes
                                </p>
                            </div>
                        </div>
                        <div className="ContainerCursostexto3">
                            <h5 className="CursosTextos3">CUPOS LIMITADOS - PRÓXIMAS FECHAS 05/06 Y 12/06</h5>
                        </div>
                        <div className="ContainerCursostexto4">
                            <h2 className="CursosTextos4"><button className="ButtonTextos4">Quiero inscribirme</button></h2>
                        </div>
                    </div>
    )
    
}
export default Cursos;