import React, { useState } from "react"
import Layout from "../Layout";
import Nav from 'react-bootstrap/Nav'
import { Link } from "react-router-dom"
import "./Admin.css"
import ModalBlogCrear from './Modals/BlogCrear/ModalBlogCrear'
import ModalBlogEliminar from './Modals/BlogCrear/ModalBlogEliminar'
function AdminBlog() {
    const [showCrear, setShowCrear] = useState(false)
    const [showEliminar, setShowEliminar] = useState(false)
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
                        <Nav.Link><Link onClick={() => setShowCrear(true)}>Crear una publicacion</Link></Nav.Link>
                        <Nav.Link><Link onClick={() => setShowEliminar(true)}>Eliminar una publicacion</Link></Nav.Link>
                    </Nav>
                </div>
            </div>
            <ModalBlogCrear
                showCrear={showCrear}
                setShowCrear={setShowCrear}
            />
            <ModalBlogEliminar
                showEliminar={showEliminar}
                setShowEliminar={setShowEliminar}
            />
        </Layout>
    )

}
export default AdminBlog;