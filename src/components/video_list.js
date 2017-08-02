import React from 'react';
import VideoListItem from './video_list_item';

/**
 * Class that displays a list of videos. It doesn't have any need for state. It doesn't record any user interaction or
 * re-render itself. So it is a plain old JavaScript object.
 * @param props
 * @returns {XML}
 * @constructor
 */
const VideoList = (props) => {

    /**
     * Pass the call inside of props down to VideoListItem. Now VideoListItem has access to a property called
     * onVideoSelect. When rendering a list you need a key to uniquely identify the list item. We'll use the video's
     * etag as the key.
     * @type {Array}
     */
  const videoItems = props.videos.map((video) => {
    return (
      <VideoListItem
          onVideoSelect={props.onVideoSelect}
          key={video.etag}
          video={video} />
    );
  });

  return (
    <ul className="col-md-4 list-group">
      {videoItems}
    </ul>
  );
};

export default VideoList;
