import React, { useEffect, useState } from "react";

function Carcards() {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/luxury/limousine/backend/get_cars.php")
      .then((response) => response.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setCars(data); // Set data only if it's an array
        } else {
          console.error("Expected an array but got:", data);
          setCars([]); // Fallback to an empty array
        }
      })
      .catch((error) => console.error("Error fetching cars data:", error));
  }, []);

  return (
    <div className="carContainer">
      <div className="row container carbox">
        {cars.map((car, index) => (
          <div key={index} className="col-md-2 carscontent" data-aos="fade-up"
          data-aos-duration="2000">
            <img
              className="carimage"
              src={`http://localhost:8080/luxury/limousine/${car.car_img}`}
              alt={car.id || "Car image"} 
            />
            <p>{car.content || "Car content"}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Carcards;
