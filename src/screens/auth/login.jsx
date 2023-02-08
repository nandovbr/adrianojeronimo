import React from 'react'
import { loginEndpoint } from '../../spotify'
import './login.css'

export default function login() {
  return (
    <div className="login-page">
      <img
        src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png"
        alt="Logo Spotify"
        className="spotify-logo"
      />

      <a href={loginEndpoint}>
        <div className="btn-login">LOGIN</div>
      </a>
    </div>
  )
}
