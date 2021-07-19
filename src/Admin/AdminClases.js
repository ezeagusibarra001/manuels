import React, { useState } from "react"
import Layout from "../Layout";
import Nav from 'react-bootstrap/Nav'
import { Link } from "react-router-dom"
import "./Admin.css"
import ModalClasesCrear from './Modals/ModalClasesCrear'
function AdminClases() {
    const [showCrear, setShowCrear] = useState(false)
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
                        <Nav.Link><Link onClick={() => setShowCrear(true)} >Crear una clase</Link></Nav.Link>
                        <Nav.Link><Link >Eliminar una clase</Link></Nav.Link>
                    </Nav>
                </div>
            </div>
            <ModalClasesCrear
                showCrear={showCrear}
                setShowCrear={setShowCrear}
            />
        </Layout>
    )

}
export default AdminClases;