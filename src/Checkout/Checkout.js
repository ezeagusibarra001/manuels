import React, { useState, useEffect } from "react";
import Layout from "../Layout";
import CheckOutModal from "./CheckOutModal";
import Modalguide from "./Modalguide";
import Button from 'react-bootstrap/Button'
import "./Checkout.css"

import { useHome } from '../context/home-context'
import axios from 'axios'

function Checkout(props) {
    const { currentClase } = useHome()
    /*-----------------------MODAL PARA CONFIRMAR INSCRIPCION--------------------- */
    const [show, setShow] = useState(false);
    const [check, setCheck] = useState(false)
    const handleClose = () => {
        setShow(false);
    }
    const handleSubmit = () => {
        alert("FUNCIONA")
        setShow(false);
    }
    /*-----------------------------------------------------------------------------*/
    /*-----------------------MODAL GUIDE-------------------------------------------*/
    const [show2, setShow2] = useState(false);
    const handleClose2 = () => {
        setShow2(false);
    }
    useEffect(() => {
        setShow2(true)
    }, []);
    const checked = () => {
        setCheck(!check)
        console.log(check)
    }
    /*-------------------------------POST IMAGE----------------------------------------*/
    const [file, setFile] = useState({
        file: null
    })

    const handleFile = (e) => {
        let file = e.target.files[0]
        setFile({ file: file })
    }
    const handleUpload = (e) => {
        let image = file.file;

        let formdata = new FormData();

        formdata.append('image', image)

        axios({
            url: `http://localhost:8080/api/images`,
            method: "POST",
            data: formdata
        }).then((res) => {
            console.log(res.data)
        }).catch((err) => {
            console.log(err)
        })
    };

    return (
        <Layout >
            <div className="Containercheckout">
                <form className="ContainerFormcheckout" >
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
                    <h1 className="CheckoutB">DU: 34623732</h1>
                    <h1 className="CheckoutB">CTA: 4017201-4 306-7</h1>
                    <h1 className="CheckoutB">CBU: 0070306030004017201477</h1>
                    <h1 className="CheckoutB">CUIL: 27346237320</h1>
                    <h1 className="CheckoutB">ALIAS: LARGO.ALCE.PAMPA</h1>

                    <h1 className="CheckoutSubtitleM">Mercado Pago:</h1>
                    <h1 className="CheckoutinputM"> Inscripción Vía {check === false ?
                        <a target="_blank" rel="noreferrer" href={currentClase.link} className="CheckoutLinkM"> Mercado Pago </a>
                        : <a target="_blank" rel="noreferrer" href={currentClase.link1} className="CheckoutLinkM"> Mercado Pago </a>} </h1>
                    <div className="CheckoutinputCheck">
                        <label className="CheckoutLabel">Abonar con seña</label>
                        <input type="checkbox" className="check" onChange={checked}/>
                    </div>

                    <h1 className="CheckoutComprobante">ADJUNTAR COMPROBANTE :</h1>
                    <input
                        className="CheckoutinputComprobante"
                        type="file"
                        name="file"
                        onChange={(e) => handleFile(e)}
                    />

                    <Button className="CheckoutButton" type="button" onClick={(e) => handleUpload(e)}> Confirmar </Button>
                </form>
            </div>
            <CheckOutModal show={show} handleClose={handleClose} handleSubmit={handleSubmit} />
            <Modalguide show2={show2} handleClose2={handleClose2} />
        </Layout>
    )

}
export default Checkout;