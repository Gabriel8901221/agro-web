import React from "react";
import "./Services.css";

const Services = () => {
  return (
    <div id="services" className="services">
      <div className="s-title">
        <h3>Our</h3>
        <h1>Services</h1>
      </div>
      <div className="s-container">
        <div className="s-details">
          <h2>Organic Farm</h2>
          <h2>Services</h2>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
            architecto omnis accusantium cumque hic Lorem ipsum dolor sit amet
            consectetur adipisicing.
          </p>

          <button>Contact Us</button>
        </div>
        <div className="s-info">
          <i class="fa-solid fa-carrot"></i>
          <h3>Fresh Vegetables</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
            architecto omnis accusantium cumque hic
          </p>
        </div>
        <div className="s-info">
          <i class="fa-solid fa-apple-whole"></i>
          <h3>Fresh Fruits</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
            architecto omnis accusantium cumque hic
          </p>
        </div>
        <div className="s-info">
          <i class="fa-solid fa-dog"></i>
          <h3>Healty Cattle</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
            architecto omnis accusantium cumque hic
          </p>
        </div>
        <div className="s-info">
          <i class="fa-solid fa-tractor"></i>
          <h3>Modern Truck</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
            architecto omnis accusantium cumque hic
          </p>
        </div>
        <div className="s-info">
          {" "}
          <i class="fa-solid fa-seedling"></i>
          <h3>Farming Plans</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
            architecto omnis accusantium cumque hic
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
