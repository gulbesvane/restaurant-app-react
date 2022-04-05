import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faLinkedin,
  faYelp,
  faGoogle,
} from "@fortawesome/free-brands-svg-icons";

function Navbar() {
  return (
    <div className="topnav" id="myTopnav">
      <div>
        <FontAwesomeIcon className="starIcon" icon={faStar} />
      </div>
      <div className="navItems">
        <Link className="navItem" to="/">
          Home
        </Link>
        <Link className="navItem" to="/menu">
          Menu
        </Link>
        <Link className="navItem" to="/about">
          About
        </Link>
        <Link className="navItem" to="/contact">
          Contact
        </Link>
      </div>
      <div className="socialmediaIcons">
        <a href="https://google.com" target="_blank">
          <FontAwesomeIcon className="socialIcon" icon={faFacebook} />
        </a>
        <a href="https://google.com" target="_blank">
          <FontAwesomeIcon className="socialIcon" icon={faLinkedin} />
        </a>
        <a href="https://google.com" target="_blank">
          <FontAwesomeIcon className="socialIcon" icon={faYelp} />
        </a>
        <a href="https://google.com" target="_blank">
          <FontAwesomeIcon className="socialIcon" icon={faGoogle} />
        </a>
      </div>
    </div>
  );
}

export default Navbar;
