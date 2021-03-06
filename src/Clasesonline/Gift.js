import React from "react"
import "./Gift.css"
function Gift() {
    return (
        <div className="ContainerPadreGift">
            <div className="SubContainerGift">
                <div className="ContainerImgGift">
                    <img alt="img" className="ImgGift" src="./assets/iconoc7.webp" />
                </div>
                <div className="ContainerGiftTextos">
                    <h1 className="GiftTexto1">Giftcards de Experiencias</h1>
                    <h6 className="GiftTexto2">
                        ¿Sabes que podés regalar un taller o clases personalizadas?
                        Dejame tu contacto para más información
                    </h6>
                </div>
                <div className="ContainerButtonGift">
                    <a className="ButtonGift" rel="noreferrer" href="https://api.whatsapp.com/send?phone=5491140759773&text=Hola Manuels! Quiero saber mas sobre las giftcards :)" target="_blank">
                      ME INTERESA
                    </a>
                </div>
            </div>
        </div>
    )
}
export default Gift;