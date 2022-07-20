import React from "react";
import VideoItems from "./VideoItems";



const VideoList =({videos,onVideoSelect})=>{
   const renderList= videos.map((video)=>{
        return <VideoItems video={video} onVideoSelect={onVideoSelect} key={video.id.videoId}/>;
    })

    return <div className="ui relaxed divided list" >{renderList}</div>

}

export default VideoList;