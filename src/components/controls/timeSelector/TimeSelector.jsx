import React from "react"

const TimeSelector = ({ setDuration, setCurrentTime }) => {
  const handleTimeSelect = (newDuration) => {
    setDuration(newDuration)
    setCurrentTime({ minutes: Math.floor(newDuration / 60), seconds: 0 })
  }

  return (
    <div className="time-select">
      <button onClick={() => handleTimeSelect(120)} className="btn btn-info">
        <b>2</b> <span className="bold text-primary">Minutes</span>
      </button>
      <button
        onClick={() => handleTimeSelect(300)}
        className="btn btn-info medium-mins"
      >
        <b>5</b> <span className="bold text-danger">Minutes</span>
      </button>
      <button
        onClick={() => handleTimeSelect(600)}
        className="btn btn-info long-mins"
      >
        <b>10</b> <span className="bold text-default">Minutes</span>
      </button>
    </div>
  )
}

export default TimeSelector
