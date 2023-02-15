import React from 'react'
import ReactPlayer from 'react-player'; // Solução do Caio (Trybe)

export default function Videos() {
  return (
    <div className="screen-container">
      Videos Aqui

      <ReactPlayer url="https://www.youtube.com/watch?v=tjHIkyKyo_E" />
      <ReactPlayer url="https://www.youtube.com/watch?v=tjHIkyKyo_E" />
    </div>
  )
}
