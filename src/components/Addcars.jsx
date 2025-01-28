import React, { useState } from 'react';
import Sidebar from './Sidebar';
import '../admin.css';


function Addcars() {
  const [isSidebarVisible, setSidebarVisible] = useState(true);
  const [formData, setFormData] = useState({
    car_img: null,
    content: ''
  });

  const toggleSidebar = () => {
    setSidebarVisible(!isSidebarVisible);
  };

  // Handle input change
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'car_img') {
      const file = files[0];

      // Validate file size and type
      if (file.size > 5000000) { // 5MB
        alert('File is too large. Please upload a file less than 5MB.');
        return;
      }
      const validTypes = ['image/jpeg', 'image/png', 'image/gif'];
      if (!validTypes.includes(file.type)) {
        alert('Invalid file type. Please upload a JPG, PNG, or GIF.');
        return;
      }

      setFormData({
        ...formData,
        [name]: file
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
    form.append('car_img', formData.car_img);
    form.append('content', formData.content);

    // Send form data to PHP backend
    fetch('http://localhost:8080/luxury/limousine/backend/cars.php', {
      method: 'POST',
      body: form
    })
      .then(response => response.text())
      .then(data => {
        console.log(data); // Handle success response
        alert('Car added successfully!');
      })
      .catch(error => {
        console.error('Error:', error); // Handle error response
        alert('There was an error adding the car.');
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
            <h1 className="add-car-heading mb-4">Add New Car</h1>

            {/* Car Form */}
            <form onSubmit={handleSubmit} className="car-form-container">
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group car-form-group">
                    <label htmlFor="car_img" className="font-weight-bold">Car Image:</label>
                    <input
                      type="file"
                      id="car_img"
                      name="car_img"
                      onChange={handleChange}
                      className="form-control-file car-file-input"
                      required
                    />
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="form-group car-form-group">
                    <label htmlFor="content" className="font-weight-bold">Content:</label>
                    <textarea
                      id="content"
                      name="content"
                      value={formData.content}
                      onChange={handleChange}
                      className="form-control car-textarea"
                      rows="4"
                      required
                    ></textarea>
                  </div>
                </div>
              </div>

              <button type="submit" className="btn btn-success car-submit-btn">Add Car</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Addcars;
