import React, { useState } from "react";
import logo from "../assets/img/logo_horiontal.png";

const NavBar = () => {
  const [isOpen, setOpen] = useState(false);
  const [isActive, setActive] = useState("Home");
  let clase = isOpen
    ? "collapse navbar-collapse show"
    : "collapse navbar-collapse ";
    
  return (
    <nav className="navbar navbar-expand-lg navbar-dark sticky-top bg-dark ">
      <div className="container-fluid">
        <span className="navbar-brand">
          <img src={logo} className="Navlogo" alt="" />
        </span>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={() => {
            setOpen(!isOpen);
            setActive("Home");
          }}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="float-end">
          <div className={clase} id="navbarSupportedContent">
            <ul className="navbar-nav ">
              <li className="nav-item">
                <a
                  className={
                    isActive === "Home" ? "nav-link active" : "nav-link"
                  }
                  href="#home"
                  onClick={() => {
                    setOpen(!isOpen);
                    setActive("Home");
                  }}
                >
                  Inicio
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="#service"
                  className={
                    isActive === "Servicio" ? "nav-link active" : "nav-link"
                  }
                  onClick={() => {
                    setOpen(!isOpen);
                    setActive("Servicio");
                  }}
                >
                  Servicios
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="#about"
                  className={
                    isActive === "About" ? "nav-link active" : "nav-link"
                  }
                  onClick={() => {
                    setOpen(!isOpen);
                    setActive("About");
                  }}
                >
                  Acerca del litio
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="#contact"
                  className={
                    isActive === "Contact" ? "nav-link active" : "nav-link"
                  }
                  onClick={() => {
                    setOpen(!isOpen);
                    setActive("Contact");
                  }}
                >
                  Contacto
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
