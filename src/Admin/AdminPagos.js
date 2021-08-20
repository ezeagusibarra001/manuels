import React, { useState, useEffect } from "react"
import Layout from "../Layout";
import Nav from 'react-bootstrap/Nav'
import { Link } from "react-router-dom"
import Table from 'react-bootstrap/Table'
import "./Admin.css"
import { useHome } from '../context/home-context'
import clienteAxios from '../config/clienteAxios'
import { useHistory } from "react-router-dom"
import ModalVoucher from './Modals/AdminPagos/ModalVoucher'
function AdminPagos() {
    const history = useHistory()
    const { axiosConfig, imagenes} = useHome()
    /*console.log("payments", payments)*/
    const [showVoucher, setShowVoucher] = useState(false)
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
              history.push("/")
              window.location.reload(true)
        });
    };
    const alta = async (payment) => {
        await clienteAxios
            .put(`payments/accept/${payment}`, {}, axiosConfig)
            .then((res) => {
                console.log(res.data);
                obtenerPayments()
            })
            .catch((err) => {
                console.log("error put", err);
                console.log(payment)
                console.log(axiosConfig)

            });
    };
    const baja = () => {
        console.log("baja")
    }
    const voucherCheck = (image) => {
        setShowVoucher(true)
        setCurrentVoucher(image)
        console.log(image)
    }
    console.log("currentVoucher", currentVoucher)
    return (

        <Layout>
            <div className="BigDiv">
                <div className="SideBar">
                    <Nav className="flex-column">
                        <Nav.Link><Link to="/AdminClases" >Clases</Link></Nav.Link>
                        <Nav.Link><Link to="/AdminBlog" >Blog</Link></Nav.Link>
                        <Nav.Link><Link to="/AdminReseñas" >Reseñas</Link></Nav.Link>
                        <Nav.Link><Link to="/AdminPagos" >Pagos</Link></Nav.Link>
                    </Nav>
                </div>
                <div className="Manage">
                    <Table striped bordered hover size="sm">
                        <thead>
                            <tr>
                                <th>N° Orden</th>
                                <th>Nombre</th>
                                <th>Apellido</th>
                                <th>Clase</th>
                                <th>Estado</th>
                                <th>Comprobante</th>
                                <th></th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {payments.map((p) => (
                                <tr>
                                    <td>{p.idPayment}</td>
                                    <td>{p.name}</td>
                                    <td>{p.lastname}</td>
                                    <td>{p.lesson.title}</td>
                                    <td>{p.payment.toString()}</td>
                                    <td onClick={()=>voucherCheck(p.image)}><img alt="img" className="imagenCheckout" src={`data:${p.image.type};base64,${p.image.bytes}`} /></td>
                                    <td onClick={() => alta(p.idPayment)}><img alt="img" src={`data:${imagenes[19].type};base64,${imagenes[19].bytes}`} />  </td>
                                    <td onClick={() => baja()}><img alt="img" src={`data:${imagenes[20].type};base64,${imagenes[20].bytes}`} />  </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </div>
            </div>
            <ModalVoucher
                showVoucher={showVoucher}
                setShowVoucher={setShowVoucher}
                currentVoucher={currentVoucher}
            />
        </Layout>
    )

}
export default AdminPagos;