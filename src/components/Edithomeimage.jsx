import React, { useState } from 'react';
import Sidebar from './Sidebar';
import '../admin.css';

function Edithomeimage() {
  const [isSidebarVisible, setSidebarVisible] = useState(true);
  const [formData, setFormData] = useState({
    id: '',
    poster: null,
    alt: ''  // Added alt field
  });

  const toggleSidebar = () => {
    setSidebarVisible(!isSidebarVisible);
  };

  // Handle input change for image and alt text
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'poster') {
      setFormData({
        ...formData,
        [name]: files[0]
      });
    } else {
      setFormData({
        ...formData,
        [name]: value
      });
    }
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    const form = new FormData();
    form.append('poster', formData.poster);
    form.append('alt', formData.alt);  // Append alt text to form data

    // Send form data to PHP backend
    fetch('http://localhost:8080/luxury/limousine/backend/editposter.php', {
      method: 'POST',
      body: form
    })
    .then(response => response.text())
    .then(data => {
      console.log(data); // Handle success response
    })
    .catch(error => {
      console.error('Error:', error); // Handle error response
    });
  };

  return (
    <>
      <div className="admin-container">
        {/* Sidebar */}
        {isSidebarVisible && <Sidebar />}

        {/* Main Content */}
        <div className="main-content">
          {/* Navbar */}
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="navbar-left">
              <button className="toggle-sidebar btn btn-primary" onClick={toggleSidebar}>
                ☰
              </button>
            </div>
            <div className="navbar-right">
              <span>Admin</span>
              <a href="#" className="logout btn btn-danger ml-3">Logout</a>
            </div>
          </nav>

          {/* Content Area */}
          <div className="content-area">
            <h1 className="add-car-heading mb-4">Edit Home Image</h1>

            {/* Image Form */}
            <form onSubmit={handleSubmit} className="car-form-container">
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group car-form-group">
                    <label htmlFor="poster" className="font-weight-bold">Image:</label>
                    <input
                      type="file"
                      id="poster"
                      name="poster"
                      onChange={handleChange}
                      className="form-control-file car-file-input"
                      required
                    />
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="form-group car-form-group">
                    <label htmlFor="alt" className="font-weight-bold">Alt Text:</label>
                    <input
                      type="text"
                      id="alt"
                      name="alt"
                      value={formData.alt}
                      onChange={handleChange}
                      className="form-control"
                      required
                    />
                  </div>
                </div>
              </div>

              <button type="submit" className="btn btn-success car-submit-btn">Update Image</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Edithomeimage;
