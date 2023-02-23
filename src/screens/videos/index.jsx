import React from 'react'
import ReactPlayer from 'react-player'; // Solução do Caio (Trybe)
import './videos.css'

export default function Videos() {
  return (
    <div className="screen-container">
      <ReactPlayer url="https://www.youtube.com/watch?v=tjHIkyKyo_E" />
    </div>
  )
}
