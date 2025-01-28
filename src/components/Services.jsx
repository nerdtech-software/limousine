import React, { useState } from "react";
import { Link } from "react-router-dom";
import Faq from "./Faq";



function Services() {
 
        const sectionStyle = {
          width: '80%',
          height: '70vh',
          backgroundImage: 'url("https://images.pexels.com/photos/10292241/pexels-photo-10292241.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          position: 'relative',
          margin: '0 auto',
          overflow: 'hidden',
        };
      
        const overlayStyle = {
          position: 'absolute',
          top: '0',
          left: '0',
          right: '0',
          bottom: '0',
          backgroundColor: 'rgba(0, 0, 0, 0.5)', // Black overlay with opacity
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        };
      
        const contentStyle = {
          color: '#fff',
          textAlign: 'center',
          padding: '20px',
        };
      
        
      
        const paragraphStyle = {
          fontSize: '1.25rem',
        };
  
    const sliderImages = [
        "https://images.pexels.com/photos/18003063/pexels-photo-18003063/free-photo-of-a-blue-porsche-car-parked-on-the-street.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        "https://images.pexels.com/photos/18003058/pexels-photo-18003058/free-photo-of-a-yellow-sports-car-driving-down-a-wet-street.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        "https://images.pexels.com/photos/17377918/pexels-photo-17377918/free-photo-of-super-car-wallpaper.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        "https://images.unsplash.com/photo-1524041259334-1c0b7982f84d?q=80&w=2847&auto=format&fit=crop",
    ];
    
    // State to track the active image index
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    console.log(setCurrentImageIndex)

    // Function to handle dot click
   
    return (
        <>
           
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
                    src={sliderImages[currentImageIndex]} // Display image based on current index
                    alt=" text overlay"
                />
            </div>

            <div className="serviceheading p-3" data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine">
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
                                <img data-aos="fade-up"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine" style={{width:"90%"}}
                                    src='https://images.pexels.com/photos/18003058/pexels-photo-18003058/free-photo-of-a-yellow-sports-car-driving-down-a-wet-street.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' // Display image based on current index
                                    alt=""
                                />
                            </div>
                        </div>
                        <div className="col-md-6 best-section-content" data-aos="fade-down"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine">
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

                            <br />
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
                        <div className="col-md-6 best-section-content" data-aos="fade-left"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine">
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
                            <Link to="/booking" className="btn mt-3 bookbtn" >
                                Book Now
                            </Link>
                        </div>
                        <div className="col-md-6 best-section-img">
                            <div
                                id="carouselExampleControls"
                                className="carousel slide"
                                data-bs-ride="carousel"
                            >
                                <img data-aos="fade-up"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine" style={{width:"90%"}}
                                    src='https://images.pexels.com/photos/17377918/pexels-photo-17377918/free-photo-of-super-car-wallpaper.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' // Display image based on current index
                                    alt=""
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="sericesmore">
                <center>
                    <h1 data-aos="fade-up" style={{ fontWeight: "600" }}>
                        WHY TO CHOOSE LIMO SERVICE
                    </h1>
                </center>
                <div className="container row choosecontainer m-auto">
                    <div className="col-md-3 choosecard my-5" data-aos="flip-up">
                        <div className="choose-icon">
                            <i className="fa-solid fa-arrow-rotate-right"></i>
                            <h4>Stress Free Arrival</h4>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro, corrupti.</p>
                        </div>
                    </div>
                    <div className="col-md-3 choosecard" data-aos="flip-left">
                        <div className="choose-icon">
                            <i className="fa-solid fa-arrow-rotate-right"></i>
                            <h4>Seamless Meet And Greets</h4>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis esse quam cumque!</p>
                        </div>
                    </div>
                    <div className="col-md-3 choosecard" data-aos="flip-up">
                        <div className="choose-icon">
                            <i className="fa-solid fa-arrow-rotate-right"></i>
                            <h4>Lorem</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam facere, neque mollitia.</p>
                        </div>
                    </div>
                </div>
            </div>

            <br />

            <div className="container my-5">
                <center>
                    <h1>What Makes Us Best</h1>
                </center>
                <div className="row my-5">
                    <div className="col-md-6 best-section-img" data-aos="fade-up"
     data-aos-anchor-placement="bottom-bottom">
                        <div
                            id="carouselExampleControls"
                            className="carousel slide"
                            data-bs-ride="carousel"
                        >
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img style={{width:"90%"}}
                                        src={sliderImages[currentImageIndex]} // Display image based on current index
                                        className="d-block"
                                        alt="Slide 1"
                                    />
                                </div>
                                <div className="carousel-item">
                                    <img style={{width:"90%"}}
                                        src={sliderImages[1]} // Display next image in array
                                        className="d-block"
                                        alt="Slide 2"
                                    />
                                </div>
                                <div className="carousel-item">
                                    <img style={{width:"90%"}}
                                        src={sliderImages[2]} // Display next image in array
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
                    <div className="col-md-6 best-section-content" data-aos="fade-left"
     data-aos-anchor="#example-anchor"
     data-aos-offset="2000"
     data-aos-duration="500">
                        <h1>
                            Exceptionally Reliable <br />
                            Airport Rental Services <br />At Hi88limo
                        </h1>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
                            dolorem, corporis autem reprehenderit earum! Necessitatibus culpa
                            aspernatur numquam soluta error. Lorem ipsum dolor sit amet
                            consectetur adipisicing elit. Vero qui, eaque praesentium aliquam,
                            dolores natus neque iusto optio vitae.
                        </p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur tempora cumque impedit tenetur numquam modi repellat sequi dolores quam inventore.</p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
                            officiis, rem, commodi debitis esse sapiente laboriosam eveniet
                            error repellendus provident hic consequatur.
                        </p>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus veniam modi optio exercitationem obcaecati voluptatem?</p>

                        <br />
                        <Link to="/booking" className="btn mt-3 bookbtn">
                            Book Now
                        </Link>
                    </div>
                </div>
            </div>
             <br />
             <section style={sectionStyle} data-aos="fade-left"
     data-aos-anchor="#example-anchor"
     data-aos-offset="500"
     data-aos-duration="500">
      <div style={overlayStyle}>
        <div style={contentStyle}>
          {/* <h1 style={headingStyle}>Your Text Goes Here</h1> */}
          <p style={paragraphStyle}>Additional details or description can go here. Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem dolor unde recusandae ad quasi illo labore nihil, mollitia odit laborum eligendi magnam doloribus, corrupti minima iure repellendus. Esse illum laborum reprehenderit atque totam ea provident! Excepturi, doloremque quas, illum iure mollitia officiis eius voluptates, id ea odit ullam eveniet possimus.</p>
          <Link to="/booking" className="btn mt-3 bookbtn">
                            Book Now
                        </Link>
        </div>
      </div>
    </section>
    <br />
    
    <Faq/>
    <br /><br />
        </>
    );
}

export default Services;
