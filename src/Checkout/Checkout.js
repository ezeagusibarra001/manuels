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
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Tooltip from 'react-bootstrap/Tooltip'
function Checkout() {
    const { addToast } = useToasts();
    const history = useHistory()
    const [isTrue, setIsTrue] = useState(false)
    const { currentClase, obtenerClases } = useHome()
    const [modalLoading, setModalLoading] = useState(false)
    const [currentPayment, setCurrentPayment] = useState({
        name: "",
        lastname: "",
        mail: "",
        phone: ""
    })
    const [discount, setDiscount] = useState({ code: "" })
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
        console.log(moment(e).format("YYYY/MM/DD"))
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
    const [fecha, setFecha] = useState({ date: "" })
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
            formdata.set('dateSelected', moment(fecha.date).format("YYYY/MM/DD"))

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
    const validation = () => {
        addToast("Elija una fecha porfavor", {
            appearance: "warning",
            autoDismiss: true,
        });
    }
    var ch = document.querySelector("#root > div > div > div.Containercheckout > form > div > span")
    setInterval(function () {
        if (ch) {
            ch.classList.add("checkBox")
        }

    }, 300);
    const renderTooltip = (props) => (
        <Tooltip id="button-tooltip" {...props}>
            Ingrese su codigo de descuento y haga click para aplicarlo
        </Tooltip>
    );
    const handleDiscount = (e) => {
        setDiscount({ [e.target.name]: e.target.value })
        //console.log(e.target.value)
    }
    const getDiscount = async () => {
        await clienteAxios
            .get(`/discounts/names/${discount.code}`)
            .then((res) => {
                console.log(res.data);
                setIsTrue(true)
                addToast("¡Promocion aplicada!", {
                    appearance: "success",
                    autoDismiss: true,
                });
            })
            .catch((err) => {
                console.log("error post", err);
                setIsTrue(false)
                addToast("Oh! Codigo Incorrecto", {
                    appearance: "warning",
                    autoDismiss: true,
                });
            });
    }
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
                    <h1 className="CheckoutinputM"> Inscripción Vía
                        {currentClase === undefined
                            ?
                            <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Ha ocurrido un error. Haz click aqui y vuelve a intentarlo.</Tooltip>}>
                                <span className="d-inline-block">
                                    <button onClick={home} className="CheckoutButton2">Link no disponible</button>
                                </span>
                            </OverlayTrigger>
                            : check === true ?
                                <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Link para abonar SOLO la seña parcial de la clase</Tooltip>}>
                                    <span className="d-inline-block">
                                        <a target="_blank" rel="noreferrer" href={currentClase.link1} className="CheckoutLinkP">  Mercado Pago </a>
                                    </span>
                                </OverlayTrigger>
                                : isTrue === true
                                    ?
                                    <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Link para abonar con codigo promocional aplicado</Tooltip>}>
                                        <span className="d-inline-block">
                                            <a target="_blank" rel="noreferrer" href={currentClase.discountLink} className="CheckoutLinkD"> Mercado Pago </a>
                                        </span>
                                    </OverlayTrigger>
                                    :
                                    <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Link para abonar la clase en su totalidad</Tooltip>}>
                                        <span className="d-inline-block">
                                            <a target="_blank" rel="noreferrer" href={currentClase.link} className="CheckoutLinkM"> Mercado Pago </a>
                                        </span>
                                    </OverlayTrigger>
                        } </h1>
                    <div className="CheckoutinputCheck">
                        {/*<label className="CheckoutLabel">Para abonar con seña click aqui </label>*/}
                        <Form.Check type="checkbox" onChange={checked} label="Para abonar con seña click aqui" className="checkBox CheckoutinputM" />
                    </div>
                    <div className="CheckoutinputCheck2">
                        {!x[0] ? <div></div> : <input type="radio" id="n1" name="date" onClick={() => handleDate(x[0].date)} />} <label className="CheckoutLabel2">{!x[0] ? <div></div> : moment(x[0].date).format("DD/MM")}</label>
                        {!x[1] ? <div></div> : <input name="date" type="radio" onClick={() => handleDate(x[1].date)} />} {!x[1] ? <div></div> : <label className="CheckoutLabel2">{moment(x[1].date).format("DD/MM")}</label>}
                    </div>
                    <div className="CheckoutinputCheck3">
                        <input
                            className="CheckoutDiscount"
                            type="text"
                            name="code"
                            placeholder="Codigo de Descuento"
                            maxLength="10"
                            onChange={handleDiscount}
                        />
                        <svg onClick={getDiscount} xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-wallet2 walletPiola" viewBox="0 0 16 16">
                            <path d="M12.136.326A1.5 1.5 0 0 1 14 1.78V3h.5A1.5 1.5 0 0 1 16 4.5v9a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 13.5v-9a1.5 1.5 0 0 1 1.432-1.499L12.136.326zM5.562 3H13V1.78a.5.5 0 0 0-.621-.484L5.562 3zM1.5 4a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-13z" />
                        </svg>
                        <OverlayTrigger
                            placement="right"
                            delay={{ show: 250, hide: 400 }}
                            overlay={renderTooltip}
                        >
                            <button className="fix"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-info-circle-fill x" viewBox="0 0 16 16">
                                <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" />
                            </svg></button>
                        </OverlayTrigger>
                    </div>
                    <h1 className="CheckoutComprobante">ADJUNTAR COMPROBANTE :</h1>
                    <input
                        className="CheckoutinputComprobante"
                        type="file"
                        name="file"
                        onChange={(e) => handleFile(e)}
                    />
                    {fecha.date === ""
                        ? <Button className="CheckoutButton" type="button" onClick={validation} > Confirmar </Button>
                        : <Button className="CheckoutButton" type="button" onClick={submit}> Confirmar </Button>}

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