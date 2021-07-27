import React from "react"
import "./Gift.css"


function Gift() {




    return(

        <div className="ContainerPadreGift">
            <div className="SubContainerGift">
                <div className="ContainerImgGift">
                    <img className="ImgGift" src="./assets/iconoc7.png" />
                </div>
                <div className="ContainerGiftTextos">
                    <h1 className="GiftTexto1">Giftcards de Experiencias</h1>
                    <h6 className="GiftTexto2">
                        ¿Sabes que podés regalar un taller o clases personalizadas? 
                        Dejame tu contacto para más información
                    </h6>
                </div>
                <div className="ContainerButtonGift">
                    <button className="ButtonGift">ME INTERESA</button>
                </div>
            </div>
        </div>
    )
    
}
export default Gift;