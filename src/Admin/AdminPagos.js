import React, { useState, useEffect } from "react"
import "./Admin.css"
import { useHome } from '../context/home-context'
import clienteAxios from '../config/clienteAxios'
import { useToasts } from "react-toast-notifications";
import Pagos from "./Modals/AdminPagos/pagosNot";
import Layout from '../Layout'
function AdminPagos() {
    const { addToast } = useToasts();
    const { dominio, imagenes} = useHome()
    /*console.log("payments", payments)*/
    const [showVoucher, setShowVoucher] = useState(false)
    const [estado, setEstado] = useState("0") //EQUIVALE A UN FALSE
    const [loading, setLoading] = useState(true)
    const [currentVoucher, setCurrentVoucher] = useState()
    //PAYMENTS API
    const [payments, setPayments] = useState([]);
    useEffect(() => {
        obtenerPayments();
        // eslint-disable-next-line
    }, []);
    const obtenerPayments = async () => {
        await clienteAxios
        .get("/payments")
        .then((res) => {
            console.log("Payments:",res.data)
            setPayments(res.data);
            setLoading(false)
        }).catch((error) => {
            console.log(error)
            //history.push("/")
            //window.location.reload(true)
        });
    };
    const alta = async (payment) => {
        await clienteAxios
            .put(`payments/${payment.idPayment}`)
            .then((res) => {
                console.log(res.data);
                obtenerPayments()
                addToast("Pago aprobado", {
                    appearance: "success",
                    autoDismiss: true,
                });
            })
            .catch((err) => {
                console.log("error put", err);
                console.log(payment)
            });
    };
    const baja = async (payment) => {
        await clienteAxios
            .delete(`/payments/${payment.idPayment}`)
            .then((res) => {
                console.log(res.data);
                addToast("Baja exitosa", {
                    appearance: "success",
                    autoDismiss: true,
                });
                obtenerPayments()
            })
            .catch((err) => {
                console.log("error delete", err);
            });
    };
    const voucherCheck = (e) => {
        var imgV=document.createElement("img")
        imgV=e.target
        //imgV.src=e.target.src
        //imgV.alt=e.target.alt
        setShowVoucher(true)
        setCurrentVoucher(imgV)
        console.log(imgV)
    }
    console.log("currentVoucher", currentVoucher)
    if(window.innerWidth > 767){
        return (
            <Pagos
                payments={payments}
                voucherCheck={voucherCheck}
                alta={alta}
                imagenes={imagenes}
                baja={baja}
                showVoucher={showVoucher}
                setShowVoucher={setShowVoucher}
                currentVoucher={currentVoucher}
                estado={estado}
                setEstado={setEstado}
                loading={loading}
                setLoading={setLoading}
                dominio={dominio}
            />
        )
    }else{
       return <Layout><h1>This device is too small in order to use the admin pannel</h1></Layout>
    }
}
export default AdminPagos;