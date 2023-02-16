import React from 'react';
import './sidebar.css';
import SidebarButton from './sidebarButton';
import { MdOndemandVideo, MdSpaceDashboard } from 'react-icons/md';
import { IoLibrary } from 'react-icons/io5';
import { FaGripfire, FaPlay } from 'react-icons/fa';

export default function Sidebar() {
  return (
    <div className='sidebar-container'>
      <img
        src="https://i.postimg.cc/W3WFHkCr/perfil.png"
        className="profile-img"
        alt="profile"
      />

      <div>
        <SidebarButton title="Sobre" to="/sobre" icon={ <MdSpaceDashboard /> } />
        <SidebarButton title="Lancamento" to="/lancamento" icon={ <FaGripfire /> } />
        <SidebarButton title="Músicas" to="/player" icon={ <FaPlay /> } />
        <SidebarButton title="Videos" to="/videos" icon={ <MdOndemandVideo /> } />
        <SidebarButton title="Library" to="/library" icon={ <IoLibrary /> } />
      </div>

        {/* <SidebarButton title="Sign Out" to="/sobre" icon={ <FaSignOutAlt /> } /> */}
    </div>
  )
}
