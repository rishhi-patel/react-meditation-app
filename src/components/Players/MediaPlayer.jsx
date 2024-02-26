import React from "react"

const MediaPlayer = ({
  songRef,
  audioSrc,
  outlineRef,
  currentTime,
  handlePlayPause,
  isPlaying,
  restartSong,
}) => {
  return (
    <div className="player-container">
      <audio className="song" ref={songRef}>
        <source src={audioSrc} />
      </audio>
      <img
        src={
          Boolean(isPlaying) ? "assets/svg/pause.svg" : "assets/svg/play.svg"
        }
        className="play"
        alt="control"
        onClick={handlePlayPause}
      />
      <svg
        className="track-outline"
        width="453"
        height="453"
        viewBox="0 0 453 453"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="226.5"
          cy="226.5"
          r="216.5"
          stroke="white"
          strokeWidth="20"
        />
      </svg>
      <svg
        className="moving-outline"
        width="453"
        height="453"
        viewBox="0 0 453 453"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          ref={outlineRef}
          cx="226.5"
          cy="226.5"
          r="216.5"
          stroke="teal"
          strokeWidth="20"
        />
      </svg>
      <img
        src="assets/svg/replay.svg"
        className="replay"
        onClick={restartSong}
        alt="restart"
      />
      <h3 className="time-display">
        {currentTime.minutes}:{currentTime.seconds}
      </h3>
    </div>
  )
}

export default MediaPlayer
