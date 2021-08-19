import React from "react";
import "./Talleres.css"
import {useHistory} from "react-router-dom"

function Talleres(props) {

    const data = props.data
    const history = useHistory()

    return (



        <div className="ContainerMapTalleres" style={data.fondo}>
            <div className="ContainerTituloTalleres">
                <h1 style={data.texto} className="TituloTalleres">{data.titulo}</h1>
                <p style={data.texto} className="SubTituloTalleres">{data.subtitulo}</p>
            </div>
            <div className="ContainerTalleresHijo1">
                <div className="ContainerItem1talleres">
                    <div className="ContenedorImgTalleres">
                        <img
                            alt="img"
                            className="ImgTalleres"
                            src="./assets/iconoc1.png"
                        />
                    </div>
                    <div>
                        <p style={data.texto} className="TallerTexto">{data.texto1}</p>
                    </div>
                </div>
                <div className="ContainerItem2talleres">
                    <div className="ContenedorImgTalleres">
                        <img
                            alt="img"
                            className="ImgTalleres"
                            src="./assets/iconoc5.png"
                        />
                    </div>
                    <div>
                        <p style={data.texto} className="TallerTexto">{data.texto2}</p>
                    </div>
                </div>
            </div>
            <div className="ContainerTalleresHijo2">
                <div className="ContainerItem3talleres">
                    <div className="ContenedorImgTalleres">
                        <img
                            alt="img"
                            className="ImgTalleres"
                            src="./assets/iconoc2.png"
                        />
                    </div>
                    <div>
                        <p style={data.texto} className="TallerTexto">{data.texto3} </p>
                    </div>
                </div>
                <div className="ContainerItem4talleres">
                    <div className="ContenedorImgTalleres">
                        <img
                            alt="img"
                            className="ImgTalleres"
                            src="./assets/iconoc3.png"
                        />
                    </div>
                    <div>
                        <p style={data.texto} className="TallerTexto">{data.texto4}</p>
                    </div>
                </div>
                <div className="ContainerItemButtonTalleres">
                    <button className="ButtonTalleres" style={data.button} onClick={()=>history.push(data.link)}>
                    ¡Quiero Saber Más!
                    </button>
                </div>
            </div>
        </div>
    )
}
export default Talleres;