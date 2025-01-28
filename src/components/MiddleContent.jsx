import React from "react";
import { Link } from "react-router-dom";
// import "@fortawesome/fontawesome-free/css/all.min.css";
// import "bootstrap/dist/css/bootstrap.min.css";

function MiddleContent() {
  return (
    <div className="middlesection my-5">
      <div className="container">
        <div className="row">
          <div className="col-md-6 middlecontent" data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine">
            <h2>Key Points About Raja <br />Luxury Limousine </h2>

            <div className="points my-4">
              <div className="pointsicon">
                <i className="fa-solid fa-circle-right"></i>
              </div>
              <div className="pointsContent">
                <h5>Late-Model Vehicles</h5>
                <p>
                Hi88Limo maintains a fleet of up-to-date vehicles to ensure comfort, reliability, and safety.
                </p>
              </div>
            </div>
            <div className="points">
              <div className="pointsicon">
                <i className="fa-solid fa-circle-right"></i>
              </div>
              <div className="pointsContent">
                <h5>Diverse Options:</h5>
                <p>Hi88Limo maintains a fleet of up-to-date vehicles to ensure comfort, reliability, and safety.</p>
              </div>
            </div>
            <div className="points">
              <div className="pointsicon">
                <i className="fa-solid fa-circle-right"></i>
              </div>
              <div className="pointsContent">
                <h5>Luxury and Comfort:</h5>
                <p>Hi88Limo maintains a fleet of up-to-date vehicles to ensure comfort, reliability, and safety.</p>
              </div>
            </div>
            <div className="points">
              <div className="pointsicon">
                <i className="fa-solid fa-circle-right"></i>
              </div>
              <div className="pointsContent">
                <h5>Party Atmosphere: </h5>
                <p>Hi88Limo maintains a fleet of up-to-date vehicles to ensure comfort, reliability, and safety.</p>
              </div>
            </div>
            <Link to="/booking" className="btn  mt-3 bookbtn">
              Book Now
            </Link>
          </div>
          <div className="col-md-6 middleimage">
            <img
              src="https://images.pexels.com/photos/4083523/pexels-photo-4083523.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="Luxury Limousine" data-aos="flip-right"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MiddleContent;
