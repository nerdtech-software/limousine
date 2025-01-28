import React, { useState } from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import Whychoose from "./Whychoose";
import Faq from "./Faq";

function Vehicle() {
  // Image data for the slider
  const sliderImages = [
    "https://images.unsplash.com/photo-1583668925503-7fcc6606934c?q=80&w=2847&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1593642532973-d31b6557fa68?q=80&w=2847&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?q=80&w=2847&auto=format&fit=crop",
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
            <h1>Chicago's Primium Private <br />Car Rental Service</h1>
            <Link style={{
                fontSize:"12px;", background:"orange"
            }} to="/booknow" className="btn  mt-3 ">
              Book Now
            </Link>
          </div>
        </div>
        <img
          src="https://images.pexels.com/photos/2127733/pexels-photo-2127733.jpeg?auto=compress&cs=tinysrgb&w=800"
          alt="Image with text overlay"
        />
      </div>
      <br />

      <center className="container">
        <h5 style={{color:"orange"}}>best rental cab</h5>
        <h1>
          Why Choose Our Chicago Limo <br /> Rental Service And Car Service
        </h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.Voluptate
          repellat pariatur eligendi perferendis harum animi, atque omnis,{" "}
          <br /> aspernatur quasi cupiditate recusandae quia asperiores nobis
          veritatis, nihil magnam suscipit autem tenetur.
        </p>
      </center>

      <div className="container my-5">
        <center>
          <h1>What Makes Us Best</h1>
        </center>
        <div className="row my-5">
          <div className="col-md-6 best-section-img">
            <div
              id="carouselExampleControls"
              className="carousel slide"
              data-bs-ride="carousel"
            >
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img
                    src="https://images.unsplash.com/photo-1583668925503-7fcc6606934c?q=80&w=2847&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    className="d-block"
                    alt="Slide 1"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src="https://images.unsplash.com/photo-1605034647770-c8c1eece388c?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    className="d-block"
                    alt="Slide 2"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src="https://images.unsplash.com/photo-1629059309488-a471c4bf27d5?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    className="d-block"
                    alt="Slide 3"
                  />
                </div>
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleControls"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleControls"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>

          <div className="col-md-6 best-section-content">
            <p>
              {" "}
              <span>Punctuality</span> Lorem, ipsum dolor sit amet consectetur
              adipisicing elit. Obcaecati debitis, accusamus dolore magnam porro
              harum.
            </p>
            <p>
              {" "}
              <span>Punctuality</span> Lorem, ipsum dolor sit amet consectetur
              adipisicing elit. Obcaecati debitis, accusamus dolore magnam porro
              harum.
            </p>
            <p>
              {" "}
              <span>Punctuality</span> Lorem, ipsum dolor sit amet consectetur
              adipisicing elit. Obcaecati debitis, accusamus dolore magnam porro
              harum.
            </p>
            <br />
            <Link to="/booking" className="btn  mt-3 bookbtn">
              Book Now
            </Link>
          </div>
        </div>
      </div>
      <div className="secondsection">
        <div className="container">
          <div className="row my-5">
            <div className="col-md-6 best-section-content">
                <h2>Seamless <br />Transportation</h2>
              <p>
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae perferendis voluptatem quasi dolores omnis modi voluptatum blanditiis aspernatur totam sit sunt libero ullam reprehenderit qui quam, nesciunt, nostrum earum accusantium harum voluptas repellat tempora! Esse nulla numquam nihil iure soluta.
              </p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum magnam quae consectetur exercitationem ducimus porro minus culpa consequatur placeat quaerat!</p>
              
              <br />
              <Link to="/booking" className="btn  mt-3 bookbtn">
                Book Now
              </Link>
            </div>
            <div className="col-md-6 best-section-img">
              <div
                id="carouselExampleControls"
                className="carousel slide"
                data-bs-ride="carousel"
              >
                <img src="https://images.unsplash.com/photo-1629059309488-a471c4bf27d5?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>

   <br />
   <br />

   <Whychoose/>

   <center className="container"><h1>We Offer More Then Just Car</h1>
   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut,  ullam! Incidunt  <br />tempora modi necessitatibus quas sit,  aspernatur veniam <br />totam expedita.</p></center>

        <div className="middlesections my-5">
              <div className="container">
                <div className="row">
                  <div className="col-md-6 middlecontent" data-aos="fade-right"
             data-aos-offset="300"
             data-aos-easing="ease-in-sine">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At modi rerum, quisquam quaerat consequatur a maxime. Dolorum mollitia eveniet placeat totam quibusdam doloremque voluptatibus dolore alias consectetur modi? Vitae, perspiciatis!</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem tenetur debitis enim quibusdam tempora est consequatur iusto aliquam ad dicta.</p>
        
                   <ul>
                    <li>
                    <i class="fa-solid fa-plus"></i>  Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit.
                    </li>
                    <li>
                    <i class="fa-solid fa-plus"></i>  Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur adipisicing.
                    </li>
                    <li>
                    <i class="fa-solid fa-plus"></i>  Lorem ipsum dolor sit amet, consectetur
                    </li>
                    <li>
                    <i class="fa-solid fa-plus"></i>  Lorem ipsum dolor sit amet, consectetur
                    </li>
                    
                   </ul>
                   
                  </div>
                  <div className="col-md-6 middleimage">
                    <img
                      src="https://images.unsplash.com/photo-1734899848867-02ac05338425?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt="Luxury Limousine" data-aos="flip-right"
                    />
                  </div>
                </div>
              </div>
            </div>


<br />
<Faq/>
<br />
<br />

    </>
  );
}

// Inline Styles for Slider
const sliderContainerStyles = {
  textAlign: "center",
  marginTop: "30px",
};

const imageStyles = {
  width: "100%",
  maxWidth: "600px",
  height: "auto",
  borderRadius: "10px",
};

const dotsContainerStyles = {
  display: "flex",
  justifyContent: "center",
  marginTop: "10px",
};

const dotStyles = {
  height: "12px",
  width: "12px",
  margin: "0 5px",
  borderRadius: "50%",
  cursor: "pointer",
  transition: "background-color 0.3s ease",
};

export default Vehicle;
