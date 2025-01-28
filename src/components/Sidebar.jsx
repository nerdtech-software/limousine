import React from 'react';
import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <nav className="sidebar">
      <div className="sidebar-header">
        <h3>Admin Panel</h3>
      </div>
      <ul className="sidebar-menu">
        <li>
          <Link to='/admin/add-cars'>Add Cars</Link>
        </li>
        <li>
          <a href="/admin/booklist">Bookings</a>
        </li>
        <li>
          <Link to="/admin/edithomeimage">Add Poster</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Sidebar;
