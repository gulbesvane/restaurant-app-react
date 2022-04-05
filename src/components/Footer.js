import React from "react";
import logo from "../Images/4.jpg";

function Footer() {
  return (
    <div className="footer">
      <div className="footerImage">
        <img src={logo} />
      </div>
      <p> © 2022 Arts District Kitchen. All Rights Reserved.</p>
      <p>
        NCI ACSD Project | Alexandru Neculaes, Ruta Gulbe Svane, Paulina
        Stachera-Diaz{" "}
      </p>
    </div>
  );
}

export default Footer;
