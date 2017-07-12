import React from 'react';

/**
 * Details about YouTube video.
 * @param video
 * @returns {XML}
 * @constructor
 */
const VideoDetail = ({video}) => {

    // Check if video is not empty.
    if (!video) {
    return <div>Loading...</div>;
  }

  const videoId = video.id.videoId;
  // Creating an iframe that points to the url will show a youtube video player inside of our application for us.
  const url = `https://www.youtube.com/embed/${videoId}`; // use of ES6 string interpolation or template string.

  return (
      <div className="video-detail col-md-8">
          <div className="embed-responsive embed-responsive-16by9">
              <iframe className="embed-responsive-item" src={url} title="YouTube video"/>
          </div>
          <div className="details">
              <div>{video.snippet.title}</div>
              <div>{video.snippet.description}</div>
          </div>
      </div>
  );
};

export default VideoDetail;
