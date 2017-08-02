import React from 'react';

/**
 * Details about YouTube video.
 * @param video
 * @returns {XML}
 * @constructor
 */
const VideoDetail = ({video}) => {
    // const video = props.video (es6 syntax)

    // Check if video is not empty.
    if (!video) {
    return <div>Loading...</div>;
  }

        // Whenever you want to embed a video or navigate to it the only thing that changes in
        // the URL is the ID of the video. We have the ID in props.video so we can make a URL.
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
