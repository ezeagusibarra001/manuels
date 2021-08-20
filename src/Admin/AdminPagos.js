import React, { useState, useEffect } from "react"
import Layout from "../Layout";
import Nav from 'react-bootstrap/Nav'
import { Link } from "react-router-dom"
import Table from 'react-bootstrap/Table'
import "./Admin.css"
import { useHome } from '../context/home-context'
import clienteAxios from '../config/clienteAxios'


function AdminPagos() {
    const { axiosConfig } = useHome()
    /*console.log("payments", payments)*/
    //PAYMENTS API
    const [payments, setPayments] = useState([]);
    useEffect(() => {
        obtenerPayments();
    }, []);
    const obtenerPayments = async () => {
        await clienteAxios.get("/payments", axiosConfig).then((res) => {
            setPayments(res.data);
            console.log("anda", res.data);
        }).catch((error) => {
            alert(error)
        });
    };
    console.log("payments", payments)
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
                                    <td>{p.image.idImage}</td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </div>
            </div>
        </Layout>
    )

}
export default AdminPagos;