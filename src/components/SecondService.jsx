import React from 'react'
import { Link } from "react-router-dom";

function SecondService() {
  return (
   <>
    <div className="middlesection my-5">
      <div className="container">
        <div className="row">
        <div className="col-md-6 middleimage">
            <img data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000"
              src="https://images.pexels.com/photos/6239334/pexels-photo-6239334.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="Luxury Limousine"
            />
          </div>
          <div className="col-md-6 middlecontent" data-aos="fade-up"
     data-aos-anchor-placement="bottom-bottom">
            <h2>KEY POINTS OF RAJA LUXURY LIMOUSINE.</h2>

            <div className="points my-4">
              <div className="pointsicon">
                <i className="fa-solid fa-circle-right"></i>
              </div>
              <div className="pointsContent">
                <h5>Lorem</h5>
                <p>
                  Lorem ipsum dolor sit amet. Lorem, ipsum dolor sit amet
                  consectetur adipisicing elit. Fugit accusamus pariatur
                  quaerat.
                </p>
              </div>
            </div>
            <div className="points">
              <div className="pointsicon">
                <i className="fa-solid fa-circle-right"></i>
              </div>
              <div className="pointsContent">
                <h5>Lorem</h5>
                <p>Lorem ipsum dolor sit amet.</p>
              </div>
            </div>
            <Link to="/booking" className="btn  mt-3 bookbtn">
              Book Now
            </Link>
          </div>
         
        </div>
      </div>
    </div>
   </>
  )
}

export default SecondService