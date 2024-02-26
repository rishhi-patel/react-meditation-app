import React from "react"

const SoundPicker = ({ handleSoundChange }) => {
  return (
    <div className="sound-picker">
      <button
        data-sound="assets/sounds/rain.mp3"
        data-video="assets/video/rain-converted.mp4"
        onClick={(event) =>
          handleSoundChange({
            sound: "sounds/rain.mp3",
            video: "video/rain-converted.mp4",
          })
        }
      >
        <img src="assets/svg/rain.svg" alt="Rain sound" />
      </button>
      <button
        data-sound="assets/sounds/beach.mp3"
        data-video="assets/video/beach-converted.mp4"
        onClick={(event) =>
          handleSoundChange({
            sound: "sounds/beach.mp3",
            video: "video/beach-converted.mp4",
          })
        }
      >
        <img src="assets/svg/beach.svg" alt="Ocean sound" />
      </button>
    </div>
  )
}

export default SoundPicker
