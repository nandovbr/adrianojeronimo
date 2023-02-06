import React from 'react';
import { Howl } from 'howler';

export default function Player() {

  const sound = new Howl({
    src: ['musica-Adriano-mp3.mp3'],
    html5: true,
    format: ['mp3'],
  });

  return (
    <>
      <div className="screen-container">
        Player Aqui
        <button onClick={() => sound.play()}>clique play</button>
        <button onClick={() => sound.stop()}>clique stop</button>
        
      </div>
    </>
  )
}
