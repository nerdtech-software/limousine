import React from "react";
import { Link } from "react-router-dom";

function Limoservice() {
  return (
    <div className="limoservice my-5">
      <div className="container">
        <div className="row">
          <div className="col-md-8 service-content" data-aos="fade-down-left">
            <h3>LIMO SERVICE</h3>
            <p>
              Hi88Limo goes beyond ordinary car services, offering a variety of
              limousine options to elevate any event. Whether you require a
              professional presence for corporate events, a dignified ride for
              funerals, or a luxurious start or end to your journey, we’ll have
              the perfect limousine service for you:
            </p>
          </div>
          <div className="col-md-4 service-btn" data-aos="fade-left">
            <Link className="servebtn" to="">
              Book Now
            </Link>
          </div>
        </div>
        <br />
        <hr />
        <div className="row my-5">
          <div
            className="col-md-3"
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
          >
            <div className="serviceCard">
              <h4>Concerts</h4>
              <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer typesetting industry
              </p>
            </div>
          </div>
          <div
            className="col-md-3"
            data-aos="flip-right"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
          >
            <div className="serviceCard">
              <h4>Grand Enterance</h4>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos
                consequatur in quasi mollitia, laborum commodi omnis nulla ipsa
                illum molestiae?
              </p>
            </div>
          </div>
          <div
            className="col-md-3"
            data-aos="flip-up"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
          >
            <div className="serviceCard">
              <h4>GLuxury Locations</h4>
              <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer typesetting industry
              </p>
            </div>
          </div>
          <div
            className="col-md-3"
            data-aos="flip-down"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
          >
            <div className="serviceCard">
              <h4>Grand Enterance</h4>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos
                consequatur in quasi mollitia, laborum commodi omnis nulla ipsa
                illum molestiae?
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Limoservice;
