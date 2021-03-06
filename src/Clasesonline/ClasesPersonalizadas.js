import React from "react"
import "./ClasesPersonalizadas.css"
import { useHistory } from "react-router-dom"

function ClasesPersonalizadas() {
    const history = useHistory()
    const x = () => {
        window.scrollTo(0, 0)
        history.push("/Form/Clases_Personalizadas")
    }
    return (

        <div className="ContainerPadreClasesPersonalizadas">
            <div className="ContainerSubPadreClasesPersonalizadas">
                <div className="ContainerHijo1">
                    <div className="ContainerTituloPersonalizadas">
                        <h2 className="TituloPersonalizadas">Clases Personalizadas</h2>
                        <p className="SubTituloPersonalizadas">locución, neutro, radio, radio teatro, oratoria y cuidado de la voz</p>
                    </div>
                    <div className="ContainerItem1Personalizadas">
                        <p className="TextoPersonalizadas1">
                            La experiencia y autodescubrimiento de la voz y su versatilidad a través del juego.
                            El conocimiento de nuevas herramientas que ayudarán que la comunicación sea más eficaz.
                            Transitar, experimentar y animarse a lo desconocido para transmitir con más confianza y
                            claridad
                        </p>
                        <div className="ContainerIcono1Personalizadas">
                            <img alt="img"
                                src="../assets/iconoc1.webp"
                                className="iconoc1"
                            />
                        </div>
                    </div>
                    <div className="ContainerItem2Personalizadas">
                        <p className="TextoPersonalizadas2">
                            Estas clases pueden tomarse de manera individual o de a dos personas
                        </p>
                        <div className="ContainerIcono2Personalizadas">
                            <img alt="img"
                                src="../assets/iconoc2.webp"
                                className="iconoc2"
                            />
                        </div>
                    </div>
                </div>
                <div className="ContainerHijo2">
                    <div className="ContainerItem3Personalizadas">
                        <p className="TextoPersonalizadas3">
                            CONTENIDOS: Respiración, articulación, oratoria,impro, lectura de diferentes formatos,
                            locución comercial, neutro, radio, conducción ante cámara, ente otros
                        </p>
                        <div className="ContainerIcono3Personalizadas">
                            <img alt="img"
                                src="../assets/iconoc3.webp"
                                className="iconoc3"
                            />
                        </div>
                    </div>
                    <div className="ContainerItem4Personalizadas">
                        <p className="TextoPersonalizadas4">
                            1 hora, un encuentro semanal. No hay máximo de  clases, depende de los avances y de los
                            contenidos que elija transitar cada alumno
                        </p>
                        <div className="ContainerIcono4Personalizadas">
                            <img alt="img"
                                src="../assets/iconoc4.webp"
                                className="iconoc4"
                            />
                        </div>
                    </div>
                    <div className="ContainerItem5Personalizadas">
                        <p className="TextoPersonalizadas5">
                            Skype. De descarga gratuita
                        </p>
                        <div className="ContainerIcono5Personalizadas">
                            <img alt="img"
                                src="../assets/iconoc5.webp"
                                className="iconoc5"
                            />
                        </div>
                    </div>
                    <div className="ContainerButtonPersonalizadas">
                        <button className="ButtonPersonalizadas" onClick={x}> <b>¡QUIERO SABER MÁS!</b> </button>
                    </div>
                </div>


            </div>
        </div>
    )

}
export default ClasesPersonalizadas;
