import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <div id="home" className="hero">
      <div className="hero-container">
        <h3>Hello, welcome to </h3>
        <h1>AgroMax.</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
          doloremque, eveniet voluptate dicta nisi necessitatibus deserunt
          numquam accusamus! Tempore et culpa quisquam quae est aliquid officiis
          minus quas vel eveniet, Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Voluptatibus, eaque dolore incidunt odit rem beatae
          maiores labore id fugiat, ducimus similique, iste molestiae a? Vero
          molestiae harum culpa nihil velit?
        </p>

        <div className="buttons">
          <button className="b-contact">Contact Us</button>
          <button className="b-services">Services</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
