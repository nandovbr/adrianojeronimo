/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import './player.css'

export default function Player() {
  return (
    <div className="principal">
      <div className="container">
        <div className="music-container">
          <img src="https://i.postimg.cc/wjDdX0xr/Rei-da-Gl-ria.jpg" className="music-image" />
          <div className="music">
            <audio src={ require("./musicas/reiDaGloria.mp3") } controls controlsList="nodownload" />
          </div>
        </div>

        <div className="music-container">
          <img src="https://i.postimg.cc/wjDdX0xr/Rei-da-Gl-ria.jpg" className="music-image" />
          <div className="music">
            <audio src={ require("./musicas/apocalipseMaster02.mp3") } controls controlsList="nodownload" />
          </div>
        </div>
      </div>

      <div className="container">
        <div className="music-container">
          <img src="https://i.postimg.cc/wjDdX0xr/Rei-da-Gl-ria.jpg" className="music-image" />
          <div className="music">
            <audio src={ require("./musicas/ontemHojeESempreMaster.mp3") } controls controlsList="nodownload" />
          </div>
        </div>

        <div className="music-container">
          <img src="https://i.postimg.cc/wjDdX0xr/Rei-da-Gl-ria.jpg" className="music-image" />
          <div className="music">
            <audio src={ require("./musicas/sementesMaster02.wav") } controls controlsList="nodownload" />
          </div>
        </div>
      </div>

      <div className="container">
        <div className="music-container">
          <img src="https://i.postimg.cc/wjDdX0xr/Rei-da-Gl-ria.jpg" className="music-image" />
          <div className="music">
            <audio src={ require("./musicas/sementesLadoBMaster02.mp3") } controls controlsList="nodownload" />
          </div>
        </div>

        <div className="music-container">
          <img src="https://i.postimg.cc/wjDdX0xr/Rei-da-Gl-ria.jpg" className="music-image" />
          <div className="music">
            <audio src={ require("./musicas/Salmo51Master.mp4") } controls controlsList="nodownload" />
          </div>
        </div>
      </div>
    </div>
  )
}
