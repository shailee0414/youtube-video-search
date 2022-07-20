import React from "react";
// import VideoList from "./videoList";
import './VideoItems.css'

const VideoItems = ({ video, onVideoSelect }) => {

    return (
        <div onClick={() => onVideoSelect(video)} className="video-item item">
            <div className="image">
                <img className="ui image" src={video.snippet.thumbnails.medium.url} />
            </div>
            <div className="content">
                <div className="header">{video.snippet.title}</div>
            </div>

        </div>
    );

}
export default VideoItems;