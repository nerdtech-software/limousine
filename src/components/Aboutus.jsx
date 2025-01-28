import React, { useState } from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import Whychoose from "./Whychoose";
import Faq from "./Faq";

function Aboutus() {
  const sectionStyle = {
    width: "80%",
    height: "70vh",
    backgroundImage:
      'url("https://images.pexels.com/photos/10292241/pexels-photo-10292241.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")',
    backgroundSize: "cover",
    backgroundPosition: "center",
    position: "relative",
    margin: "0 auto",
    overflow: "hidden",
  };

  const overlayStyle = {
    position: "absolute",
    top: "0",
    left: "0",
    right: "0",
    bottom: "0",
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Black overlay with opacity
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  const contentStyle = {
    color: "#fff",
    textAlign: "center",
    padding: "20px",
  };

  const headingStyle = {
    fontSize: "3rem",
    fontWeight: "bold",
  };

  const paragraphStyle = {
    fontSize: "1.25rem",
  };

  const sliderImages = [
    "https://images.pexels.com/photos/18003063/pexels-photo-18003063/free-photo-of-a-blue-porsche-car-parked-on-the-street.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/18003058/pexels-photo-18003058/free-photo-of-a-yellow-sports-car-driving-down-a-wet-street.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/17377918/pexels-photo-17377918/free-photo-of-super-car-wallpaper.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.unsplash.com/photo-1524041259334-1c0b7982f84d?q=80&w=2847&auto=format&fit=crop",
  ];

  // State to track the active image index
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Function to handle dot click
  const handleDotClick = (index) => {
    setCurrentImageIndex(index);
  };

  return (
    <>
      <Navbar />
      <div className="image-container">
        <div className="overlay">
          <div className="contnet">
            <h1>
              Chicago's Premium Private <br />
              Car Rental Service
            </h1>
            <Link
              style={{
                fontSize: "12px",
                background: "orange",
              }}
              to="/booknow"
              className="btn mt-3"
            >
              Book Now
            </Link>
          </div>
        </div>
        <img
          src="https://images.pexels.com/photos/10292241/pexels-photo-10292241.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" // Display image based on current index
          alt="Image with text overlay"
        />
      </div>

      <div
        className="serviceheading p-3"
        data-aos="fade-right"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
      >
        <center className="container">
          <h5 style={{ textTransform: "capitalize" }}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et
            quibusdam error dicta quo <br />
            in quod veniam libero ea, necessitatibus porro minima. <br />
            Qui, asperiores recusandae.
          </h5>
        </center>
      </div>
      <br />

      <div className="serviceSection">
        <div className="container">
          <div className="row my-5">
            <div className="col-md-6 best-section-img">
              <div
                id="carouselExampleControls"
                className="carousel slide"
                data-bs-ride="carousel"
              >
                <img
                  data-aos="fade-up"
                  data-aos-offset="300"
                  data-aos-easing="ease-in-sine"
                  style={{ width: "90%" }}
                  src="https://images.pexels.com/photos/13474778/pexels-photo-13474778.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" // Display image based on current index
                  alt=""
                />
              </div>
            </div>
            <div
              className="col-md-6 best-section-content"
              data-aos="fade-down"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
            >
              <h1>
                The Best Limo Service <br />
                To O'Hare Airport With <br />
                Exclusive City Perks{" "}
              </h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Recusandae perferendis voluptatem quasi dolores omnis modi
                voluptatum blanditiis aspernatur totam sit sunt libero ullam
                reprehenderit qui quam, nesciunt, nostrum earum accusantium
                harum voluptas repellat tempora! Esse nulla numquam nihil iure
                soluta.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
                magnam quae consectetur exercitationem ducimus porro minus culpa
                consequatur placeat quaerat!
              </p>

              
              <Link to="/booking" className="btn mt-3 bookbtn">
                Book Now
              </Link>
            </div>
          </div>
        </div>
      </div>
      <br />

      <div className="serviceSection">
        <div className="container">
          <div className="row my-5">
            <div
              className="col-md-6 best-section-content"
              data-aos="fade-left"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
            >
              <h1>
                The Best Limo Service <br />
                To O'Hare Chicago With <br />
                Exclusive City Perks{" "}
              </h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Recusandae perferendis voluptatem quasi dolores omnis modi
                voluptatum blanditiis aspernatur totam sit sunt libero ullam
                reprehenderit qui quam, nesciunt, nostrum earum accusantium
                harum voluptas repellat tempora! Esse nulla numquam nihil iure
                soluta.
              </p>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Minima, cupiditate inventore nulla perferendis necessitatibus
                libero ipsam dolorum recusandae tenetur eveniet. Quod blanditiis
                aliquam necessitatibus nisi perferendis corporis aperiam illum
                distinctio sint. Ex, reiciendis! Magnam assumenda cum
                aspernatur? Optio, non error?x
              </p>

              {/* <br /> */}
              <Link to="/booking" className="btn mt-3 bookbtn">
                Book Now
              </Link>
            </div>
            <div className="col-md-6 best-section-img">
              <div
                id="carouselExampleControls"
                className="carousel slide"
                data-bs-ride="carousel"
              >
                <img
                  data-aos="fade-up"
                  data-aos-offset="300"
                  data-aos-easing="ease-in-sine"
                  style={{ width: "90%" }}
                  src="https://images.pexels.com/photos/5046305/pexels-photo-5046305.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" // Display image based on current index
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>

    
      <br />
    </>
  );
}

export default Aboutus;
