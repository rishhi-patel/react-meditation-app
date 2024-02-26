import React, { useEffect, useState } from "react"
import "./style.css"

const Breathing = () => {
  const [text, setText] = useState("Breathe In!")
  const [containerClass, setContainerClass] = useState("container")

  const totalTime = 7500
  const breatheTime = (totalTime / 5) * 2
  const holdTime = totalTime / 5

  useEffect(() => {
    const breathAnimation = () => {
      setText("Breathe In!")
      setContainerClass("container grow")

      setTimeout(() => {
        setText("Hold")

        setTimeout(() => {
          setText("Breathe Out!")
          setContainerClass("container shrink")
        }, holdTime)
      }, breatheTime)
    }

    breathAnimation()
    const intervalId = setInterval(breathAnimation, totalTime)

    return () => clearInterval(intervalId) // Cleanup the interval on component unmount
  }, []) // Empty dependency array means this effect runs once on mount

  return (
    <div
      style={{
        background: `#492222 url("img/bg.jpg") no-repeat center center/cover`,
      }}
      className="breathMain"
    >
      <h1>Breather app</h1>
      <div className={containerClass} id="container">
        <div className="circle"></div>
        <p id="text">{text}</p>
        <div className="pointer-container">
          <span className="pointer"></span>
        </div>
        <div className="gradient-circle"></div>
      </div>
    </div>
  )
}

export default Breathing
