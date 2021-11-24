import React, { useState } from "react";
import "./CheckIn.css";
import { useToasts } from "react-toast-notifications";
import clienteAxios from '../config/clienteAxios'
function Step2(props) {
  const { addToast } = useToasts();
  const currentClase = props.currentClase;
  const setCurrentClase = props.setCurrentClase;
  //var PayPrice=currentClase[0].price
  const code = props.code;
  const [DescAplicado, setDescAplicado] = useState(false);
  /*----------------------MERCADO PAGO----------------------*/
  const MP = () => {
    /*---------------TRASLADA---------------*/
    const Slider = document.querySelector(".SliderContainer");
    Slider.style.transition = "2s ease-in-out";
    Slider.style.transform = "translateX(-66.66%)";
    /*---------------MARCA EL BUTTON---------------*/
    const Buttons = document.querySelectorAll(".ButtonOption");
    console.log("Buttons:", Buttons);
    Buttons.forEach((cadaButton, i) => {
      Buttons[i].style.backgroundColor = "#a06ab4";
      Buttons[i].style.color = "white";
      if (i === 1) {
        console.log("MP");
        Buttons[i].style.backgroundColor = "white";
        Buttons[i].style.color = "#a06ab4";
      }
    });
  };
  const AplyDesc = (e) => {
    let currentCode = document.querySelector(".CheckInInputDesc").value;
    console.log("CurrentDesc:", e.target.value);
    let DescValidation = code.some((x) => x.code === currentCode);
    console.log("DescValidation", DescValidation);
    if (DescValidation) {
      setDescAplicado(true);
      setCurrentClase({
        ...(currentClase[0].price =
          currentClase[0].price - currentClase[0].price * 0.2),
      });
      addToast(`Código aplicado, transferir: $${currentClase[0].price}`, {
        appearance: "success",
        autoDismiss: true,
      });
      console.log("PRECIO A PAGAR:", currentClase[0].price);
      console.log("currentClase:", currentClase[0]);
      const DescButton = document.querySelectorAll(".DescButton");
      DescButton.forEach((cadaButton, i) => {
        DescButton[i].style.backgroundColor = "#ffd743";
        DescButton[i].style.color = "#a06ab4";
        DescButton[i].style.border = "solid transparent";
      });
    } else {
      addToast("Código no valido", {
        appearance: "warning",
        autoDismiss: true,
      });
    }
  };
  //PRUEBA PUT
  const putDescuentos = async () => {
    let currentCode = document.querySelector(".CheckInInputDesc").value;
    await clienteAxios
        .put("/discounts",{code:currentCode})
        .then((res) => {
            console.log(res.data);
            if(res.data.res === "existe"){
                alert("existe")
            }else{
                alert("no")
            }
        })
        .catch((err) => {
            console.log("error put", err);
            console.log(currentCode)
        });
};
  /*----------------------TRANSFERENCIA BANCARIA----------------------*/
  const TB = () => {
    /*---------------TRASLADA---------------*/
    const Slider = document.querySelector(".SliderContainer");
    Slider.style.transition = "2s ease-in-out";
    Slider.style.transform = "translateX(0%)";
    /*---------------MARCA EL BUTTON---------------*/
    const Buttons = document.querySelectorAll(".ButtonOption");
    console.log("Buttons:", Buttons);
    Buttons.forEach((cadaButton, i) => {
      Buttons[i].style.backgroundColor = "#a06ab4";
      Buttons[i].style.color = "white";
      if (i === 0) {
        console.log("TB");
        Buttons[i].style.backgroundColor = "white";
        Buttons[i].style.color = "#a06ab4";
      }
    });
  };
  return (
    <div className="ContainerStep2">
      <h2 className="Step2Title">Paso 2°: Elija un método de pago</h2>
      <div className="ContainerOptions">
        <button className="ButtonOption" onClick={TB}>
          Transf.Bancaria{" "}
        </button>
        <button className="ButtonOption" onClick={MP}>
          Mercado Pago{" "}
        </button>
      </div>
      <div className="CarruselCheckIn">
        <div className="SliderContainer">
          <div className="SlideTB">
            <p className="TextAbonar">
              {"Transferir:$" + currentClase[0].price}
            </p>
            <table className="TableTB">
              <tr>
                <td>Banco:</td>
                <td>B.GALICIA</td>
              </tr>
              <tr>
                <td>CTA:</td>
                <td>4017201-4 306-7</td>
              </tr>
              <tr>
                <td>CBU:</td>
                <td>0070306030004017201477</td>
              </tr>
              <tr>
                <td>CUIL:</td>
                <td>27346237320</td>
              </tr>
            </table>
          </div>
          <div className="SlideMedio">
            <h1>Inscripciones</h1>
            <h1>Abiertas</h1>
          </div>
          <div className="SlideMP">
            <p className="TextAbonar">
              {"Transferir:$" + currentClase[0].price}
            </p>
            <p className="TextDesc">Si tenes un código ¡aplicalo!</p>
            <div className="DescContainer">
              <input
                className="CheckInInputDesc"
                placeholder="código"
                name="código"
              />
              {DescAplicado ? (
                <button className="DescButton">Confirmar</button>
              ) : (
                <button className="DescButton" onClick={putDescuentos}>
                  Confirmar
                </button>
              )}
            </div>
            <p className="TextLinks">
              ¿Deseas pagar inscripción completa o reservar?
            </p>
            <div className="LinksContainer">
              <a
                className="ButtonLink"
                href={currentClase.link1}
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                Reserva{" "}
              </a>
              {DescAplicado ? (
                <a
                  className="ButtonLink"
                  href={currentClase.discountLink}
                  target="_blank"
                  rel="noreferrer"
                >
                  {" "}
                  Completa{" "}
                </a>
              ) : (
                <a
                  className="ButtonLink"
                  href={currentClase.link}
                  target="_blank"
                  rel="noreferrer"
                >
                  {" "}
                  Completa{" "}
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Step2;
