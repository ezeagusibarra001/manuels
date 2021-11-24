import React from "react";
import Layout from "../../../Layout";
import "../../../Admin/Admin.css";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
import Table from "react-bootstrap/Table";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import ModalVoucher from "./ModalVoucher";
import dayjs from 'dayjs'
import Loading from "../../../Loading/Loading";
function pagosNot(props) {
  const {
    payments,
    voucherCheck,
    alta,
    baja,
    showVoucher,
    setShowVoucher,
    currentVoucher,
    setEstado,
    estado,
    loading,
    dominio,
  } = props;
  return (
    <Layout>
      <div className="BigDiv">
        <div className="SideBar">
          <Nav className="flex-column">
            <Nav.Link>
              <Link to="/AdminClases">Clases</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/AdminBlog">Blog</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/AdminReseñas">Reseñas</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/AdminPagos">Pagos</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/AdminCode">Descuentos</Link>
            </Nav.Link>
          </Nav>
        </div>
        <Navbar bg="" className="navegacion" variant="dark">
          <Container>
            <Navbar.Brand className="mano" onClick={() => setEstado("0")}>
              Pagos NO Aprobados
            </Navbar.Brand>
            <Navbar.Brand className="mano" onClick={() => setEstado("1")}>
              Pagos Aprobados
            </Navbar.Brand>
          </Container>
        </Navbar>
        {loading === false ? (
          <div className="Manage">
            {estado === "0" ? (
              <h1>Pagos NO aprobados</h1>
            ) : (
              <h1>Pagos aprobados</h1>
            )}
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
                  {/*<th>F.Compra</th>*/}
                  <th>F.Elegida</th>
                  <th></th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {payments.map((p) =>
                  p.estado=== estado ? (
                    <tr>
                      <td>{p.idPayment}</td>
                      <td>{p.clientname}</td>
                      <td>{p.clientlastname}</td>
                      <td>{p.lesson}</td>
                      {p.estado === "0" ? (
                        <td className="false">NO APR.</td>
                      ) : (
                        <td className="true">APR</td>
                      )}
                      <td>
                        <img
                          alt="img"
                          className="imagenCheckout"
                          src={dominio+p.idPayment+"-"+p.name}
                          onClick={voucherCheck}
                        />
                      </td>
                      <td>{p.phone}</td>
                      {/*<td>{dayjs(p.date).format('DD/MM')}</td>*/}
                      <td>{dayjs(p.dateSelected).format('MM/DD')}</td>
                      {p.estado === "0" ? (
                        <td onClick={() => alta(p)}>
                          <img
                            alt="img"
                            src="../assets/comprobado.png"
                            className="imagenCheckout"
                          />
                        </td>
                      ) : (
                        <td></td>
                      )}
                      <td onClick={() => baja(p)}>
                        <img
                          alt="img"
                          src="../assets/basura.png"
                          className="imagenCheckout"
                        />
                      </td>
                    </tr>
                  ) : <></>)
                }
              </tbody>
            </Table>
          </div>
        ) : (
          <div className="space">
            <Loading />
          </div>
        )}
      </div>
      <ModalVoucher
        showVoucher={showVoucher}
        setShowVoucher={setShowVoucher}
        currentVoucher={currentVoucher}
      />
    </Layout>
  );
}

export default pagosNot;

