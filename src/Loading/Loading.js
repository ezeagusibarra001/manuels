import React from "react"
import "./Loading.css"
import Spinner from 'react-bootstrap/Spinner'
/*
<div className="ContainerLoading7">
    <div className="Loading7A"></div>
    <div className="Loading7B"></div>
    <div className="Loading7C"></div>
    <div className="Loading7D"></div>
    <div className="Loading7E"></div>
</div>
*/
function Loading() {
    if (window.innerWidth > 500) {
        return (
            <Spinner animation="border" /> 
        )
    }
    else {
        return (
            <div className="ContainerLoading3">
                <div className="Loading3" />
            </div>
        )
    }
    /*
        <div className="ContenedorLoading">
            <div className="Loading1"> </div>
            <div className="Loading1"> </div>
            <div className="Loading1"> </div>
        </div>
        <div className="Loading2"> </div>
        <div className="ContainerLoading4">
            <div className="Loading4"></div>
        </div>

        <br></br>

        <div className="ContainerLoading5">
            <div className="Loading5"></div>
        </div>

        <br></br>

        <div className="ContainerLoading6">
            <div className="Loading6"></div>
        </div>

        
        <br></br>
    */
}
export default Loading;