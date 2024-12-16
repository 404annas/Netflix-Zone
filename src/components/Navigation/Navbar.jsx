import React, { useEffect, useRef } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import searchIcon from "../../assets/search_icon.svg";
import bellIcon from "../../assets/bell_icon.svg";
import profileIcon from "../../assets/profile_img.png";
import caretIcon from "../../assets/caret_icon.svg";
import { logOut } from "../../firebase";

const Navbar = () => {
  const navRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (navRef.current) {
        if (window.scrollY >= 80) {
          navRef.current.classList.add("nav-dark");
        } else {
          navRef.current.classList.remove("nav-dark");
        }
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div ref={navRef} className="navbar">
      <div className="nav-left">
        <img src={logo} alt="Netflix Logo" />
        <ul>
          <li>Home</li>
          <li>Shows</li>
          <li>Movies</li>
          <li>Popular</li>
          <li>List</li>
          <li>Language</li>
        </ul>
      </div>
      <div className="nav-right">
        <img src={searchIcon} alt="Search Icon" className="icons" />
        <p>Children</p>
        <img src={bellIcon} alt="Bell Icon" className="icons" />
        <div className="nav-profile">
          <img src={profileIcon} alt="Profile Icon" className="profile" />
          <img src={caretIcon} alt="Dropdown Icon" />
          <div className="dropdown">
            <p
              onClick={() => {
                logOut();
              }}
            >
              Sign Out Of Netflix
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
