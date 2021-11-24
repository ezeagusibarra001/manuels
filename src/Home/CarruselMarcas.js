import React,{useRef,useEffect} from "react"
import "./CarruselMarcas.css"

function CarruselMarcas(){
    const Imagenes =["../assets/Carrusel1.webp","../assets/Carrusel2.webp","../assets/Carrusel3.webp"]
    const Large = Imagenes.length-1
    console.log("Large:",Large)
    const SlidesContainer = useRef(null)
    const IndexContainer = useRef(null)
    var Index = 0
    useEffect(() => {
        IndexContainer.current.children[Index].style.backgroundColor="white"
        IndexContainer.current.children[Index].style.opacity="100%"
        // eslint-disable-next-line
    }, []);
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
            /*LA LOGICA PARA EL INDEX DEL CARRUSEL*/
            Index = Index +1
            console.log("Index",Index)
            const IndexElements = document.querySelectorAll(".Index-Bar")
            if(Index>=0 && Index<=Large){
                IndexElements.forEach((cadaBarra , i) => {
                    let posicion = i
                    IndexElements[posicion].style.backgroundColor="gray"
                    IndexElements[posicion].style.opacity="20%"
                    if (Index === i) {
                        IndexElements[Index].style.backgroundColor="white"
                        IndexElements[Index].style.opacity="100%"
                        console.log("Posiicion",i)
                    }
                });
            }else{
                IndexElements.forEach((cadaBarra , i) => {
                    Index = 0
                    let posicion = i
                    IndexElements[posicion].style.backgroundColor="gray"
                    IndexElements[posicion].style.opacity="20%"
                    if (Index === i) {
                        IndexElements[Index].style.backgroundColor="white"
                        IndexElements[Index].style.opacity="100%"
                        console.log("Posiicion",i)
                    }
                });
            }
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
       Index = Index -1
        console.log("Index",Index)
        const IndexElements = document.querySelectorAll(".Index-Bar")
        if(Index>=0 && Index<=Large){
            IndexElements.forEach((cadaBarra , i) => {
                let posicion = i
                IndexElements[posicion].style.backgroundColor="gray"
                IndexElements[posicion].style.opacity="20%"
                if (Index === i) {
                    IndexElements[Index].style.backgroundColor="white"
                    IndexElements[Index].style.opacity="100%"
                    console.log("Posiicion",i)
                }
            });
        }else{
            IndexElements.forEach((cadaBarra,i) =>{
                Index = 2
                let posicion = i
                IndexElements[posicion].style.backgroundColor="gray"
                IndexElements[posicion].style.opacity="20%"
                if (Index === i) {
                    IndexElements[Index].style.backgroundColor="white"
                    IndexElements[Index].style.opacity="100%"
                    console.log("Posiicion",i)
                }
            });
        }
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
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="white" class="bi bi-chevron-compact-left" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M9.224 1.553a.5.5 0 0 1 .223.67L6.56 8l2.888 5.776a.5.5 0 1 1-.894.448l-3-6a.5.5 0 0 1 0-.448l3-6a.5.5 0 0 1 .67-.223z"/>
                        </svg>
                    </button>
                    <button className="ControllerButtonRight" onClick={foward}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="white" class="bi bi-chevron-compact-right" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M6.776 1.553a.5.5 0 0 1 .671.223l3 6a.5.5 0 0 1 0 .448l-3 6a.5.5 0 1 1-.894-.448L9.44 8 6.553 2.224a.5.5 0 0 1 .223-.671z"/>
                        </svg>
                    </button>
                </div>
            </div>
            <div className="IndexContainer" ref={IndexContainer}>
                {Imagenes.map( indexBar => <span className="Index-Bar"></span>)}
            </div>
        </div>
    )
}
export default CarruselMarcas;