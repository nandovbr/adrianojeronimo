import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './home.css';
import Library from '../library/index';
import Sobre from '../sobre/index';
import Lancamento from '../lancamento/index';
import Player from '../player/index';
import Videos from '../videos/index';
import Sidebar from '../../components/sidebar/index';
import Login from '../auth/login';
import { setClientToken } from '../../spotify';

export default function Home() {

  const [token, setTOken] = useState("");

  // token de acesso e salva no localstorage
  useEffect(() => {
    const isToken = window.localStorage.getItem('token');
    const hash = window.location.hash;
    // console.log(hash.split('&')[0].split('=')[1]);

    window.location.hash = "";

    if (!isToken && !hash) {
      const token = hash.split('&')[0].split('=')[1];
      window.localStorage.setItem('token', token);
      setTOken(token);
      setClientToken(token)
    } else {
      setTOken(isToken);
      setClientToken(isToken)
    }
  }, []);

  return !token ? (
    <Login />
  ) : (

    <Router>
      <div className="main-body">
        <Sidebar />

        <Routes>
          <Route path="/" element={<Library />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/lancamento" element={<Lancamento />} />
          <Route path="/player" element={<Player />} />
          <Route path="/videos" element={<Videos />} />
        </Routes>
      </div>
    </Router>
  )
}
