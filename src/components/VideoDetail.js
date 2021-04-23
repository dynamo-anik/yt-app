import React from "react";

const VideoDetail = ({ video }) => {
  if (!video) {
    return <h4>Loading...</h4>;
  }
  return (
    <div>
      <div className="ui embed">
        <iframe
          src={`https://www.youtube.com/embed/${video.id.videoId}`}
          title="video player"
          allowFullScreen="allowFullScreen"
        />
      </div>
      <div className="ui segment">
        <h1 className="ui header">{video.snippet.title}</h1>
        <p>{video.snippet.description}</p>
      </div>
    </div>
  );
};

export default VideoDetail;

<iframe
  width="560"
  height="315"
  src="https://www.youtube.com/embed/EBndP9eUalg"
  title="YouTube video player"
  frameborder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowfullscreen
></iframe>;
