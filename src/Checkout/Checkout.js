import React, { useState, useEffect} from "react";
import Layout from "../Layout";
import CheckOutModal from "./CheckOutModal";
import Modalguide from "./Modalguide";
import Button from 'react-bootstrap/Button'
import "./Checkout.css"
/*import { useHistory } from "react-router-dom"*/


function Checkout(props) {
/*-----------------------MODAL PARA CONFIRMAR INSCRIPCION--------------------- */
    const [show, setShow] = useState(false);
    const handleShow = () =>{
        setShow(true)
    } 
    const handleClose = () => {
        setShow(false);
    }
    const handleSubmit=()=>{
        alert("FUNCIONA")
        setShow(false);
     }
/*-----------------------------------------------------------------------------*/
/*-----------------------MODAL GUIDE-------------------------------------------*/
    const [show2, setShow2] = useState(false);
    const handleShow2 = () =>{
        setShow2(true)
    } 
    const handleClose2 = () => {
        setShow2(false);
    }
    useEffect(() => {
        setShow2(true)
    }, []);
/*-----------------------------------------------------------------------*/
    const Link="https://developer.mozilla.org/es/docs/Web/HTML/Element/select"
    return(
        <Layout >
        <div className="Containercheckout">
            <form className="ContainerFormcheckout" onSubmit={handleSubmit}>
                <h1 className="Checkouttitle">Completar los siguientes datos:</h1>
                <input
                className="Checkoutinput" 
                type="text"
                name="name"
                placeholder="Nombre y Apellido"
                />

                <input
                className="Checkoutinput"
                type="text"
                name="dni"
                placeholder="DNI"
                />

                <input
                className="Checkoutinput" 
                type="text"
                 name="phone"
                placeholder="Telefono"
                />

                <input
                className="Checkoutinput" 
                type="e-mail"
                 name="mail"
                placeholder="E-mail"
                />
                 
                <h1 className="Checkouttitle">Medios de Pago:</h1>

                <h1 className="CheckoutSubtitleB">Transferencia Bancaria: B.GALICIA</h1>
                <h1  className="CheckoutB">DU: 34623732</h1>
                <h1  className="CheckoutB">CTA: 4017201-4 306-7</h1>
                <h1  className="CheckoutB">CBU: 0070306030004017201477</h1>
                <h1  className="CheckoutB">CUIL: 27346237320</h1>
                <h1  className="CheckoutB">ALIAS: LARGO.ALCE.PAMPA</h1>

                <h1 className="CheckoutSubtitleM">Mercado Pago:</h1>
                <h1 className="CheckoutinputM"> Inscripción Vía <a target="_blank" href={Link} className="CheckoutLinkM"> Mercado Pago </a> </h1>
                

                <h1 className="CheckoutComprobante">ADJUNTAR COMPROBANTE :</h1>
                <input className="CheckoutinputComprobante"
                type="file"
                />
                <Button className="CheckoutButton" onClick={handleShow}> Confirmar </Button>
            </form>
        </div>
        <CheckOutModal show={show} handleClose={handleClose} handleSubmit={handleSubmit} />
        <Modalguide show2={show2} handleClose2={handleClose2} />
        </Layout>
    )
    
}
export default Checkout;