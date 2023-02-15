import React from 'react';
import './player.css'

export default function Player() {
  return (
    <>
      <div className="music-container">
        <h3>Rei da Glória</h3>
        <audio src={ require("./musicas/musica-Adriano.mp3") } controls />

        <h3>Sementes</h3>
        <audio src={ require("./musicas/testeaudio.ogg") } controls />
      </div>
    </>
  )
}
