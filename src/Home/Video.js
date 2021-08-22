import React from "react"
import "./Video.css"

function Video(props) {
    const videos=[
        "https://www.youtube.com/embed/Z4TuS0HEJP8",
        "https://www.youtube.com/embed/Z4TuS0HEJP8",
        "",
    ]
    const countingvideo = videos.every( x => x.length!==0) //METODO EVERY EVALUA SI SE CUMPLE LA CONDICION PARA TODOS LOS ELEMENTOS DEL ARRAY VIDEOS
    return(
        <div className="ContainerFondoVideo">
            <div className="ContainerVideos">
                {
                    countingvideo ?
                    <>
                    <div className="ContainerVideo1">
                        <iframe className="Video1" src={videos[0]} title="YouTube video player?controls=1" frameborder="0" allow="fullscreen;"></iframe>
                    </div> 

                    <div className="ContainerVideo2"> 
                        <iframe className="Video2" src="https://www.youtube.com/embed/Z4TuS0HEJP8" title="YouTube video player?controls=1" frameborder="0" allow="fullscreen;"></iframe>
                    </div>

                    <div className="ContainerVideo3"> 
                        <iframe className="Video3" src="https://www.youtube.com/embed/Z4TuS0HEJP8" title="YouTube video player?controls=1" frameborder="0" allow="fullscreen;"></iframe>
                    </div>
                    </>
                    :
                    <>
                    <div className="ContainerVideo1">
                        <h1 className="ComingSoon">Coming Soon</h1>
                    </div> 

                    <div className="ContainerVideo2"> 
                        <h1 className="ComingSoon">Coming Soon</h1>
                    </div>

                    <div className="ContainerVideo3"> 
                        <h1 className="ComingSoon">Coming Soon</h1>
                    </div>
                    </>
                }
            </div>
        </div>
    ) 
}
export default Video;
