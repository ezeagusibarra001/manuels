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
        "subtitle2": ""
    })

    const handleClose = () => {
        setShowCrear(false)
    }
    const handleChange = (e) => {
        setCurrentBlog({ ...currentBlog, [e.target.name]: e.target.value, })
        const max = e.target.maxLength
        if (0 < (e.target.value).length && (e.target.value).length < e.target.maxLength) {
            setStyles({ outlineColor: "green" })
        }
        else {
            setStyles({ outlineColor: "red" })
        }
        console.log(currentBlog)
    };
    /*-------------------------------POST IMAGE----------------------------------------*/
    const [file, setFile] = useState({
        file: null
    })

    const handleFile = (e) => {
        let file = e.target.files[0]
        setFile({ file: file })
        console.log(file)
    }
    const submit = async () => {
        let image = file.file;
        let formdata = new FormData();
        formdata.append('image', image)
        await clienteAxios
            .post("/publications", {
                "title": currentBlog.title,
                "description": currentBlog.description,
                "description1": currentBlog.description1,
                "description2": currentBlog.description2,
                "description3": currentBlog.description3,
                "subtitle": currentBlog.subtitle,
                "subtitle2": currentBlog.subtitle2,
                "image": formdata
            }, axiosConfig)
            .then((res) => {
                console.log(res.data);
                console.log(formdata)
                console.log(file)
                console.log(image)
                obtenerBlogs();
                handleClose()
                addToast("Blog creado", {
                    appearance: "success",
                    autoDismiss: true,
                });
            })
            .catch((err) => {
                console.log("error post", err);
                console.log(axiosConfig)
                console.log(formdata)
                console.log(currentBlog)
                console.log(image)
            });
    };
    const handleUpload = (e) => {
        let image = file.file;
        let formdata = new FormData();
        formdata.append('image', image)
        axios({
            url: `http://localhost:8080/api/publications`,
            method: "POST",
            body: {
                "title": currentBlog.title,
                "description": currentBlog.description,
                "description1": currentBlog.description1,
                "description2": currentBlog.description2,
                "description3": currentBlog.description3,
                "subtitle": currentBlog.subtitle,
                "subtitle2": currentBlog.subtitle2,
            },
            data: formdata
        }, axiosConfig).then((res) => {
            console.log("post god", res.data)
        }).catch((err) => {
            console.log(err)
            console.log(formdata)
            console.log(currentBlog)
            console.log(axiosConfig)
        })
    };
    return (
        <ReturnCrear
            handleUpload={handleUpload}
            showCrear={showCrear}
            handleClose={handleClose}
            handleChange={handleChange}
            Styles={Styles}
            handleFile={handleFile}
        />
    )
}

export default ModalBlogCrear
