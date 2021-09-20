import moment from "moment";
import React from "react"
import "./Cursos.css"
import { Link } from "react-router-dom"
import { useHome } from '../context/home-context'
function Cursos(props) {
    const { setCurrentClase } = useHome();
    const data = props.data
    const dates = data.dates;

    const x = [];

    dates.forEach(d => { x.push(d) })

    const select = () => {
        setCurrentClase(data)
        console.log(data.link)
        window.scrollTo(0, 0)
    }

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
                    <img alt="img" className="ImgCursos" src="./assets/iconoc4.webp" />
                </div>
                <div className="ContainerCursosTextitos">
                    <p className="CursosTextitos">
                        {data.duration}
                    </p>
                </div>
                <div className="ContainerImgCursos">
                    <img alt="img" className="ImgCursos" src="./assets/iconoc2.webp" />
                </div>
                <div className="ContainerCursosTextitos">
                    <p className="CursosTextitos">
                        {data.teacher}
                    </p>
                </div>
                <div className="ContainerImgCursos">
                    <img alt="img" className="ImgCursos" src="./assets/iconoc5.webp" />
                </div>
                <div className="ContainerCursosTextitos">
                    <p className="CursosTextitos">
                        {data.requeriments}
                    </p>
                </div>
            </div>
            <div className="ContainerCursosTextos3">
                <h5 className="CursosTextos3">CUPOS LIMITADOS - FECHAS : {moment(x[0].date).format("DD/MM")} {!x[1] ? <div></div> : "Y"} {!x[1] ? <div></div> : moment(x[1].date).format("DD/MM")} </h5>
            </div>

            {data.quota === 0
                ?
                <div className="ContainerCursostexto5"><h2 className="CursosTextos4"><Link className="ButtonTextos5" >SOLD OUT</Link></h2> </div>
                :
                <div className="ContainerCursostexto4"><h2 className="CursosTextos4"><Link className="ButtonTextos4" to="/Checkout" onClick={select} >QUIERO INSCRIBIRME</Link></h2> </div>
            }

        </div>
    )

}

export default Cursos;