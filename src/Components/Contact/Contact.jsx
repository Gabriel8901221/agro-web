import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div id="contact" className="contact">
      <h1>
        Contact <span>Us</span>
      </h1>
      <div className="c-container">
        <div className="c-left">
          <h3>Send us a message</h3>
          <p>
            Feel free to reach out through contact form or find our contact
            information below. Your feedback, questions, and suggestions are
            important to us as we strive to provide expeptional service to our
            university community.
          </p>
          <div className="i-contact">
            <i class="fa-solid fa-envelope"></i>
            <p>Contact@tr.dev</p>
          </div>
          <div className="i-contact">
            <i class="fa-solid fa-phone"></i>
            <p>021 545 234 23</p>
          </div>
          <div className="i-contact">
            <i class="fa-solid fa-location-dot"></i>
            <p>United States</p>
          </div>
        </div>
        <div className="c-right">
          <form>
            <label>Your name</label>
            <input type="text" placeholder="Enter your name" required />
            <label>Phone Number</label>
            <input type="tel" placeholder="Enter your mobile number" required />
            <label>Write your messages here</label>
            <textarea
              name="message"
              rows="6"
              placeholder="Enter your message"
              required
            ></textarea>
            <button>
              Submit now
              <i class="fa-solid fa-arrow-right"></i>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
