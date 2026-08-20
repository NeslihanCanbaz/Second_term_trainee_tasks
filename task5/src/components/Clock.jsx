import { useState, useEffect } from 'react'

function formatTime(date) {
  return date.toLocaleTimeString('tr-TR', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  })
}

function Clock() {
  const [time, setTime] = useState(() => formatTime(new Date()))

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(formatTime(new Date()))
    }, 1000)

    return () => clearInterval(intervalId)
  }, [])

  return (
    <div className="clock" aria-live="polite">
      <span className="clock-label">Saat</span>
      <span className="clock-time">{time}</span>
    </div>
  )
}

export default Clock
