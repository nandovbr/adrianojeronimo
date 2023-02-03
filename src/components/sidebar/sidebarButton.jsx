import React from 'react';
import { Link } from 'react-router-dom';
import './sidebar.css';

export default function sidebarButton(props) {
  return (
    <Link to={ props.to }>
      <div>sidebarButton</div>
    </Link>
  )
}