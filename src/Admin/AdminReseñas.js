import React, { useState } from "react"
import Layout from "../Layout";
import Nav from 'react-bootstrap/Nav'
import { Link } from "react-router-dom"
import Controllerreseñas from "./Modals/Reseñas/ControllerReseñas";
import "./Admin.css"
import ModalReseñasEliminar from './Modals/Reseñas/ModalReseñasEliminar'
function AdminReseñas() {

    /*-----------------------------------------------------------------------------*/
    const [showVerReseñas, setShowVerReseñas] = useState(false);
    const [showEliminarRev, setEliminarRev] = useState(false);
    /*-----------------------------------------------------------------------------*/
    if (window.innerWidth > 767) {
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
                    <div className="Manage">
                        <Nav className="flex-column">
                            <Nav.Link><Link onClick={() => setShowVerReseñas(true)} >Ver Reseñas</Link></Nav.Link>
                            <Nav.Link><Link onClick={() => setEliminarRev(true)} >Eliminar Reseñas</Link></Nav.Link>

                        </Nav>
                    </div>
                    <Controllerreseñas setShowVerReseñas={setShowVerReseñas} showVerReseñas={showVerReseñas} />
                    <ModalReseñasEliminar showEliminarRev={showEliminarRev} setEliminarRev={setEliminarRev} />
                </div>

            </Layout>
        )
    } else {
        return <Layout><h1>This device is too small in order to use the admin pannel</h1></Layout>
    }


}
export default AdminReseñas;