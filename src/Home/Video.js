import React from "react"
import "./Video.css"

function Video(props) {

    const alerts=()=>{
        alert("hola")
    }

    return(

        <div className="ContainerFondoVideo">


            <div className="ContainerVideos">

            <iframe className="Video1" src="https://www.youtube.com/embed/Z4TuS0HEJP8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen ></iframe>
            <iframe className="Video2" src="https://www.youtube.com/embed/Z4TuS0HEJP8?fs=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen webkitallowfullscreen mozallowfullscreen ></iframe>
            <iframe className="Video3" src="https://www.youtube.com/embed/Z4TuS0HEJP8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

            </div>

        </div>
    )
    
}
export default Video;
