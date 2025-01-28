import React from "react";
import { Link } from "react-router-dom";

function BeforeBooking() {
  return (
    <>
      <div className="container my-5">
        <center data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500">
          <h1>What Should I Know Before Booking</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio cum
            mollitia similique <br />
            dicta illum. Adipisci quibusdam modi porro unde ex.
          </p>
        </center>
        <br />
        <div className="row m-auto my-3" style={{ justifyContent: "center" }}>
          <div className="col-md-3 beforecard" data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine">
            <div class="card" style={{ width: "18rem;" }}>
              <img
                src="https://plus.unsplash.com/premium_photo-1733076557959-988a8a8539be?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-3 beforecard" data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine">
            <div class="card" style={{ width: "18rem;" }}>
              <img
                src="https://plus.unsplash.com/premium_photo-1733076557959-988a8a8539be?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-3 beforecard"data-aos="fade-left"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine">
            <div class="card" style={{ width: "18rem;" }}>
              <img
                src="https://plus.unsplash.com/premium_photo-1733076557959-988a8a8539be?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-3 beforecard" data-aos="fade-left"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine">
            <div class="card" style={{ width: "18rem;" }}>
              <img
                src="https://plus.unsplash.com/premium_photo-1733076557959-988a8a8539be?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BeforeBooking;
