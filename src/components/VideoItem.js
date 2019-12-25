import React from 'react';
import './VideoItem.css'

const VideoItem = ({video, onVideoSelect}) =>{
    return <div onClick={() => onVideoSelect(video)} className="card">
            <img className="img-thumbnail" src={video.snippet.thumbnails.medium.url} alt = "Video Thumbnail"/>
            <h6 className= "card-title">{video.snippet.title}</h6>
    </div>;
};

export default VideoItem;