import React, { useState, useEffect } from "react";
import Layout from "../Layout";
import CheckOutModal from "./CheckOutModal";
import Modalguide from "./Modalguide";
import Button from 'react-bootstrap/Button'
import "./Checkout.css"
import Form from 'react-bootstrap/Form'
import { useHome } from '../context/home-context'
import clienteAxios from '../config/clienteAxios'
import { useHistory } from "react-router-dom"
import { useToasts } from "react-toast-notifications";
import ModalLoading from '../Checkout/ModalLoading'
import moment from "moment";
function Checkout() {
    const { addToast } = useToasts();
    const history = useHistory()
    const { currentClase, obtenerClases } = useHome()
    const [modalLoading, setModalLoading] = useState(false)
    const [fecha, setFecha] = useState({ date: "" })
    const [currentPayment, setCurrentPayment] = useState({
        name: "",
        lastname: "",
        mail: "",
        phone: ""
    })
    const home = () => {
        history.push("/")
    }
    /*-----------------------MODAL PARA CONFIRMAR INSCRIPCION--------------------- */
    const [show, setShow] = useState(false);
    const [check, setCheck] = useState(false)
    const handleClose = () => {
        setShow(false);
    }
    const handleSubmit = () => {
        setShow(false);
    }
    /*-----------------------------------------------------------------------------*/
    /*-----------------------MODAL GUIDE-------------------------------------------*/
    const [show2, setShow2] = useState(false);
    const handleClose2 = () => {
        setShow2(false);
        window.scrollTo(0, 0)
    }
    useEffect(() => {
        setShow2(true)
    }, []);
    const checked = () => {
        setCheck(!check)
        console.log(check)
    }
    // eslint-disable-next-line
    const [Styles, setStyles] = useState()
    /*--------------------------CHANGE---------------------- */
    const handleChange = (e) => {
        setCurrentPayment({ ...currentPayment, [e.target.name]: e.target.value, })
        //const max = e.target.maxLength
        if (0 < (e.target.value).length && (e.target.value).length < e.target.maxLength) {
            setStyles({ outlineColor: "green" })
        }
        else {
            setStyles({ outlineColor: "red" })
        }
    }
    const handleDate = (e) => {
        console.log(e)
        setFecha({ date: e })
    }
    /*-------------------------------POST IMAGE----------------------------------------*/
    const [file, setFile] = useState({
        file: null
    })
    const x = [];
    if (currentClase !== undefined) {
        const dates = currentClase.dates;
        dates.forEach(d => { x.push(d) })
    }

    const handleFile = (e) => {
        let file = e.target.files[0]
        setFile({ file: file })
    }
    const submit = async () => {
        setModalLoading(true)
        let image = file.file;
        let formdata = new FormData();
        if (image !== null) {
            formdata.set('file', image)
        }
        formdata.set('name', currentPayment.name)
        formdata.set('lastname', currentPayment.lastname)
        formdata.set('email', currentPayment.email)
        if (currentClase !== undefined) {
            formdata.set('lesson', currentClase.idLesson)
            formdata.set('date', fecha.date)
        }
        formdata.set('phone', currentPayment.phone)
        await clienteAxios
            .post("/payments", formdata)
            .then((res) => {
                console.log(res.data);
                addToast("¡Gracias por tu reserva!", {
                    appearance: "success",
                    autoDismiss: true,
                });
                setModalLoading(false)
                obtenerClases()
                setTimeout(function () { history.push("/ClasesOnline") }, 2000);
            })
            .catch((err) => {
                console.log("error post", err);
                addToast("Oh! Algo no salio como lo esperabamos.", {
                    appearance: "error",
                    autoDismiss: true,
                });
                setModalLoading(false)
                setTimeout(function () { history.push("/ClasesOnline") }, 2000);
            });
    };

    var ch = document.querySelector("#root > div > div > div.Containercheckout > form > div > span")
    setInterval(function () {
        if (ch) {
            ch.classList.add("checkBox")
        }
    }, 300);
    return (
        <Layout >
            <div className="Containercheckout">
                <form className="ContainerFormcheckout" >
                    <h1 className="Checkouttitle">Completar los siguientes datos:</h1>
                    <input
                        className="Checkoutinput"
                        type="text"
                        name="name"
                        placeholder="Nombre"
                        style={Styles}
                        maxLength="15"
                        onChange={handleChange}
                    />

                    <input
                        className="Checkoutinput"
                        type="text"
                        name="lastname"
                        placeholder="Apellido"
                        style={Styles}
                        maxLength="15"
                        onChange={handleChange}
                    />

                    <input
                        className="Checkoutinput"
                        type="number"
                        name="phone"
                        placeholder="Telefono"
                        style={Styles}
                        onChange={handleChange}
                        maxLength="15"
                    />

                    <input
                        className="Checkoutinput"
                        type="e-mail"
                        name="email"
                        placeholder="E-mail"
                        style={Styles}
                        maxLength="30"
                        onChange={handleChange}
                    />

                    <h1 className="Checkouttitle">Medios de Pago:</h1>

                    <h1 className="CheckoutSubtitleB">Transferencia Bancaria: B.GALICIA</h1>
                    <h1 className="CheckoutB">DU: 34623732</h1>
                    <h1 className="CheckoutB">CTA: 4017201-4 306-7</h1>
                    <h1 className="CheckoutB">CBU: 0070306030004017201477</h1>
                    <h1 className="CheckoutB">CUIL: 27346237320</h1>
                    <h1 className="CheckoutB">ALIAS: LARGO.ALCE.PAMPA</h1>

                    <h1 className="CheckoutSubtitleM">Mercado Pago:</h1>
                    <h1 className="CheckoutinputM"> Inscripción Vía {currentClase === undefined
                        ? <button onClick={home} className="CheckoutButton2">Link no disponible</button>
                        : check === false ?
                            <a target="_blank" rel="noreferrer" href={currentClase.link} className="CheckoutLinkM"> Mercado Pago </a>
                            : <a target="_blank" rel="noreferrer" href={currentClase.link1} className="CheckoutLinkP"> Mercado Pago </a>} </h1>
                    <div className="CheckoutinputCheck">
                        {/*<label className="CheckoutLabel">Para abonar con seña click aqui </label>*/}
                        <Form.Check type="checkbox" onChange={checked} label="Para abonar con seña click aqui" className="checkBox CheckoutinputM" />
                    </div>
                    <div className="CheckoutinputCheck2">
                        {!x[0] ? <div></div> :<input type="radio" name="date" onClick={() => handleDate(x[0].date)} />} <label className="CheckoutLabel2">{!x[0] ? <div></div> : moment(x[0].date).format("DD/MM")}</label>
                        {!x[1] ? <div></div> : <input name="date" type="radio" onClick={() => handleDate(x[1].date)} />} {!x[1] ? <div></div> : <label className="CheckoutLabel2">{moment(x[1].date).format("DD/MM")}</label>}

                    </div>

                    <h1 className="CheckoutComprobante">ADJUNTAR COMPROBANTE :</h1>
                    <input
                        className="CheckoutinputComprobante"
                        type="file"
                        name="file"
                        onChange={(e) => handleFile(e)}
                    />

                    <Button className="CheckoutButton" type="button" onClick={submit}> Confirmar </Button>
                </form>
            </div>
            <CheckOutModal show={show} handleClose={handleClose} handleSubmit={handleSubmit} />
            <Modalguide show2={show2} handleClose2={handleClose2} />
            <ModalLoading
                modalLoading={modalLoading}
                setModalLoading={setModalLoading}
            />
        </Layout>
    )

}
export default Checkout;