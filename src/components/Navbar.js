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
      <Link className="navItems" to="/">
        Home
      </Link>
      <Link className="navItems" to="/menu">
        Menu
      </Link>
      <Link className="navItems" to="/about">
        About
      </Link>
      <Link className="navItems" to="/contact">
        Contact
      </Link>
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
