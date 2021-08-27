import React from 'react'

function RenderCheck(props) {
    const {Layout, Styles, handleChange, x, currentClase, Form, home, check, checked, handleDate, handleFile
            , moment, fecha, Button, validation, submit, CheckOutModal, show, show2, handleClose, handleClose2, 
            modalLoading, handleSubmit, Modalguide,ModalLoading, setModalLoading} = props;
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
                        {!x[0] ? <div></div> : <input type="radio" id="n1" name="date" onClick={() => handleDate(x[0].date)} />} <label className="CheckoutLabel2">{!x[0] ? <div></div> : moment(x[0].date).format("DD/MM")}</label>
                        {!x[1] ? <div></div> : <input name="date" type="radio" onClick={() => handleDate(x[1].date)} />} {!x[1] ? <div></div> : <label className="CheckoutLabel2">{moment(x[1].date).format("DD/MM")}</label>}
                    </div>
                    <div className="CheckoutinputCheck3">
                        <input
                            className="CheckoutDiscount"
                            type="text"
                            name="discount"
                            placeholder="Codigo de Descuento"
                            maxLength="20"
                            onChange={handleChange}
                        />
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-wallet2" viewBox="0 0 16 16">
                            <path d="M12.136.326A1.5 1.5 0 0 1 14 1.78V3h.5A1.5 1.5 0 0 1 16 4.5v9a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 13.5v-9a1.5 1.5 0 0 1 1.432-1.499L12.136.326zM5.562 3H13V1.78a.5.5 0 0 0-.621-.484L5.562 3zM1.5 4a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-13z" />
                        </svg>
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

export default RenderCheck
