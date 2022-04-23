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
import logo3 from "../Images/small_logo.jpg";

// created function that would return footer content logo + text

function Navbar() {
  return (
    <div className="topnav" id="myTopnav">
      {/* using fontawsome added the website smaller logo, the star */}

      <div>
        <FontAwesomeIcon className="starIcon" icon={faStar} />
      </div>

      {/* added website main logo*/}

      <div>
        <img src={logo3} />
      </div>

      {/* done pathing for the links */}

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

      {/* using fontawsome added the social media logos and set correct path to websites */}
      {/*once clicked a new page will open */}

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
