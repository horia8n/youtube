import React from 'react';


const VideoDetail = ({video}) => {

    if(!video){
        return <div>Loading...</div>;
    }

    const videoId = video.id.videoId;
    const url = `https://www.youtube.com/embed/${videoId}`;
    // const url = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
    // const url = 'https://www.youtube.com/embed/' + videoId;

    return(
            <div className="video-detail col-md-8">
                <div className="embed-responsive embed-responsive-16by9">
                    <iframe className="embed-responsive-item" src={url}></iframe>
                </div>
                <div className="details">
                    <h5 className="title">{video.snippet.title}</h5>
                    <div className="description">{video.snippet.description}</div>
                </div>
            </div>
    );

};


export default VideoDetail;