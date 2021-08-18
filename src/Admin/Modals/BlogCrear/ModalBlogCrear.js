import React, { useState } from 'react'
import ReturnCrear from './ReturnCrear'
import clienteAxios from '../../../config/clienteAxios'
import axios from 'axios'
import { useHome } from '../../../context/home-context'
import "../../Admin.css"
import { useToasts } from "react-toast-notifications";
function ModalBlogCrear(props) {
    const { addToast } = useToasts();
    const { obtenerBlogs, axiosConfig } = useHome()
    const { showCrear, setShowCrear } = props;
    const [Styles, setStyles] = useState()
    const [currentBlog, setCurrentBlog] = useState({
        "title": "",
        "description": "",
        "description1": "",
        "description2": "",
        "description3": "",
        "subtitle": "",
        "subtitle2": ""
    })
    const [disabled, setDisabled] = useState(false)
    const handleClose = () => {
        setShowCrear(false)
    }
    const handleChange = (e) => {
        setCurrentBlog({ ...currentBlog, [e.target.name]: e.target.value, })
        console.log(currentBlog)
        //const max = e.target.maxLength
        if (0 < (e.target.value).length && (e.target.value).length < e.target.maxLength) {
            setStyles({ outlineColor: "green" })
        }
        else {
            setStyles({ outlineColor: "red" })
        }
    };
    /*-------------------------------POST IMAGE----------------------------------------*/
    const [file, setFile] = useState({
        file: null
    })
    // eslint-disable-next-line
    const [blob, setBlob] = useState({
        blob: ""
    })

    const handleFile = async (e) => {
        let file = e.target.files[0]
        const blob = await convertToBlob(file)
        //console.log(blob)
        setBlob({ blob: blob })
        //console.log(file.name)
        setFile({ file: file })
        setDisabled(true)
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
// eslint-disable-next-line
    const handleUpload = (e) => {
        let image = file.file;
        let formdata = new FormData();
        formdata.set('file', image)
        formdata.set('title', currentBlog.title)
        formdata.set('description', currentBlog.description)
        console.log(formdata)
        console.log(axiosConfig)
        debugger
        axios({
            url: `http://localhost:8080/api/publications`,
            method: "POST",
            body: formdata,
            axiosConfig
        }).then((res) => {
            console.log("post god", res.data)
        }).catch((err) => {
            console.log(err)
            console.log(formdata)
            console.log(currentBlog)
            console.log(axiosConfig)
        })
    };

    const submit = async () => {
        let image = file.file;
        let formdata = new FormData();
        if (image !== null) {
            formdata.set('file', image)
        }
        formdata.set('title', currentBlog.title)
        formdata.set('description', currentBlog.description)
        formdata.set('description1', currentBlog.description1)
        formdata.set('description2', currentBlog.description2)
        formdata.set('description3', currentBlog.description3)
        formdata.set('subtitle', currentBlog.subtitle)
        formdata.set('subtitle2', currentBlog.subtitle2)
        await clienteAxios
            .post("/publications", formdata, axiosConfig)
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
            });
    };

    return (
        <ReturnCrear
            disabled={disabled}
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
