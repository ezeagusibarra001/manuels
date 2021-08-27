import React, {useState} from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import clienteAxios from '../../../config/clienteAxios'
import { useHome } from '../../../context/home-context'
import "../../Admin.css"
import { useToasts } from "react-toast-notifications";


function CrearDescuentos(props) {
    const { addToast } = useToasts();
    const {axiosConfig, obtenerCode} = useHome()
    const {showCode, setShowCode} = props;
    const [Styles, setStyles] = useState()
    const [currentCod, setCurrentCod] = useState({code:""})
    const handelClose = () => {
        setShowCode(false)
    }
    const handleChange = (e) => {
        setCurrentCod({[e.target.name]: e.target.value})
        //const max = e.target.maxLength
        if (0 < (e.target.value).length && (e.target.value).length < e.target.maxLength) {
            setStyles({ outlineColor: "green" })
        }
        else {
            setStyles({ outlineColor: "red" })
        }
        console.log(e.target.value)
    }
    const submit = async (id) => {
        await clienteAxios
            .post(`/discounts`,{code:currentCod.code},axiosConfig)
            .then((res) => {
                console.log(res.data);
                addToast("Codigo Creado!", {
                    appearance: "success",
                    autoDismiss: true,
                });
                obtenerCode()
                handelClose()
            })
            .catch((err) => {
                console.log("error delete", err);
                addToast("Algo salio mal!", {
                    appearance: "error",
                    autoDismiss: true,
                });
            });
    };
    return (
        <div>
            <Modal show={showCode} onHide={handelClose}>
                <Modal.Header closeButton />
                    <Modal.Body>
                    <textarea
                            type="text"
                            placeholder="Codigo"
                            maxLength="10"
                            onChange={handleChange}
                            name="code"
                            style={Styles}
                            className="CCinputTitle"
                        />
                    </Modal.Body>
                <Modal.Footer>
                    <Button variant="outline-primary" onClick={handelClose}>Close</Button>
                    <Button onClick={submit}>Crear</Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}
export default CrearDescuentos;