/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import './player.css'

export default function Player() {
  return (
    <div className="container">
      <div className="music-container">
        <img src="https://i.postimg.cc/wjDdX0xr/Rei-da-Gl-ria.jpg" className="music-image" />
        <div className="music">
          <audio src={ require("./musicas/musica-Adriano.mp3") } controls />
        </div>
      </div>

      <div className="music-container">
      <img src="https://i.postimg.cc/wjDdX0xr/Rei-da-Gl-ria.jpg" className="music-image" />
        <div className="music">
          <audio src={ require("./musicas/musica-Adriano.mp3") } controls />
        </div>
      </div>
    </div>
  )
}
