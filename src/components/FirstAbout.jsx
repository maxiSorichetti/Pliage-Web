import React from "react";

import p1 from "../assets/img/person1.png";
import p2 from "../assets/img/person2.png";
import p3 from "../assets/img/person3.png";
import p4 from "../assets/img/person4.png";
import p5 from "../assets/img/person1.png";
import p6 from "../assets/img/person2.png";
import p7 from "../assets/img/person3.png";

const About = () => {
  const personas = [
    {
      url: p1,
      nombre: "integrante 1",
    },
    {
      url: p2,
      nombre: "integrante 2",
    },
    {
      url: p3,
      nombre: "integrante 3",
    },
    {
      url: p4,
      nombre: "integrante 4",
    },
    {
      url: p5,
      nombre: "integrante 5",
    },
    {
      url: p6,
      nombre: "integrante 6",
    },
    {
      url: p7,
      nombre: "integrante 7",
    },
  ];
  return (
    <div id="about">
      <div className="secionabout text-center position-relative">
        <div
          className="container aboutMain position-absolute top-50 
          start-50 translate-middle"
          style={{
            width: "80%",
          }}
        >
          <div
            className="row align-items-center"
            style={{
              marginBottom: "3.5rem",
            }}
          >
            <div className="col-3 col-md-3 col-sm-12">
              <img src={p1} alt="" className="imgabout" />
              <h5 className="txtintegrante">integrante 1</h5>
            </div>
            <div className="col-3 col-md-3 col-sm-12">
              <img src={p2} alt="" className="imgabout" />
              <h5 className="txtintegrante">integrante 2</h5>
            </div>{" "}
            <div className="col-3 col-md-3 col-sm-12">
              <img src={p3} alt="" className="imgabout" />
              <h5 className="txtintegrante">integrante 3</h5>
            </div>{" "}
            <div className="col-3 col-md-3 col-sm-12">
              <img src={p4} alt="" className="imgabout" />
              <h5 className="txtintegrante">integrante 4</h5>
            </div>
          </div>
          <div className="row align-items-center">
            <div className="col-1 ms-5"></div>
            <div className="col-3 col-md-3 col-sm-12">
              <img src={p5} alt="" className="imgabout" />
              <h5 className="txtintegrante">integrante 5</h5>
            </div>
            <div className="col-3 col-md-3   col-sm-12">
              <img src={p6} alt="" className="imgabout" />
              <h5 className="txtintegrante">integrante 6</h5>
            </div>{" "}
            <div className="col-3 col-md-3   col-sm-12">
              <img src={p7} alt="" className="imgabout" />
              <h5 className="txtintegrante">integrante 7</h5>
            </div>{" "}
          </div>
        </div>
        <div className="container align-middle">
          {/** Carrousell on mobile */}
          <div
            id="carouselAbout"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              {personas.map((p, i) => {
                return (
                  <div
                    key={i}
                    className={
                      i === 0 ? "carousel-item active" : "carousel-item"
                    }
                    data-bs-interval="10000"
                  >
                    <div
                      className="col-12 col-md-12 col-sm-12"
                      style={{
                        marginTop: "50%",
                      }}
                    >
                      <img src={p.url} alt="" className="imgabout" />
                      <h5 className="txtintegrante">{p.nombre}</h5>
                    </div>
                  </div>
                );
              })}
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselAbout"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselAbout"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>

          {/** FIN Carrousell on mobile */}
        </div>
      </div>
    </div>
  );
};

export default About;
