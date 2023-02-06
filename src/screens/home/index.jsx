import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './home.css';
import Library from '../library/index';
import Sobre from '../sobre/index';
import Lancamento from '../lancamento/index';
import Player from '../player/index';
import Videos from '../videos/index';
import Sidebar from '../../components/sidebar/index';

export default function Home() {
  return (
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
