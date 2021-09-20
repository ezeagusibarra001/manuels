import React from "react";
import "./DesktopServicios.css";
import { useHistory } from "react-router-dom"
function DesktopServicios() {

  const history = useHistory()
  return (
      <div className="ContainerPadreServiciosDesktop">

        <div className="ContainerTituloServiciosDesktop">
          <h1 className="TituloServiciosDesktop">SERVICIOS</h1>
        </div>

        <div className="ContainerCard1Desktop">

          <div className="Card1Desktop">
            <div className="ContainerIconoDesktop"> 
              <img alt="img" className="IconoDesktop1" src="../assets/icono1.webp"></img>
            </div>
            <div className="ContainerTextosDesktop"> 
              <p className="Texto1Card1">Locuciones comerciales castellano neutro y rioplatense</p>
              <p className="Texto2Card1">Grabaciones en homestudio propio</p>
              <p className="Texto3Card1">Conducción de eventos: Radio , Podcast y TV </p>
            </div>
            <div className="ContainerButtonCardDesktop">
              <button className="ButtonCardDesktop" onClick={()=>window.location.href="https://www.instagram.com/manuels.locucion/?utm_medium=copy_link"}><b>¡CONTACTATE!</b></button>
            </div>

          </div>
        </div>

        <div className="ContainerCard2Desktop">

          <div className="Card2Desktop">
            <div className="ContainerIconoDesktop">
              <img alt="img" className="IconoDesktop2" src="../assets/icono2.webp"></img>
            </div>
            <div className="ContainerTextosDesktop"> 
              <p className="Texto1Card2">Talleres grupales de locución , neutro ,oratoria , radio , podcast.</p>
              <p className="Texto2Card2"> Clases personalizadas de:</p>
              <p className="Texto3Card2">
                Locución,
                Oratoria,
                Radio,
                Neutro y Podcast
              </p>
            </div>
            <div className="ContainerButtonCardDesktop"> 
              <button className="ButtonCardDesktop" onClick={()=>history.push("/ClasesOnline")}><b>VER MÁS</b></button>
            </div>

          </div>
        </div>

        <div className="ContainerCard3Desktop">

          <div className="Card3Desktop">
            <div className="ContainerIconoDesktop">
              <img alt="img" className="IconoDesktop3" src="../assets/icono3.webp"></img>
            </div>
            <div className="ContainerTextosDesktop"> 
              <p className="Texto1Card3">Talleres para empresas: Locucion , Radioteatro , radio y Podcast </p>
              <p className="Texto2Card3"> work shop para empresas: Locución , Oratoria , Neutro.</p>
              <p className="Texto3Card3"> Asesorias Únicas</p>
            </div>
            <div className="ContainerButtonCardDesktop"> 
              <button className="ButtonCardDesktop" onClick={()=>history.push("/ClasesOnline")}><b>VER MÁS</b></button>
            </div>

          </div>
        </div>

        

      </div>
  )
}
export default DesktopServicios;
