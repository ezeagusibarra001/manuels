import React, { useState } from "react"
import Layout from "../Layout";
import Nav from 'react-bootstrap/Nav'
import { Link } from "react-router-dom"
import CrearDescuentos from "./Modals/Descuentos/CrearDescuentos";
import "./Admin.css"
import CodeEliminar from './Modals/Descuentos/CodeEliminar'
function AdminCode() {

/*-----------------------------------------------------------------------------*/
    const [showCode, setShowCode] = useState(false);
    const [showEliminarRev, setEliminarRev] = useState(false);
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
                        <Nav.Link><Link to="/AdminCode" >Descuentos</Link></Nav.Link>

                    </Nav>
                </div>
                <div className="Manage">
                    <Nav className="flex-column">
                        <Nav.Link><Link onClick={() => setShowCode(true)} >Crear Descuento</Link></Nav.Link>
                        <Nav.Link><Link onClick={() => setEliminarRev(true)} >Eliminar Descuento</Link></Nav.Link>

                    </Nav>
                </div>
                <CrearDescuentos showCode={showCode} setShowCode={setShowCode}/>
                <CodeEliminar showEliminarRev={showEliminarRev} setEliminarRev={setEliminarRev}/>
            </div>

        </Layout>
    )

}
export default AdminCode;