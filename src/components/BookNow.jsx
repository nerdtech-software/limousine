import React, { useState } from "react";
import Navbar from "./Navbar";

const BookNow = () => {
    const formStyle={
        width:"95%",
        maxWidth:"100%",
    }
  // Form data state
  const [formData, setFormData] = useState({
    service_type: "",
    name: "",
    phone_no: "",
    pickup_date: "",
    pickup_time: "",
    pickup_location: "",
    drop_location: "",
    quantity: 1, // Added quantity to formData
    luggage: 0, // Added luggage to formData
  });

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]:
        name === "quantity" || name === "luggage"
          ? Math.max(0, parseInt(value, 10) || 0)
          : value, // Ensure non-negative values for quantity and luggage
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation: Ensure all fields are filled
    for (const key in formData) {
      if (!formData[key] && key !== "luggage") {
        // Allow luggage to be 0
        alert(`Please fill in the ${key.replace("_", " ")} field.`);
        return;
      }
    }

    try {
      const response = await fetch(
        "http://localhost:8080/luxury/limousine/backend/booking.php",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const result = await response.json();

      if (response.ok) {
        alert(result.message || "Booking successful!");
      } else {
        throw new Error(result.message || "Booking failed.");
      }
    } catch (error) {
      console.error("Error during booking:", error);
      alert("An error occurred. Please try again.");
    }
  };

  // Increment and decrement quantity
  const increaseQuantity = () => {
    setFormData((prevData) => ({
      ...prevData,
      quantity: prevData.quantity + 1,
    }));
  };

  const decreaseQuantity = () => {
    setFormData((prevData) => ({
      ...prevData,
      quantity: prevData.quantity > 1 ? prevData.quantity - 1 : 1,
    }));
  };

  // Increment and decrement luggage
  const increaseLuggage = () => {
    setFormData((prevData) => ({
      ...prevData,
      luggage: prevData.luggage + 1,
    }));
  };

  const decreaseLuggage = () => {
    setFormData((prevData) => ({
      ...prevData,
      luggage: prevData.luggage > 0 ? prevData.luggage - 1 : 0,
    }));
  };

  return (
  <>
  <Navbar/>
  <div className="image-container">
        <div className="overlay">
          <div className="contnet">
            <h1>Book Now</h1>
            <p>Additional text can go here</p>
          </div>
        </div>
        <img
          src="https://images.unsplash.com/photo-1606400142640-69e81d222bcb?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Image with text overlay"
        />
      </div>
    <div className="formSection">
    
    <center className="my-5">
          <h1>Book your cab</h1>
      
    </center>
          
      <div className="row" style={{display:"flex;", margin:"auto",justifyContent:"center",}}>
       
        <div className="col-md-8">
          <form className="form" onSubmit={handleSubmit} style={formStyle}>
            <div>
              <label>Service Type</label>
              <select
                name="service_type"
                value={formData.service_type}
                onChange={handleChange}
                required
              >
                <option value="">Select Service Type</option>
                <option value="Taxi">Taxi</option>
                <option value="Delivery">Delivery</option>
                <option value="Courier">Courier</option>
              </select>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div>
                  <label>Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div>
                  <label>Phone Number</label>
                  <input
                    type="tel"
                    name="phone_no"
                    value={formData.phone_no}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-6">
                <div>
                  <label>Pickup Date</label>
                  <input
                    type="date"
                    name="pickup_date"
                    value={formData.pickup_date}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div>
                  <label>Pickup Time</label>
                  <input
                    type="time"
                    name="pickup_time"
                    value={formData.pickup_time}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-6">
                <div>
                  <label>Pickup Location</label>
                  <input
                    type="text"
                    name="pickup_location"
                    value={formData.pickup_location}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div>
                  <label>Drop Location</label>
                  <input
                    type="text"
                    name="drop_location"
                    value={formData.drop_location}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-6">
                <div className="quantity-section">
                  <label>Quantity</label>
                  <div className="quantity-controls" style={{display:"block"}}>
                    <button style={{width:'45px'}}
                      className="btns"
                      type="button"
                      onClick={decreaseQuantity}
                    >
                      -
                    </button>
                    <input
                      type="number"
                      name="quantity"
                      value={formData.quantity}
                      onChange={handleChange}
                      min="1"
                    />
                    <button style={{width:'45px'}}
                      className="btns"
                      type="button"
                      onClick={increaseQuantity}
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="quantity-section">
                  <label>Luggage</label>
                  <div className="quantity-controls" style={{display:"block"}}>
                    <button style={{width:'45px'}}
                      className="btns"
                      type="button"
                      onClick={decreaseLuggage}
                    >
                      -
                    </button>
                    <input
                      type="number"
                      name="luggage"
                      value={formData.luggage}
                      onChange={handleChange}
                      min="0"
                    />
                    <button style={{width:'45px'}}
                      className="btns"
                      type="button"
                      onClick={increaseLuggage}
                    >
                      +
                    </button> 
                  </div>
                </div>
              </div>
            </div>

            {/* Quantity Section */}

            {/* Luggage Section */}

            <button type="submit">Book</button>
          </form>
        </div>
      </div>
    </div>
  </>
  );
};

export default BookNow;
