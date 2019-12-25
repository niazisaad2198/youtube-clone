import React from 'react';

const VideoDetail = ({video}) =>{

const videoSrc = 'https://www.youtube.com/embed/';

console.log(videoSrc);

    if(!video){
        return <center>
            <div style={{marginLeft:'25%'}} className="alert alert-danger" role="alert">
        Please enter search term (OwO)
      </div>
        </center>
    }
    else{
        return(
            <div style={{width:'901px'}} className="card">
                <div className="card-image-top">
                    <iframe style={{ width:"900px", height:'508px'}} src={videoSrc+video.id.videoId}/>
                </div>
                <div className="card-body">
                    <h4 className="card-title">{video.snippet.title}</h4>
                    <p className="card-text">{video.snippet.description}</p>
                </div>
            </div>
        );
    }
}

export default VideoDetail;