import emailjs from '@emailjs/browser';
import React, { useRef } from 'react';

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'YOUR_SERVICE_ID', // Replace with your EmailJS service ID
        'YOUR_TEMPLATE_ID', // Replace with your EmailJS template ID
        form.current,
        'YOUR_PUBLIC_KEY' // Replace with your EmailJS public key
      )
      .then(
        (result) => {
          alert('Message sent successfully!');
          console.log(result.text);
        },
        (error) => {
          alert('Failed to send message. Please try again later.');
          console.error(error.text);
        }
      );
  };

  return (
    <>
      
      <div className="container contact-section">
        <div className="row">
          {/* Left Column */}
          <div className="col-md-4 mb-4">
            <h4>Contact Us</h4>
            <div className="contact-details">
              <p>
                <i className="bi bi-geo-alt"></i> New Jersey, USA
              </p>
              <p>
                <i className="bi bi-telephone"></i> 0123 456 789
              </p>
              <p>
                <i className="bi bi-envelope"></i> info@raja.com
              </p>
            </div>
            <iframe
              className="contact-map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.83543450941!2d-122.41941548468138!3d37.77492977975879!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858064cb466f4f%3A0x1cb9e2e1e93bbdb7!2sSan%20Francisco%2C%20CA%2C%20USA!5e0!3m2!1sen!2sin!4v1685619738271!5m2!1sen!2sin"
              allowFullScreen=""
              loading="lazy"
              title='map'
            ></iframe>
          </div>

          {/* Right Column */}
          <div className="col-md-8">
            <h4>Write your Message</h4>
            <form ref={form} onSubmit={sendEmail}>
              <div className="row">
                <div className="col-md-6 mb-3">
                  <label htmlFor="fullName" className="form-label">
                    Full name *
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name="fullName"
                    id="fullName"
                    placeholder="Name"
                    required
                  />
                </div>
                <div className="col-md-6 mb-3">
                  <label htmlFor="email" className="form-label">
                    Email *
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    id="email"
                    placeholder="johndoe@gmail.com"
                    required
                  />
                </div>
                <div className="col-md-6 mb-3">
                  <label htmlFor="phone" className="form-label">
                    Phone *
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name="phone"
                    id="phone"
                    placeholder="Phone"
                    required
                  />
                </div>
                <div className="col-md-6 mb-3">
                  <label htmlFor="subject" className="form-label">
                    Subject *
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name="subject"
                    id="subject"
                    placeholder="Subject..."
                    required
                  />
                </div>
                <div className="col-12 mb-3">
                  <label htmlFor="message" className="form-label">
                    Message *
                  </label>
                  <textarea
                    className="form-control"
                    name="message"
                    id="message"
                    rows="4"
                    placeholder="Your message goes here..."
                    required
                  ></textarea>
                </div>
              </div>
              <button type="submit" className="btn btn-custom">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
