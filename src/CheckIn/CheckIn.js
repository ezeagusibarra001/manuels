import React,{useState,useEffect} from "react"
import "./CheckIn.css"
import Layout from "../Layout";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Welcome from "./Welcome";
import Modalguide2 from "./Modalguide2";
import { useToasts } from "react-toast-notifications";
import { useHome   } from "../context/home-context";
import clienteAxios from '../config/clienteAxios'
function CheckIn(props){
    const { addToast } = useToasts();
    const [step,setStep]=useState(1)
    const [Icon1,setIcon1]=useState(false)
    const [Icon2,setIcon2]=useState(false)
    const [Icon3,setIcon3]=useState(false)
    const [DescAplicado, setDescAplicado]=useState(false);
    const [dateSelected, setDateSelected]=useState({date:""})
    const { currentClase,setCurrentClase,obtenerClases,CheckForm,setCheckForm,code} = useHome();
    const idLesson=props.match.params.idLesson //TOMO EL VALOR DE LA URL
    const obtenerClase = async () => {
        await clienteAxios.get("/lessons/"+idLesson)
        .then((res) => {
            setCurrentClase(res.data);
            console.log(res.data);
        })
        .catch((error) => {console.log(error)});
    };
    useEffect(() => {
        obtenerClase()
        //eslint-disable-next-line
    },[]);
    const NextStep=()=>{
        /*----------------------------STEP1----------------------------*/
        if(step===1){
            let form = [CheckForm.name,CheckForm.lastname,CheckForm.mail,CheckForm.phone]
            let step1FormFilled = form.every(x => x.length !== 0 )
            let emailIsNotvalid=true
            let phoneIsNotvalid=true
            console.log("STEP1 FORM FILLED:",step1FormFilled)
            const emailValidation=()=>{
                let emailInput=document.querySelectorAll(".CheckInInput")[3]
                // eslint-disable-next-line 
                let RegExpEmail=/^([\da-z_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/
                let email=emailInput.value
                console.log(emailInput)
                if(RegExpEmail.test(email)){
                    emailIsNotvalid=false
                    console.log("EMAIL IS NOT VALID",emailIsNotvalid)
                }
            }
            emailValidation()
            const phonelValidation=()=>{
                let phoneInput=document.querySelectorAll(".CheckInInput")[2]
                let RegExpPhone=/^\d{8,14}$/  ///^([\da-z_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/
                let phone=phoneInput.value
                console.log(phoneInput)
                if(RegExpPhone.test(phone)){
                    phoneIsNotvalid=false
                    console.log("PHONE IS NOT VALID:",phoneIsNotvalid)
                }
            }
            phonelValidation()
            if(step1FormFilled){
                if(phoneIsNotvalid){
                    addToast("Phone no valido",{appearance: "warning",autoDismiss: true,})
                }else if(emailIsNotvalid){
                    addToast("Email no valido",{appearance: "warning",autoDismiss: true,})
                }else{
                    setStep(step+1)
                    console.log("Step:",step)
                    const bar1 = document.querySelector(".Bar1")
                    bar1.style.transition="1s ease-in-out";
                    bar1.style.width="100%";
                    bar1.style.backgroundColor="#a06ab4"
                    console.log("FUNCIONA2")
                    const transition =()=>{
                    setIcon1(true)
                }
                bar1.addEventListener("transitionend",transition)
                }
            }else{
                addToast("Todos los campos son obligatorios",{appearance: "warning",autoDismiss: true,});
            }
        }
        /*----------------------------STEP2----------------------------*/
        if(step===2){
            setStep(step+1)
            console.log("Step:",step)
            const bar2 = document.querySelector(".Bar2")
            bar2.style.transition="1s ease-in-out";
            bar2.style.width="100%";
            bar2.style.backgroundColor="#a06ab4"
            const transition =()=>{
                setIcon2(true)
            }
            bar2.addEventListener("transitionend",transition)
        }
        /*----------------------------STEP4----------------------------*/
        if(step===4){window.location.href="https://manuels.com.ar/"}
    }
    const PreviusStep=()=>{
        if(step===2){
            setIcon1(false)
            setStep(step-1)
            console.log("Step:",step)
            const bar1 = document.querySelector(".Bar1")
            bar1.style.width="0%";
            bar1.style.transition="none";
        }
        if(step===3){
            setIcon2(false)
            setStep(step-1)
            console.log("Step:",step)
            const bar2 = document.querySelector(".Bar2")
            bar2.style.width="0%";
            bar2.style.transition="none";
        }
    }
    return (
        <Layout>
            <div className="CheckInComponent">
                <div className="ProgressBar">
                    <div className="Begining"></div>
                    <div className="ProgressStep1"><span className="Bar1"></span></div>
                    {
                        Icon1
                        ?<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="#a06ab4" class="bi bi-patch-check-fill" viewBox="0 0 16 16">
                            <path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01-.622-.636zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708z"/>
                         </svg>
                        :<div className="uno">1</div>
                    }
                    <div className="ProgressStep2"><span className="Bar2"></span></div>
                    {
                        Icon2
                        ?<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="#a06ab4" class="bi bi-patch-check-fill" viewBox="0 0 16 16">
                            <path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01-.622-.636zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708z"/>
                         </svg>
                        :<div className="dos">2</div>
                    }
                    <div className="ProgressStep3"><span className="Bar3"></span></div>
                    {
                        Icon3
                        ?<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="#a06ab4" class="bi bi-patch-check-fill" viewBox="0 0 16 16">
                            <path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01-.622-.636zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708z"/>
                         </svg>
                        :<div className="tres">3</div>
                    }
                </div>
                { step===1 && <Step1   setCheckForm={setCheckForm} CheckForm={CheckForm}                                                                                                                                              />}
                { step===2 && <Step2   currentClase={currentClase} setCurrentClase={setCurrentClase} code={code} DescAplicado={DescAplicado} setDescAplicado={setDescAplicado}                                                                                                           />}
                { step===3 && <Step3   currentClase={currentClase} CheckForm={CheckForm} obtenerClases={obtenerClases} step={step} setStep={setStep} setIcon3={setIcon3} dateSelected={dateSelected} setDateSelected={setDateSelected} DescAplicado={DescAplicado} setDescAplicado={setDescAplicado}  />}
                { step===4 && <Welcome currentClase={currentClase} CheckForm={CheckForm} dateSelected={dateSelected}                                                                                                                  />}
                <div className="ContainerButtonSteps">
                    {
                        step===1 
                        ?<button className="ButtonDesabled"                    >Atrás  </button>
                        :
                        <>
                        {
                            step===4
                            ?<button className="ButtonDesabled"                    >Atrás  </button>
                            :<button className="AtrásButton" onClick={PreviusStep} >Atrás  </button>
                        }
                        </>
                    }
                    {
                        step===3
                        ?<button className="ButtonDesabled"                    >Siguiente                       </button>
                        :<button className="SigueinteButton" onClick={NextStep}>{step===4?"Inicio":"Siguiente"} </button>
                    }
                   
                </div>
            </div>
            <Modalguide2/>
        </Layout>
    )
}
export default CheckIn;