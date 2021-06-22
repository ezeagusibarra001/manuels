import React from "react"
import "./Video.css"

function Video(props) {

    return(

        <div className="ContainerFondoVideo">


            <div className="ContainerVideos">

                <div className="ContainerVideo1">
                <iframe className="Video1" src="https://www.youtube.com/embed/Z4TuS0HEJP8" title="YouTube video player?controls=1" frameborder="0" allow="fullscreen;"></iframe>
                </div> 

                <div className="ContainerVideo2"> 
                <iframe className="Video2" src="https://www.youtube.com/embed/Z4TuS0HEJP8" title="YouTube video player?controls=1" frameborder="0" allow="fullscreen;"></iframe>
                </div>

                <div className="ContainerVideo3"> 
                <iframe className="Video3" src="https://www.youtube.com/embed/Z4TuS0HEJP8" title="YouTube video player?controls=1" frameborder="0" allow="fullscreen;"></iframe>
                </div>

            </div>

        </div>
    )
    
}
export default Video;
