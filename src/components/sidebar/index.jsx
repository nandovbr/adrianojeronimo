import React from 'react';
import { useState, useEffect } from 'react';
import './sidebar.css';
import SidebarButton from './sidebarButton';
import { MdOndemandVideo, MdSpaceDashboard } from 'react-icons/md';
import { IoLibrary } from 'react-icons/io5';
import { FaGripfire, FaSignOutAlt, FaSpotify } from 'react-icons/fa';
import apiClient from '../../spotify';

export default function Sidebar() {

  const [image, setImage] = useState("https://i.postimg.cc/W3WFHkCr/perfil.png");

  useEffect(() => {
    apiClient.get("me").then((response) => {
      setImage(response.data.images[0].url);
    });
  }, []);

  return (
    <div className='sidebar-container'>
      <img
        src={image}
        className="profile-img"
        alt="profile"
      />

      <div>
        <SidebarButton title="Sobre" to="/sobre" icon={ <MdSpaceDashboard /> } />
        <SidebarButton title="Lancamento" to="/lancamento" icon={ <FaGripfire /> } />
        <SidebarButton title="Spotify" to="/player" icon={ <FaSpotify /> } />
        <SidebarButton title="Videos" to="/videos" icon={ <MdOndemandVideo /> } />
        <SidebarButton title="Library" to="/library" icon={ <IoLibrary /> } />
      </div>

        <SidebarButton title="Sign Out" to="/sobre" icon={ <FaSignOutAlt /> } />
    </div>
  )
}
