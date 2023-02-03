import React from 'react';
import { IconContext } from 'react-icons';
import { Link, useLocation } from 'react-router-dom';
import './sidebar.css';

export default function SidebarButton(props) {
  const location = useLocation(); // sinaliza a rota atual ao usuário  
  const isActive = location.pathname === props.to; // sinaliza a rota atual ao usuário
  const btnClass = isActive ? "btn-body active" : "btn-body"; // sinaliza a rota atual ao usuário

  return (
    <Link to={ props.to }>
      <div className={ btnClass }>
        <IconContext.Provider value={ { size: "24px", className: "btn-icon" } }>
          { props.icon }
          <h5 className="btn-title">{ props.title }</h5>
        </IconContext.Provider>
      </div>
    </Link>
  )
}