import React, { useState } from "react"
import Layout from "../Layout";
import Nav from 'react-bootstrap/Nav'
import { Link } from "react-router-dom"
import "./Admin.css"
import ModalClasesCrear from './Modals/ClasesCrear/ModalClasesCrear'
import ModalClasesEliminar from "./Modals/ClasesCrear/ModalClasesEliminar";
function AdminClases() {
    const [showCrear, setShowCrear] = useState(false)
    const [showEliminar, setShowEliminar] = useState(false)
    if(window.innerWidth > 767){
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
                            <Nav.Link><Link onClick={() => setShowCrear(true)} >Crear una clase</Link></Nav.Link>
                            <Nav.Link><Link onClick={()=> setShowEliminar(true)} >Eliminar una clase</Link></Nav.Link>
                        </Nav>
                    </div>
                </div>
                <ModalClasesCrear
                    showCrear={showCrear}
                    setShowCrear={setShowCrear}
                />
                <ModalClasesEliminar 
                    showEliminar={showEliminar}
                    setShowEliminar={setShowEliminar}
                />
            </Layout>
        )
    }else{
       return <Layout><h1>This device is too small in order to use the admin pannel</h1></Layout>
    }

}
export default AdminClases;