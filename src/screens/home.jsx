import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Library from './library';
import Feed from './feed';
import Trending from './trending';
import Player from './player';
import Favorites from './favorites';

export default function Home() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Library />} />
        <Route path="/feed" element={<Feed />} />
        <Route path="/tendencias" element={<Trending />} />
        <Route path="/player" element={<Player />} />
        <Route path="/favoritos" element={<Favorites />} />
      </Routes>
    </Router>
  )
}
