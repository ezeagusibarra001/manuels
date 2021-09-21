import React, { useState, useEffect } from "react"
import "./Admin.css"
import { useHome } from '../context/home-context'
import clienteAxios from '../config/clienteAxios'
import { useHistory } from "react-router-dom"
import { useToasts } from "react-toast-notifications";
import Pagos from "./Modals/AdminPagos/pagosNot";
import Layout from '../Layout'
function AdminPagos() {
    const { addToast } = useToasts();
    const history = useHistory()
    const { axiosConfig, imagenes} = useHome()
    /*console.log("payments", payments)*/
    const [showVoucher, setShowVoucher] = useState(false)
    const [estado, setEstado] = useState(false)
    const [currentVoucher, setCurrentVoucher] = useState()
    //PAYMENTS API
    const [payments, setPayments] = useState([]);
    useEffect(() => {
        obtenerPayments();
        // eslint-disable-next-line
    }, []);
    const obtenerPayments = async () => {
        await clienteAxios.get("/payments", axiosConfig).then((res) => {
            setPayments(res.data);
            console.log("anda", res.data);
        }).catch((error) => {
            console.log(error)
           // history.push("/")
           // window.location.reload(true)
        });
    };
    const alta = async (payment) => {
        await clienteAxios
            .put(`payments/accept/${payment}`, {}, axiosConfig)
            .then((res) => {
                console.log(res.data);
                obtenerPayments()
                addToast("Alta exitosa", {
                    appearance: "success",
                    autoDismiss: true,
                });
            })
            .catch((err) => {
                console.log("error put", err);
                console.log(payment)
                console.log(axiosConfig)

            });
    };
    const baja = async (payment) => {
        await clienteAxios
            .put(`payments/decline/${payment}`, {}, axiosConfig)
            .then((res) => {
                console.log(res.data);
                obtenerPayments()
                addToast("Baja exitosa", {
                    appearance: "success",
                    autoDismiss: true,
                });
            })
            .catch((err) => {
                console.log("error put", err);
                console.log(payment)
                console.log(axiosConfig)

            });
    };
    const voucherCheck = (image) => {
        setShowVoucher(true)
        setCurrentVoucher(image)
        console.log(image)
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
            />
        )
    }else{
       return <Layout><h1>This device is too small in order to use the admin pannel</h1></Layout>
    }


}
export default AdminPagos;