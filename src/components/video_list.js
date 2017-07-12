import React from 'react';
import VideoListItem from './video_list_item';

const VideoList = (props) => {

  const videoItems = props.videos.map((video) => {
    return (
      <VideoListItem
          /* Pass the call inside of props down to VideoListItem. Now VideoListItem has access to a property called
             onVideoSelect. */
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
