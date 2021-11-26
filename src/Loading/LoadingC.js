import React from "react"
import "./LoadingC.css"
function LoadingC(){
    return(
        <div className="LoadingC">
            <div className="LoadingCard">
                <div className="SkeletonTitle"></div>
                <div className="SkeletonContainer">
                    <span className="Skeleton"></span>
                    <span className="Skeleton"></span>
                    <span className="Skeleton"></span>
                    <span className="Skeleton"></span>
                    <span className="Skeleton"></span>
                    <span className="Skeleton"></span>
                    <span className="Skeleton"></span>
                    <span className="Skeleton"></span>
                </div>
                <div className="ButtonLoadingC">Quiero Inscribirme</div>
            </div>
            <div className="LoadingCard">
                <div className="SkeletonTitle"></div>
                <div className="SkeletonContainer">
                    
                </div>
                <div className="ButtonLoadingC">Quiero Inscribirme</div>
            </div>
        </div>
    )
}
export default LoadingC;