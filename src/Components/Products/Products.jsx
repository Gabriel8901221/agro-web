import React, { useRef } from "react";
import "./Products.css";

const Products = () => {
  const slider = useRef();
  let tx = 0;

  const slideForward = () => {
    if (tx > -80) {
      tx -= 35;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };

  const slideBackward = () => {
    if (tx < 0) {
      tx += 35;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };

  return (
    <div id="products" className="products">
      <div className="p-title">
        <h2>Best</h2>
        <h1>Products</h1>
      </div>

      <div id="products" className="p-container">
        <button className="prev" onClick={slideBackward}>
          <i class="fa-solid fa-arrow-left"></i>
        </button>
        <div className="p-slider">
          <div className="p-slide" ref={slider}>
            <div className="slide">
              <img src="./product-1.png" alt="" />

              <div className="slide-details">
                <h2>fresh vegetables</h2>
                <p>$ 60,00</p>
              </div>
              <button className="btn-slide">Comprar</button>
            </div>
            <div className="slide">
              <img src="./product-2.png" alt="" />
              <div className="slide-details">
                <h2>fresh vegetables</h2>
                <p>$ 60,00</p>
              </div>
              <button className="btn-slide">Comprar</button>
            </div>
            <div className="slide">
              <img src="./product-1.png" alt="" />
              <div className="slide-details">
                <h2>fresh vegetables</h2>
                <p>$ 60,00</p>
              </div>
              <button className="btn-slide">Comprar</button>
            </div>
            <div className="slide">
              <img src="./product-2.png" alt="" />
              <div className="slide-details">
                <h2>fresh vegetables</h2>
                <p>$ 60,00</p>
              </div>{" "}
              <button className="btn-slide">Comprar</button>
            </div>
            <div className="slide">
              <img src="./product-1.png" alt="" />
              <div className="slide-details">
                <h2>fresh vegetables</h2>
                <p>$ 60,00</p>
              </div>
              <button className="btn-slide">Comprar</button>
            </div>
            <div className="slide">
              <img src="./product-2.png" alt="" />
              <div className="slide-details">
                <h2>fresh vegetables</h2>
                <p>$ 60,00</p>
              </div>{" "}
              <button className="btn-slide">Comprar</button>
            </div>
          </div>
        </div>{" "}
        <button className="next" onClick={slideForward}>
          <i class="fa-solid fa-arrow-right"></i>
        </button>
      </div>
    </div>
  );
};

export default Products;
