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
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark navBarBlack">
      <div className="container-fluid">
        {/* using fontawsome added the website smaller logo, the star */}
        <a className="navbar-brand" href="#">
          <FontAwesomeIcon className="starIcon" icon={faStar} />
        </a>
        {/* added website main logo*/}
        <div className="navbar-brand">
          <img src={logo3} />
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {/* done pathing for the links */}
            <li className="nav-item">
              <Link className="nav-link active navItem" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link navItem" to="/menu">
                Menu
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link navItem" to="/about">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link navItem" to="/contact">
                Contact
              </Link>
            </li>
          </ul>
          {/* using fontawsome added the social media logos and set correct path to websites */}
          {/*once clicked a new page will open */}
          <div className="d-flex">
            <a href="https://www.facebook.com/" target="_blank">
              <FontAwesomeIcon className="socialIcon" icon={faFacebook} />
            </a>
            <a href="https://www.linkedin.com/" target="_blank">
              <FontAwesomeIcon className="socialIcon" icon={faLinkedin} />
            </a>
            <a href="https://www.yelp.ie/" target="_blank">
              <FontAwesomeIcon className="socialIcon" icon={faYelp} />
            </a>
            <a href="https://google.com" target="_blank">
              <FontAwesomeIcon className="socialIcon" icon={faGoogle} />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
