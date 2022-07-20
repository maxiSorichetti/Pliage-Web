import React from "react";
import logo from "../assets/img/logo_horiontal.png";
import { FaMapMarkerAlt } from "react-icons/fa";
import logom from "../assets/img/logo.png";

const Footer = () => {
  return (
    <footer className="footersection">
      <div className="row align-items-center">
        <div className="col">
          <img src={logo} className="imgFooter" alt="logo alternativo" />
          <img src={logom} className="imgFooterm" alt="logo m alternativo" />
        </div>
        <div className="col-8 col-md-8 col-sd-8">
          <span className="directionFooter">
            {" "}
            <FaMapMarkerAlt /> {"  "} Combate de los pozos 265 CABA, Buenos
            Aires, Argentina
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
