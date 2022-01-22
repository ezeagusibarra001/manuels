import React from "react";
import "./CheckIn.css";
import { useToasts } from "react-toast-notifications";
import clienteAxios from "../config/clienteAxios";
function Step2(props) {
  const { addToast } = useToasts();
  const currentClase = props.currentClase;
  const { DescAplicado, setDescAplicado } = props;
  //const [payPrice,setPayPrice]=useState(currentClase[0].price);
  /*----------------------MERCADO PAGO----------------------*/
  const MP = () => {
    /*---------------TRASLADA---------------*/
    const Slider = document.querySelector(".SliderContainer");
    Slider.style.transition = "2s ease-in-out";
    Slider.style.transform = "translateX(-50%)";
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
  //PRUEBA PUT
  const putDescuentos = async () => {
    let currentCode = document.querySelector(".CheckInInputDesc").value;
    await clienteAxios
      .put("/discounts", { code: currentCode })
      .then((res) => {
        console.log(res.data);
        if (res.data.res === "existe") {
          setDescAplicado(true);
          const DescButton = document.querySelectorAll(".DescButton")[0];
          DescButton.style.backgroundColor = "#ffd743";
          DescButton.style.color = "#a06ab4";
          DescButton.style.border = "solid transparent";
          //setPayPrice(payPrice-payPrice*0.10)
          addToast(`¡Código aplicado!`, {
            appearance: "success",
            autoDismiss: true,
          });
          const ButtonLink = document.querySelectorAll(".ButtonLink")[0];
          ButtonLink.style.display = "none";
        } else {
          addToast("Código no valido", {
            appearance: "warning",
            autoDismiss: true,
          });
        }
      })
      .catch((err) => {
        console.log("error put", err);
        console.log(currentCode);
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
  const PP = () => {
    /*---------------TRASLADA---------------*/
    const Slider = document.querySelector(".SliderContainer");
    Slider.style.transition = "2s ease-in-out";
    Slider.style.transform = "translateX(-75%)";
    /*---------------MARCA EL BUTTON---------------*/
    const Buttons = document.querySelectorAll(".ButtonOption");
    console.log("Buttons:", Buttons);
    Buttons.forEach((cadaButton, i) => {
      Buttons[i].style.backgroundColor = "#a06ab4";
      Buttons[i].style.color = "white";
      if (i === 2) {
        console.log("PP");
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
          Transf.Bancaria
        </button>
        <button className="ButtonOption" onClick={MP}>
          Mercado Pago
        </button>
        <button className="ButtonOption" onClick={PP}>
          PayPal
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
                <td>ALIAS:</td>
                <td>LARGO.ALCE.PALMA</td>
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
            {DescAplicado === true ? (
              <p className="TextAbonar">
                {"Transferir:$" + currentClase[0].price*0.9}
              </p>
            ) : (
              <p className="TextAbonar">
                {"Transferir:$" + currentClase[0].price}
              </p>
            )}
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
                href={currentClase[0].link1}
                target="_blank"
                rel="noreferrer"
              >
                Reserva
              </a>
              {DescAplicado ? (
                <a
                  className="ButtonLink"
                  href={currentClase[0].descountLink}
                  target="_blank"
                  rel="noreferrer"
                >
                  Completa
                </a>
              ) : (
                <a
                  className="ButtonLink"
                  href={currentClase[0].link}
                  target="_blank"
                  rel="noreferrer"
                >
                  Completa
                </a>
              )}
            </div>
          </div>
          <div className="SlidePaypal">
            <h5>¿Desea pagar por Paypal?</h5>
            <h4>Transferir:{currentClase[0].dolar}</h4>
            <a
              className="ButtonLink"
              href={currentClase[0].linkDolar}
              target="_blank"
              rel="noreferrer"
            >
              Pagar
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Step2;
