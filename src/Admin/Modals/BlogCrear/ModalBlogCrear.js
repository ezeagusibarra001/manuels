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
        "image": {
            "idImage": ""
        }
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
    var postData = {
        "title": currentBlog.title,
        "description": currentBlog.description,
        "description1": currentBlog.description1,
        "description2": currentBlog.description2,
        "description3": currentBlog.description3,
        "subtitle": currentBlog.subtitle,
        "subtitle2": currentBlog.subtitle2,
        "image": {
            "idImage": 11
        }
    }
    const submit = async () => {
        await clienteAxios
            .post("/publications", postData, axiosConfig)
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
                console.log(axiosConfig)
                console.log(postData)
            });
    };
    const handleUpload = (e) => {
        let image = file.file;
        let formdata = new FormData();
        formdata.append('image', image)
        axios({
            url: `http://localhost:8080/api/images`,
            method: "POST",
            data: formdata
        }).then((res) => {
            console.log(res.data)
        }).catch((err) => {
            console.log(err)
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
            handleUpload={handleUpload}
        />
    )
}

export default ModalBlogCrear
