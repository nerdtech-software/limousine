import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import '../App.css';

function Homeimage() {
  const [imageData, setImageData] = useState(null);

  useEffect(() => {
    // Fetch image data from the backend
    fetch("http://localhost:8080/luxury/limousine/backend/add_newposter.php")  // Replace with your correct API endpoint
      .then((response) => response.json())
      .then((data) => {
        if (data.status === "success") {
          setImageData(data);  // Set the image data to state
        } else {
          console.error("Error fetching image:", data.message);
        }
      })
      .catch((error) => console.error("Error:", error));
  }, []);

  if (!imageData) {
    return <div>Loading...</div>; // Display loading message while waiting for data
  }

  return (
    <div className="image-container">
      <div className="overlay">
        <div className="contents">
          <h1>Top Rated Limousine</h1>
          <h1>Service in Chicago, IL</h1>
          <Link to="/booking" className="btn  mt-3 bookbtn">
              Book Now
            </Link>
        </div>
      </div>
      <img
  src={`http://localhost:8080/luxury/limousine/${imageData.poster_img}`}
  alt={imageData.poster_alt}
  style={{ width: "100%", height: "auto" }}
/>

    </div>
  );
}

export default Homeimage;

// import React from "react";

// function Homeimage() {
//   return (
//     <>
//       <div className="image-container">
//         <div className="overlay">
//           <div className="contnet">
//             <h1>Your Text Here</h1>
//             <p>Additional text can go here</p>
//           </div>
//         </div>
//         <img
//           src="https://images.unsplash.com/photo-1704340142770-b52988e5b6eb?q=80&w=2900&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//           alt="Image with text overlay"
//         />
//       </div>
//     </>
//   );
// }

// export default Homeimage;
