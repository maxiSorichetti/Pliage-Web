import React from "react";
import video from "../assets/video/intro.mp4";
import videom from "../assets/video/introm.mp4";
import { isMobile } from "react-device-detect";
import ReactPlayer from "react-player";
import { useNavigate } from "react-router-dom";

const VideoPlayer = () => {
  const navigate = useNavigate();
  const handleEnd = () => {
    console.log("Termino playsinline");
    navigate("/main");
  };
  let v = video;
  if (isMobile) {
    v = videom;
  }
  return (
    <div className="player-wrapper position-absolute top-50 start-50 translate-middle w-100">
      <ReactPlayer
        url={v}
        width="100%"
        playing={true}
        height="100%"
        controls={false}
        muted={true}
        playsinline={true}
        onEnded={handleEnd}
      />
    </div>
  );
};

export default VideoPlayer;
