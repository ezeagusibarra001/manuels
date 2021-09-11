import React,{useRef} from "react"
import "./CarruselMarcas.css"

function CarruselMarcas(){
    const SlidesContainer = useRef(null)
    const foward=()=>{
        const PrimerElemento = SlidesContainer.current.firstChild
        console.log("Primer Elemento del carrusel:",PrimerElemento)
        SlidesContainer.current.append(PrimerElemento)
    }
    const back=()=>{
        const PrimerElemento = SlidesContainer.current.firstChild
        const UltimoElemento = SlidesContainer.current.lastChild
        console.log("Primer Elemento del carrusel:",PrimerElemento)
        console.log("Ultimo Elemento del carrusel:",UltimoElemento)
        SlidesContainer.current.insertBefore(UltimoElemento,PrimerElemento)

    }
    return(
        <div className="CarruselContainer">
            <h1 className="TituloCarrusel">QUIENES CONFIARON EN MÍ</h1>
            <div className="Carrusel">
                <div className="SlidesContainer" ref={SlidesContainer}>
                    <div className="Slides">
                        <img 
                            className="CarruselImg"
                            src="../assets/Carrusel1.png"
                        />
                    </div>
                    <div className="Slides">
                        <img 
                            className="CarruselImg"
                            src="../assets/Carrusel2.png"
                        />
                    </div>
                    <div className="Slides">
                        <img 
                            className="CarruselImg"
                            src="../assets/Carrusel3.png"
                        />
                    </div>
                </div>
                <div className="Controllers">
                    <button className="ControllerButton" onClick={back}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" class="bi bi-caret-left-fill" viewBox="0 0 16 16">
                            <path d="m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z"/>
                        </svg>
                    </button>
                    <button className="ControllerButton" onClick={foward}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" class="bi bi-caret-right-fill" viewBox="0 0 16 16">
                            <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    )
}
export default CarruselMarcas;