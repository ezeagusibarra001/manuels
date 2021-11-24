import dayjs from "dayjs";
import React from "react"
import "./Cursos.css"
import "../Loading/LoadingC"
import {Link} from "react-router-dom"
import {useHome} from '../context/home-context'
import LoadingC from "../Loading/LoadingC";
function Cursos(props) {
    const {clases,loading} = useHome()
    if(loading){
        return (<LoadingC/>)
    }else{
        return (
            <div className="ContainerPadreCursos">
                <div className="ContainerHijoCursos">
                    <div className="SubContainerHijoCursos">
                        {clases.map(clase=>
                            <div className="ContainerItemsCursos">
                            <div className="ContainerCursosTitulos">
                                <h2 className="CursosTitulos">{clase.title}-${clase.price}</h2>
                            </div>
                            <div className="ContainerCursosTextos1">
                                <p className="CursosTextos1">
                                    {clase.description}
                                </p>
                            </div>
                            <div className="ContainerCursosSubTitulos">
                                <h4 className="CursosSubTitulos">¿Quienes pueden hacerlo?</h4>
                            </div>
                            <div className="ContainerCursosTextos2">
                                <p className="CursosTextos2">
                                    {clase.forwho}
                                </p>
                            </div>
                            <div className="ContainerIconosCursos">
                                <div className="ContainerImgCursos">
                                    <img alt="img" className="ImgCursos" src="./assets/iconoc4.webp" />
                                </div>
                                <div className="ContainerCursosTextitos">
                                    <p className="CursosTextitos">
                                        {clase.duration}
                                    </p>
                                </div>
                                <div className="ContainerImgCursos">
                                    <img alt="img" className="ImgCursos" src="./assets/iconoc2.webp" />
                                </div>
                                <div className="ContainerCursosTextitos">
                                    <p className="CursosTextitos">
                                        {clase.teacher}
                                    </p>
                                </div>
                                <div className="ContainerImgCursos">
                                    <img alt="img" className="ImgCursos" src="./assets/iconoc5.webp" />
                                </div>
                                <div className="ContainerCursosTextitos">
                                    <p className="CursosTextitos">
                                        {clase.requirements}
                                    </p>
                                </div>
                            </div>
                            <div className="ContainerCursosTextos3">
                                <h4 className="CursosTextos3">CUPOS LIMITADOS - FECHAS : {dayjs(clase.date).format('DD/MM/YY')}</h4>
                            </div>
                            {clase.quota === 0
                                ?<div className="ContainerCursostexto5"><h4 className="CursosTextos4"><Link className="ButtonTextos5" >SOLD OUT</Link></h4> </div>
                                :<div className="ContainerCursostexto4"><h4 className="CursosTextos4"><Link className="ButtonTextos4" to={"/Checkout/"+clase.idLesson}>QUIERO INSCRIBIRME</Link></h4></div>
                            }
                        </div>
                        )}
                    </div>
                </div>
            </div>
        )
    }
}
export default Cursos;