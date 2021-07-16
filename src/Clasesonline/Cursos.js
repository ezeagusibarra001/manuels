import React from "react"
import "./Cursos.css"


function Cursos(props) {

    const data=props.data

    return(
        
        <div className="ContainerItemsCursos">
            <div className="ContainerCursosTitulos">
                <h1 className="CursosTitulos">{data.titulo}</h1>
            </div>
            <div className="ContainerCursosTextos1">
                <p className="CursosTextos1"> 
                    {data.texto1}
                </p>
            </div>
            <div className="ContainerCursosSubTitulos">
                <h6 className="CursosSubTitulos">¿Quienes pueden hacerlo?</h6>
            </div>
            <div className="ContainerCursosTextos2">
                <p className="CursosTextos2"> 
                    {data.texto2}
                </p>
            </div>
            <div className="ContainerIconosCursos">
                <div className="ContainerImgCursos">
                    <img className="ImgCursos" src="./assets/iconoc4.png"/>
                </div>
                <div className="ContainerCursosTextitos">
                    <p className="CursosTextitos"> 
                        {data.textito1}
                    </p>
                </div>
                <div className="ContainerImgCursos">
                    <img className="ImgCursos" src="./assets/iconoc2.png"/>
                </div>
                <div className="ContainerCursosTextitos">
                    <p className="CursosTextitos"> 
                        {data.textito2}
                    </p>
                </div>
                <div className="ContainerImgCursos">
                    <img className="ImgCursos" src="./assets/iconoc5.png"/>
                </div>
                <div className="ContainerCursosTextitos">
                    <p className="CursosTextitos"> 
                        {data.textito3}
                    </p>
                </div>
            </div>
            <div className="ContainerCursosTextos3">
                <h5 className="CursosTextos3">{data.texto3}</h5>
            </div>
            <div className="ContainerCursostexto4">
                <h2 className="CursosTextos4"><button className="ButtonTextos4">{data.texto4}</button></h2>
            </div>
        </div>
    )
    
}
export default Cursos;