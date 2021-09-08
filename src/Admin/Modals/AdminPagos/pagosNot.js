import React from 'react'
import Layout from "../../../Layout";
import Nav from 'react-bootstrap/Nav'
import { Link } from "react-router-dom"
import Table from 'react-bootstrap/Table'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import ModalVoucher from './ModalVoucher'
import moment from "moment";
function pagosNot(props) {
    const { payments, voucherCheck, alta, imagenes, baja, showVoucher, setShowVoucher, currentVoucher, setEstado, estado } = props;
    return (
        <Layout>
            <div className="BigDiv">
                <div className="SideBar">
                    <Nav className="flex-column">
                        <Nav.Link><Link to="/AdminClases" >Clases</Link></Nav.Link>
                        <Nav.Link><Link to="/AdminBlog" >Blog</Link></Nav.Link>
                        <Nav.Link><Link to="/AdminReseñas" >Reseñas</Link></Nav.Link>
                        <Nav.Link><Link to="/AdminPagos" >Pagos</Link></Nav.Link>
                        <Nav.Link><Link to="/AdminCode" >Descuentos</Link></Nav.Link>
                    </Nav>
                </div>
                <Navbar bg="primary" variant="dark">
                    <Container>
                        <Navbar.Brand onClick={() => setEstado(false)}>Pagos NO Aprobados</Navbar.Brand>
                        <Navbar.Brand onClick={() => setEstado(true)}>Pagos Aprobados</Navbar.Brand>
                    </Container>
                </Navbar>
                <div className="Manage">
                    {estado === false
                        ? <h1>Pagos NO aprobados</h1>
                        : <h1>Pagos aprobados</h1>}
                    <Table striped bordered hover size="sm">
                        <thead>
                            <tr>
                                <th>N° Orden</th>
                                <th>Nombre</th>
                                <th>Apellido</th>
                                <th>Clase</th>
                                <th>Estado</th>
                                <th>Comprobante</th>
                                <th>Telefono</th>
                                <th>F.Compra</th>
                                <th>F.Elegida</th>
                                <th></th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {payments.map((p) => (
                                p.payment.toString() === estado.toString()
                                    ? <tr>
                                        <td>{p.idPayment}</td>
                                        <td>{p.name}</td>
                                        <td>{p.lastname}</td>
                                        <td>{p.lesson.title}</td>
                                        {p.payment.toString() === "false"
                                            ? <td className="false">NO APR.</td>
                                            : <td className="true">APR</td>}
                                        <td onClick={() => voucherCheck(p.image)}><img alt="img" className="imagenCheckout" src={`data:${p.image.type};base64,${p.image.bytes}`} /></td>
                                        <td>{p.phone}</td>
                                        <td>{moment(p.date).format("DD/MM/YY")}</td>
                                        <td>{moment(p.dateLesson).format("DD/MM/YY")}</td>
                                        {p.payment.toString() === "false"
                                            ? <td onClick={() => alta(p.idPayment)}>
                                                {imagenes.filter((imagen) => imagen.name === "comprobado.png").map((imagen) => (
                                                    <img alt="img"
                                                        src={`data:${imagen.type};base64,${imagen.bytes}`}
                                                        className="imagenCheckout"
                                                    />
                                                ))}
                                            </td>
                                            : <td></td>}
                                        <td onClick={() => baja(p.idPayment)}>
                                            {imagenes.filter((imagen) => imagen.name === "basura (1).png").map((imagen) => (
                                                <img alt="img"
                                                    className="imagenCheckout"
                                                    src={`data:${imagen.type};base64,${imagen.bytes}`}
                                                />
                                            ))}
                                        </td>
                                    </tr>
                                    : <div></div>
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

export default pagosNot