import React, { useState, useEffect } from "react";
import Layout from "../Layout";
import axios from 'axios'

function CHECKOUTPROV(props) {
    const [file, setFile] = useState({
        file: null
    })

    const handleFile = (e) => {
        let file = e.target.files[0]
        setFile({ file: file })
    }
    const handleUpload = (e) => {
        let image = file.file;

        let formdata = new FormData();

        formdata.append('image', image)

        axios({
            url: `http://localhost:8080/api/images`,
            method: "POST",
            data: formdata
        }).then((res)=>{
            console.log(res.data)
        }).catch((err)=>{
            console.log(err)
        })
    };
    return (
        <Layout >
            <form>
                <div>
                    <label>File</label>
                    <input
                        type="file"
                        name="file"
                        onChange={(e) => handleFile(e)}
                    />

                    <button type="button" onClick={(e) => handleUpload(e)}>Upload</button>
                </div>
            </form>
        </Layout>
    )

}
export default CHECKOUTPROV;