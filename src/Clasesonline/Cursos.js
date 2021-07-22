import moment from "moment";
import React from "react"
import "./Cursos.css"

function Cursos(props) {

    const data = props.data
    const dates = data.dates;

    const x = [];

    dates.forEach(d=>{x.push(d)})

    return (

        <div className="ContainerItemsCursos">
            <div className="ContainerCursosTitulos">
                <h1 className="CursosTitulos">{data.title}</h1>
            </div>
            <div className="ContainerCursosTextos1">
                <p className="CursosTextos1">
                    {data.description}
                </p>
            </div>
            <div className="ContainerCursosSubTitulos">
                <h6 className="CursosSubTitulos">¿Quienes pueden hacerlo?</h6>
            </div>
            <div className="ContainerCursosTextos2">
                <p className="CursosTextos2">
                    {data.forWho}
                </p>
            </div>
            <div className="ContainerIconosCursos">
                <div className="ContainerImgCursos">
                    <img className="ImgCursos" src="./assets/iconoc4.png" />
                </div>
                <div className="ContainerCursosTextitos">
                    <p className="CursosTextitos">
                        4 encuentros de {data.duration}min
                    </p>
                </div>
                <div className="ContainerImgCursos">
                    <img className="ImgCursos" src="./assets/iconoc2.png" />
                </div>
                <div className="ContainerCursosTextitos">
                    <p className="CursosTextitos">
                        {data.teacher}
                    </p>
                </div>
                <div className="ContainerImgCursos">
                    <img className="ImgCursos" src="./assets/iconoc5.png" />
                </div>
                <div className="ContainerCursosTextitos">
                    <p className="CursosTextitos">
                        {data.requeriments}
                    </p>
                </div>
            </div>
            <div className="ContainerCursosTextos3">
                <h5 className="CursosTextos3">CUPOS LIMITADOS - FECHAS : {moment(x[0].date).format("DD/MM")} {!x[1] ? <div></div> : "Y"} {!x[1] ? <div></div>  : moment(x[1].date).format("DD/MM")} </h5>
            </div>
            <div className="ContainerCursostexto4">
                <h2 className="CursosTextos4"><button className="ButtonTextos4">QUIERO INSCRIBIRME  </button></h2>
            </div>
        </div>
    )

}
export default Cursos;