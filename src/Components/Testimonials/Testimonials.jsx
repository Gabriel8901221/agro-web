import React from "react";
import "./Testimonials.css";

const Testimonials = () => {
  return (
    <div id="testimonials" className="t-container">
      <div className="title">
        <h1>Testimonials</h1>
        <h2>of customers</h2>
      </div>

      <div className="testimonials">
        <div className="client">
          <div className="t-top">
            <img src="./user-1.png" alt="" />
            <h3>William Jackson</h3>
          </div>
          <div className="t-details">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
              delectus illum sunt, omnis facilis expedita, alias libero soluta
              commodi obcaecati necessitatibus deleniti repellendus vel quis non
              numquam debitis? Fuga, quas, Lorem, ipsum dolor sit amet
              consectetur adipisicing elit.
            </p>
            <div className="stars">
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
            </div>
          </div>
        </div>
        <div className="client">
          <div className="t-top">
            <img src="./user-2.png" alt="" />
            <h3>Sarah Smith</h3>
          </div>
          <div className="t-details">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
              delectus illum sunt, omnis facilis expedita, alias libero soluta
              commodi obcaecati necessitatibus deleniti repellendus vel quis non
              numquam debitis? Fuga, quas, Lorem, ipsum dolor sit amet
              consectetur adipisicing elit.
            </p>
            <div className="stars">
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
            </div>
          </div>
        </div>
        <div className="client">
          <div className="t-top">
            <img src="./user-3.png" alt="" />
            <h3>David Williams</h3>
          </div>
          <div className="t-details">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
              delectus illum sunt, omnis facilis expedita, alias libero soluta
              commodi obcaecati necessitatibus deleniti repellendus vel quis non
              numquam debitis? Fuga, quas, Lorem, ipsum dolor sit amet
              consectetur adipisicing elit.
            </p>
            <div className="stars">
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star-half-stroke"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
