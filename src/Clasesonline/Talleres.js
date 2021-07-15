import React from "react";
import "./Talleres.css"

function Talleres(props) {

    const data=props.data
 
    return(

        
          
                <div className="ContainerMapTalleres" style={data.fondo}>
                        <div className="ContainerTituloTalleres">
                            <h1 style={data.texto} className="TituloTalleres">{data.titulo}</h1>
                            <p style={data.texto}>{data.subtitulo}</p>
                        </div> 
                    <div className="ContainerTalleresHijo1">
                        <div className="ContainerItem1talleres">
                            <div className="ContenedorImgTalleres">
                                <img 
                                    className="ImgTalleres"
                                    src="./assets/iconoc4.png"
                                />
                            </div>
                            <div>
                                <p style={data.texto}>{data.texto1}</p>
                            </div>
                        </div>
                        <div className="ContainerItem2talleres">
                            <div className="ContenedorImgTalleres">
                                <img 
                                    className="ImgTalleres"
                                    src="./assets/iconoc4.png"
                                />
                            </div>
                            <div>
                                <p style={data.texto}>{data.texto2}</p>
                            </div>
                        </div>
                    </div>
                    <div className="ContainerTalleresHijo2">
                        <div className="ContainerItem3talleres">
                            <div className="ContenedorImgTalleres">
                                <img 
                                    className="ImgTalleres"
                                    src="./assets/iconoc4.png"
                                />
                            </div>
                            <div>
                                <p style={data.texto}>{data.texto3} </p>
                            </div>
                        </div>
                        <div className="ContainerItem4talleres">
                            <div className="ContenedorImgTalleres">
                                <img 
                                    className="ImgTalleres"
                                    src="./assets/iconoc4.png"
                                />
                            </div>
                            <div>
                                <p style={data.texto}>{data.texto4}</p>
                            </div>
                        </div>
                        <div className="ContainerItemButtonTalleres">
                            <button className="ButtonTalleres" style={data.button}>¡Quiero Saber Más!</button>
                        </div>
                    </div>
                </div>
    )
}
export default Talleres;