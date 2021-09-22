import React from "react"
import "./Loading.css"
function Loading() {
    if (window.innerWidth > 700) {
        return (
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