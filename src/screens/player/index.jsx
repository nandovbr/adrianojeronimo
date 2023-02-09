import React from 'react';
import { useState, useEffect } from 'react';
import Login from '../auth/login';
import { setClientToken } from '../../spotify';

export default function Player() {

  
  const [token, setToken] = useState("");

  // token de acesso e salva no localstorage
  useEffect(() => {
    const isToken = window.localStorage.getItem('token');
    const hash = window.location.hash;
    // console.log(hash.split('&')[0].split('=')[1]);

    window.location.hash = "";

    if (!isToken && !hash) {
      const token = hash.split('&')[0].split('=')[1];
      window.localStorage.setItem('token', token);
      setToken(token);
      setClientToken(token)
    } else {
      setToken(isToken);
      setClientToken(isToken)
    }
  }, []);

  return !token ? (
    <Login />
  ) : (
    <>
      <div className="screen-container">
        Player Aqui        
      </div>
    </>
  )
}
