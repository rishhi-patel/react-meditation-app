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
      <audio class="song" ref={songRef}>
        <source src={audioSrc} />
      </audio>
      isPlaying ?
      <img
        src={`assets/svg/${isPlaying ? "pause" : "play"}.svg`}
        class="play"
        alt="control"
        onClick={handlePlayPause}
      />
      <svg
        class="track-outline"
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
          stroke-width="20"
        />
      </svg>
      <svg
        class="moving-outline"
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
          stroke-width="20"
        />
      </svg>
      <img
        src="assets/svg/replay.svg"
        class="replay"
        onClick={restartSong}
        alt="restart"
      />
      <h3 class="time-display">
        {currentTime.minutes}:{currentTime.seconds}
      </h3>
    </div>
  )
}

export default MediaPlayer
