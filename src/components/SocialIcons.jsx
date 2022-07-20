import React from "react";
import { FaFacebookSquare, FaInstagram, FaTwitter } from "react-icons/fa";
const SocialIcons = () => {
  return (
    <div className="footredes">
      <p>Seguínos en Instagram</p>
      {/* <a
        className="text-white m-1"
        href="https://facebook.com"
        target="_blank"
        rel="noreferrer"
      >
        <FaFacebookSquare />
      </a> */}
      <a
        className="text-white m-1"
        href="https://www.instagram.com/pliage.tech/"
        target="_blank"
        rel="noreferrer"
      >
        <FaInstagram />
      </a>
      {/* <a
        className="text-white m-1"
        href="https://twitter.com"
        target="_blank"
        rel="noreferrer"
      >
        <FaTwitter />{" "}
      </a> */}
    </div>
  );
};

export default SocialIcons;
