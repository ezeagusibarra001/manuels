import React,{useRef} from "react"
import "./CarruselMarcas.css"

function CarruselMarcas(){
    const Imagenes =["../assets/Carrusel1.png","../assets/Carrusel2.png","../assets/Carrusel3.png"]
    const SlidesContainer = useRef(null)
    const foward=()=>{
        const PrimerElemento = SlidesContainer.current.firstChild
        console.log("Primer Elemento del carrusel:",PrimerElemento)
        const sizeSlide = SlidesContainer.current.firstChild.offsetWidth
        console.log("Tamaño del width:",sizeSlide)
        SlidesContainer.current.style.transition = " 500ms ease-out all"
        SlidesContainer.current.style.transform = `translateX(-${sizeSlide}px)`
        const Transition =()=>{
            SlidesContainer.current.append(PrimerElemento)
            SlidesContainer.current.style.transition = "none"
            SlidesContainer.current.style.transform = `translateX(0px)`
            SlidesContainer.current.removeEventListener("transitionend",Transition)
        }
        SlidesContainer.current.addEventListener("transitionend",Transition)
    }
    const back   = () =>{
        /*DECLARAMOS UNA VARIABLE CON EL VALOR DEL WIDTH DE LA IMAGEN */
        const sizeSlide = SlidesContainer.current.firstChild.offsetWidth
        console.log("sizeSlide:",sizeSlide)
       /*IDENTIFICAMOS LOS ELEMENTO DEL CARRUSEL */
       const PrimerElemento = SlidesContainer.current.firstChild;
       /*IDENTIFICAMOS LOS ELEMENTO DEL CARRUSEL */
       const allElements = SlidesContainer.current.children /*ARRAY DE HTML DIVS*/
       console.log(allElements)
       /*IDENTIFICAMOS EL ULTIMO ELEMENTO DEL CARRUSEL */
       const ultimoElemento = SlidesContainer.current.lastChild;
       console.log(ultimoElemento)
       /*INSERTAMOS EL ULTIMO DIV ANTES DEL PRIMERO*/
       SlidesContainer.current.insertBefore(ultimoElemento,PrimerElemento)
       SlidesContainer.current.style.transition = "none";
       SlidesContainer.current.style.transform  = `translateX(-${sizeSlide}px)`
       setTimeout(() => {
           SlidesContainer.current.style.transition = "500ms ease-out all"
           SlidesContainer.current.style.transform = "translateX(0px)";
       },50);
   }
    return(
        <div className="CarruselContainer">
            <h1 className="TituloCarrusel">QUIENES CONFIARON EN MÍ</h1>
            <div className="Carrusel">
                <div className="SlidesContainer" ref={SlidesContainer}>
                   { Imagenes.map(Imagen =>
                    <div className="Slides">
                        <img 
                            alt="img"
                            className="CarruselImg"
                            src={Imagen}
                        />
                    </div>)}
                </div>
                <div className="Controllers">
                    <button className="ControllerButton" onClick={back}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="Arrow"  class="bi bi-caret-left-fill" viewBox="0 0 16 16">
                            <path d="m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z"/>
                        </svg>
                    </button>
                    <button className="ControllerButton" onClick={foward}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="Arrow"  class="bi bi-caret-right-fill" viewBox="0 0 16 16">
                            <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>
                        </svg>
                    </button>
                </div>
            </div>
            <div className="Index">
                {Imagenes.map( Imagen =>
                    <span className="Index-Bar"></span>
                )}
            </div>
        </div>
    )
}
export default CarruselMarcas;