import React, { useEffect, useState } from 'react';
import '../admin.css';
import Sidebar from './Sidebar';

function BookList() {
  const [isSidebarVisible, setSidebarVisible] = useState(true);
  const [bookings, setBookings] = useState([]); // Store fetched booking data

  // Fetch bookings from the backend
  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const response = await fetch('http://localhost:8080/luxury/limousine/backend/fetch_bookings.php'); // Update with your correct URL
        const data = await response.json();
        setBookings(data);
      } catch (error) {
        console.error('Error fetching bookings:', error);
      }
    };

    fetchBookings();
  }, []);

  // Handle Approve and Delete actions
  const handleApprove = (id) => {
    // Your logic to approve the booking (e.g., updating status in the backend)
    alert(`Booking ${id} approved`);
  };

  const handleDelete = (id) => {
    // Your logic to delete the booking (e.g., sending a request to backend)
    alert(`Booking ${id} deleted`);
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
            <button className="toggle-sidebar" onClick={() => setSidebarVisible(!isSidebarVisible)}>
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
          <h1>Bookings</h1>

          {/* Booking Table */}
          <table className="table table-striped table-bordered table-responsive">
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Service Type</th>
                <th>Phone No</th>
                <th>Pickup Date</th>
                <th>Pickup Time</th>
                <th>Pickup Location</th>
                <th>Drop Location</th>
                <th>Quantity</th>
                <th>Luggage</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {bookings.length > 0 ? (
                bookings.map((booking) => (
                  <tr key={booking.id}>
                    <td>{booking.id}</td>
                    <td>{booking.name}</td>
                    <td>{booking.service_type}</td>
                    <td>{booking.phone_no}</td>
                    <td>{booking.pickup_date}</td>
                    <td>{booking.pickup_time}</td>
                    <td>{booking.pickup_location}</td>
                    <td>{booking.drop_location}</td>
                    <td>{booking.quantity}</td>
                    <td>{booking.luggage}</td>
                    <td>
                      <button
                        className="btn btn-success"
                        onClick={() => handleApprove(booking.id)}
                        disabled={booking.status === 'Approved'}>
                        Approve
                      </button>
                      <button
                        className="btn btn-danger ml-2"
                        onClick={() => handleDelete(booking.id)}>
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="11">No bookings available</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default BookList;
