import React from "react"

const VideoPlayer = ({ videoSrc, videoRef }) => {
  return (
    <div className="vid-container">
      <video ref={videoRef} loop autoPlay muted>
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  )
}

export default VideoPlayer
