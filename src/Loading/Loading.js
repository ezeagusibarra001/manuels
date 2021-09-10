import React from "react"
import "./Loading.css"
import Spinner from 'react-bootstrap/Spinner'
function Loading() {
    if (window.innerWidth > 700) {
        return (
            /*<Spinner animation="border" />*/
            <div className="ContainerLoading3">
                <div className="Loading3" />
            </div>
            
        )
    }
    else {
        return (
            <div className="ContainerLoading3">
                <div className="Loading3" />
            </div>
        )
    }
}
export default Loading;