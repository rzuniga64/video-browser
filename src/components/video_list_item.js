import React from 'react';

/**
 * We have a top-level element, li, with two children, media-left and media-body. Takes onVideoSelect property and
 * when it gets clicked the function is called with the video I was passed.
 * @param video
 * @param onVideoSelect
 * @returns {XML}
 * @constructor
 */
// video and onVideoSelect are properties on props.
const VideoListItem = ({video, onVideoSelect}) => {
    // const video = props.video (es6 syntax)
    // console.log(video)
    const imageUrl = video.snippet.thumbnails.default.url;

    // return <li>Video</li>
    return (
        <li className="list-group-item" onClick={() => onVideoSelect(video)}>
            <div className="video-list media">
                <div className="media-left">
                    <img className="media-object" src={imageUrl} alt="thumbnail"/>
                </div>
                <div className="media-body">
                    <div className="media-heading">{video.snippet.title}</div>
                </div>
            </div>
        </li>
    );
};

export default VideoListItem;
