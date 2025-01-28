import React, { useState } from 'react';
import '../admin.css';
import Sidebar from './Sidebar';

function Adminpanel() {
  const [isSidebarVisible, setSidebarVisible] = useState(true);

  // Mock data for stats
  const userCount = 120; // Replace with dynamic data as needed.

  const toggleSidebar = () => {
    setSidebarVisible(!isSidebarVisible);
  };

  return (
    <div className="admin-container">
      {/* Sidebar */}
      {isSidebarVisible && <Sidebar />}

      {/* Main Content */}
      <div className="main-content">
        {/* Navbar */}
        <nav className="navbar">
          <div className="navbar-left">
            <button className="toggle-sidebar" onClick={toggleSidebar}>
              ☰
            </button>
          </div>
          <div className="navbar-right">
            <span>Admin</span>
            <a href="/" className="logout">Logout</a>
          </div>
        </nav>

        {/* Content Area */}
        <div className="content-area">
          <h1>Dashboard</h1>

          {/* Stats Box */}
          <div className="stats-box">
            <div className="stat-item">
              <h3>Total Users</h3>
              <p>{userCount}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Adminpanel;
