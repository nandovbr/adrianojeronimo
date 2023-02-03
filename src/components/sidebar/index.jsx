import React from 'react';
import './sidebar.css';
import SidebarButton from './sidebarButton';
import { MdFavorite, MdSpaceDashboard } from 'react-icons/md';
import { IoLibrary } from 'react-icons/io5';
import { FaGripfire, FaPlay, FaSignOutAlt } from 'react-icons/fa';

export default function Sidebar() {
  return (
    <div className='sidebar-container'>
      <img
        src="https://i.postimg.cc/W3WFHkCr/perfil.png"
        className="profile-img"
        alt="Foto do Adriano Jeronimo"
      />

      <div>
        <SidebarButton title="Feed" to="/feed" icon={ <MdSpaceDashboard /> } />
        <SidebarButton title="Trendig" to="/trendig" icon={ <FaGripfire /> } />
        <SidebarButton title="Player" to="/player" icon={ <FaPlay /> } />
        <SidebarButton title="Favorites" to="/favorites" icon={ <MdFavorite /> } />
        <SidebarButton title="Library" to="/library" icon={ <IoLibrary /> } />
      </div>

      <SidebarButton title="Sign Out" to="" icon={ <FaSignOutAlt /> } />
    </div>
  )
}
