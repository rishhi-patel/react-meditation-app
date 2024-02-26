import React, { useState, useEffect, useRef } from "react"

import "./Meditation/css/style.css"

import Header from "../components/headers/Header"
import VideoPlayer from "../components/Players/VideoPlayer"
import TimeSelector from "../components/controls/timeSelector/TimeSelector"
import MediaPlayer from "../components/Players/MediaPlayer"
import SoundPicker from "../components/controls/soundPicker/SoundPicker"
import Footer from "../components/footer/Footer"

const videoSrc = "video/rain-converted.mp4"
const audioSrc = "sounds/rain.mp3"

export const Meditation = () => {
  const [isPlaying, setIsPlaying] = useState(false)
  const [duration, setDuration] = useState(600)
  const [currentTime, setCurrentTime] = useState({ minutes: 10, seconds: 0 })

  const songRef = useRef(null)
  const videoRef = useRef(null)
  const outlineRef = useRef(null)

  useEffect(() => {
    if (outlineRef.current) {
      const outlineLength = outlineRef.current.getTotalLength()
      outlineRef.current.style.strokeDashoffset = outlineLength
      outlineRef.current.style.strokeDasharray = outlineLength
    }
  }, [])

  useEffect(() => {
    if (songRef.current && videoRef.current) {
      if (isPlaying) {
        songRef.current.play()
        videoRef.current.play()
      } else {
        songRef.current.pause()
        videoRef.current.pause()
      }
    }
  }, [isPlaying])

  useEffect(() => {
    if (songRef.current) {
      const updateProgress = () => {
        const currentTime = songRef.current.currentTime

        const elapsed = duration - currentTime
        const minutes = Math.floor(elapsed / 60)
        const seconds = Math.floor(elapsed % 60)

        setCurrentTime({ minutes, seconds })

        const outlineLength = outlineRef.current.getTotalLength()
        const progress =
          outlineLength - (currentTime / duration) * outlineLength
        outlineRef.current.style.strokeDashoffset = progress

        if (currentTime >= duration) {
          setIsPlaying(false)
          songRef.current.currentTime = 0
          songRef.current.pause()
          videoRef.current.pause()
        }
      }

      songRef.current.ontimeupdate = updateProgress

      return () => {
        songRef.current.ontimeupdate = null
      }
    }
  }, [duration])

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying)
  }

  const handleSoundChange = ({ sound, video }) => {
    songRef.current.src = sound
    videoRef.current.src = video
    setIsPlaying(false) // Reset play state
  }

  const restartSong = (song) => {
    songRef.current.currentTime = 0
  }
  return (
    <>
      <Header />
      <div className="app">
        <VideoPlayer videoSrc={videoSrc} videoRef={videoRef} />
        <TimeSelector
          duration={duration}
          setDuration={setDuration}
          setCurrentTime={setCurrentTime}
        />
        <MediaPlayer
          songRef={songRef}
          audioSrc={audioSrc}
          outlineRef={outlineRef}
          currentTime={currentTime}
          handlePlayPause={handlePlayPause}
          isPlaying={isPlaying}
          restartSong={restartSong}
        />
        <SoundPicker handleSoundChange={handleSoundChange} />
      </div>
      <Footer />
    </>
  )
}
