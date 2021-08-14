import React, { useState } from 'react'
import ReturnCrear from './ReturnCrear'
import axios from 'axios'
import clienteAxios from '../../../config/clienteAxios'
import { useHome } from '../../../context/home-context'
import "../../Admin.css"
import { useToasts } from "react-toast-notifications";
function ModalBlogCrear(props) {
    const { addToast } = useToasts();
    const { blog, obtenerBlogs, axiosConfig } = useHome()
    const { showCrear, setShowCrear } = props;
    const [Styles, setStyles] = useState()
    const [currentBlog, setCurrentBlog] = useState({
        "title": "",
        "description": "",
        "description1": "",
        "description2": "",
        "description3": "",
        "subtitle": "",
        "subtitle2": "",
        "image": {}
    })

    const handleClose = () => {
        setShowCrear(false)
    }
    const handleChange = (e) => {
        setCurrentBlog({ ...currentBlog, [e.target.name]: e.target.value, })
        console.log(currentBlog)
    };
    /*-------------------------------POST IMAGE----------------------------------------*/
    const [file, setFile] = useState({
        file: null
    })
    const [blob, setBlob] = useState({
        blob: ""
    })

    const handleFile = async (e) => {
        let file = e.target.files[0]
        const blob = await convertToBlob(file)
        console.log(blob)
        setBlob({ blob: blob })
        console.log(file.name)
        setFile({ file: file })
        
    }

    const convertToBlob = (file) => {
        return new Promise((resolve, reject) => {
            const fileReader = new FileReader();
            fileReader.readAsDataURL(file);

            fileReader.onload = () => {
                resolve(fileReader.result)
            }

            fileReader.onerror = (error) => {
                reject(error)
            }
        })
    }

    const submit = async () => {
        console.log(file.file)
        console.log(blob.blob)
        /*await clienteAxios
            .post("/publications", {
                "title": currentBlog.title,
                "description": currentBlog.description,
                "description1": currentBlog.description1,
                "description2": currentBlog.description2,
                "description3": currentBlog.description3,
                "subtitle": currentBlog.subtitle,
                "subtitle2": currentBlog.subtitle2,
                "image": {
                    "name": file.file.name,
                    "type": file.file.type,
                    "bytes": blob.blob
                }
            }, axiosConfig)
            .then((res) => {
                console.log(res.data);
                obtenerBlogs();
                handleClose()
                addToast("Blog creado", {
                    appearance: "success",
                    autoDismiss: true,
                });
            })
            .catch((err) => {
                console.log("error post", err);
            });*/
    };
    return (
        <ReturnCrear
            submit={submit}
            showCrear={showCrear}
            handleClose={handleClose}
            handleChange={handleChange}
            Styles={Styles}
            handleFile={handleFile}
        />
    )
}

export default ModalBlogCrear
