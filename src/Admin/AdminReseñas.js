import React, { useState } from "react"
import Layout from "../Layout";
import Nav from 'react-bootstrap/Nav'
import { Link } from "react-router-dom"
import Button from 'react-bootstrap/Button'
import Controllerreseñas from "./Modals/Reseñas/ControllerReseñas";
import "./Admin.css"

function AdminReseñas() {

/*-----------------------------------------------------------------------------*/
    const [showVerReseñas, setShowVerReseñas] = useState(false);
    const handleShowVerReseñas = () => setShowVerReseñas(true);
/*-----------------------------------------------------------------------------*/

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
                    <Nav className="flex-column">
                        <Nav.Link><Link onClick={() => setShowVerReseñas(true)} >Ver Reseñas</Link></Nav.Link>
                        <Nav.Link><Link >Eliminar una reseña</Link></Nav.Link>
                    </Nav>
                </div>
                <Controllerreseñas setShowVerReseñas={setShowVerReseñas} showVerReseñas={showVerReseñas}/>
            </div>

        </Layout>
    )

}
export default AdminReseñas;