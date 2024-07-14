import React, { useEffect, useState } from "react";
import "./Header.css";

const Header = () => {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    });
  }, []);

  const [mobileMenu, setMobileMenu] = useState(false);

  const toggleMenu = () => {
    mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
  };

  return (
    <div className={`header ${sticky ? "dark-nav" : ""}`}>
      <div className="h-container">
        <div className="logo">
          <i class="fa-brands fa-pagelines"></i>
          <h2>AgroMax</h2>
        </div>
        <ul className={mobileMenu ? "h-categories" : "hide-mobile-menu"}>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#products">Products</a>
          <a href="#testimonials">Testimonials</a>
          <button><a className="c-btn" href="#contact">Contact</a></button>
        </ul>
        <img
          src="./menu-icon.png"
          alt=""
          className="menu-icon"
          onClick={toggleMenu}
        />
      </div>
    </div>
  );
};

export default Header;
