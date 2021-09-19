import React,{useRef} from "react"
import "./CarruselMarcas.css"

function CarruselMarcas(){
    const Imagenes =["../assets/Carrusel1.png","../assets/Carrusel2.png","../assets/Carrusel3.png"]
    const SlidesContainer = useRef(null)
    const foward=()=>{
        /*IDENTIFICAMOS AL PRIMER ELEMENTO DEL CARRUSEL */
        const PrimerElemento = SlidesContainer.current.firstChild
        console.log("Primer Elemento del carrusel:",PrimerElemento)
        /*IDENTIFICAMOS EL VALOR DEL WIDTH EN PIXELES DEL PRIMER ELEMENTO */
        const sizeSlide = SlidesContainer.current.firstChild.offsetWidth
        console.log("Tamaño del width:",sizeSlide)
        /*EJECUTAMOS UN MOVIMINETO HORIZONTAL EN X IGUAL DE LARGO QUE EL WIDTH DEL PRIMER ELEMENTO*/
        SlidesContainer.current.style.transition = " 500ms ease-out all"
        SlidesContainer.current.style.transform = `translateX(-${sizeSlide}px)`
        const Transition =()=>{
            /*AL INSERTAR EL PRIMER ELEMENTO ESTE SE POSICIONA AL FINAL*/
            SlidesContainer.current.append(PrimerElemento)
            /*SETEAMOS LA POSICION DEL CARRUSEL DEVULETA AL ORIGEN*/
            SlidesContainer.current.style.transition = "none"
            SlidesContainer.current.style.transform = `translateX(0px)`
            /*ESTAMOS REMOVINEDO EL LISTENER PARA QUE ESTE NO SE VUELVA A EJECUTAR FUERA DE CONTROL*/
            SlidesContainer.current.removeEventListener("transitionend",Transition)
        }
        /*EL EVENT LISTENER CUANDO FINALIZE LA TRANSITION EJECUTA LAS DEMAS ACCIONES*/
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
   /*setInterval(foward,4000);*/
 
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
                    <button className="ControllerButtonLeft" onClick={back}>
                    </button>
                    <button className="ControllerButtonRight" onClick={foward}>
                    </button>
                </div>
            </div>
            <div className="IndexContainer">
                {Imagenes.map( indexBar => <span className="Index-Bar"></span>)}
            </div>
        </div>
    )
}
export default CarruselMarcas;