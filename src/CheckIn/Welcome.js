import React from "react"
function Welcome(props){
    const CheckForm=props.CheckForm
    return(
        <div className="WelcomeContainer">
            <h4 className="WelcomeTittle">¡Inscripción Completada!</h4>
            <div className="ItemsW">
                <img alt="img" src="../assets/iconoc9.webp" className="WelcomeIconos"/>
                <p className="pW">Nuestro equipo se pondra en contacto a la brevedad</p>
            </div>
            <div className="ItemsW">
                <img alt="img" src="../assets/iconoc9.webp" className="WelcomeIconos"/>
                <p className="pW">Para mas información<a className="aW" href="https://www.instagram.com/manuels.locucion/?hl=es-la" target="_blank" rel="noreferrer"> ¡contactame!</a></p>
            </div>
            <div className="ItemsW">
                <img alt="img" src="../assets/iconoc9.webp" className="WelcomeIconos"/>
                <p className="pW">Bienvenido/a <b>{CheckForm.name}</b> exitos!</p>
            </div>
        </div>
    )
}
export default Welcome;
