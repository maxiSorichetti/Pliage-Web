import React from "react";
import desa from "../assets/img/desarrollo.png";
import proyecto from "../assets/img/cocop.png";
import ciencia from "../assets/img/ai.png";
import hardware from "../assets/img/hardware.png";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <div className="servDiv">
      <div className="bg-sevices">
        <div className="container" id="service">
          {/* <br /> */}
          {/* <div className="row headservicios">
            <div className="col mt-3 "> */}
              {/* <h2 className="text-center mt-4 text-uppercase">Servicios</h2>
              <hr
                style={{
                  color: "#fff",
                  opacity: 1,

                  margin: "auto",
                  marginBottom: "4em",
                }}
              /> */}
            {/* </div>
          </div> */}
          <div
            className="row align-bottom mt-3 servicecol"
            style={{
              width: "80%",
              margin: "auto",
            }}
          >
            <div className="col">
              <div className="row">
                <div
                  className="services-vector col-sd-12
                  justify-content-center 
                  text-center hover-img"
                >
                  <h3 className="text-uppercase text-center letrasdobles">
                    desarrollo
                    <br /> de software
                  </h3>
                  <div>
                    <img
                      src={desa}
                      alt=""
                      className="serviceimg align-bottom"
                    />
                  </div>
                  <h5 className="text-uppercase text-center mt-5">
                    visión, adaptación,
                    <br />
                    diseño
                  </h5>
                  <p className="text-services">
                    En un mundo cada vez más inteligente, competitivo y globalizado
                    La originalidad e innovación destacan.
                    Con una perspectiva singular y varios especialistas podemos materializar tu idea y convertirla en proyectos de impacto.
                  </p>
                </div>
                <div
                  className="services-vector col-sd-12
                  justify-content-center 
                  text-center hover-img"
                >
                  <h3 className="text-uppercase text-center letrasdobles">
                    proyectos
                    <br />
                    de impacto
                  </h3>
                  <div>
                    {" "}
                    <a
                      href="https://www.cocop.com.ar"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img src={proyecto} alt="" className="serviceimg" />
                    </a>
                  </div>
                  <h5 className="text-uppercase text-center mt-5">
                    comunidades
                    <br />
                    coparticipativas
                  </h5>
                  <div className="row mt-3">
                    <div className="col text-uppercase text-center">
                      <Link className="cocop-service" to="http://www.cocop.com.ar">
                        <p className="text-services">www.cocop.com.ar</p>
                      </Link>
                      <br /> <br />
                      <p className="text-uppercase text-center text-services">
                        colaboremos!
                      </p>
                      <br /> <br />
                    </div>
                  </div>
                </div>
                <div
                  className="services-vector col-sd-12
                  justify-content-center 
                  text-center hover-img"
                >
                  <h3 className="text-uppercase text-center letrasdobles">
                    ciencia <br />
                    de datos
                  </h3>
                  <div>
                    <img src={ciencia} alt="" className="serviceimg" />
                  </div>

                  <h5 className="text-uppercase text-center mt-5">
                    el presente y el futuro
                    <br />
                    pasa por ia
                  </h5>
                  <p className="text-services">
                    La información es poder, Mediante machine learning analizamos métricas, identificamos patrones y brindamos un modelo predictivo para la toma de decisiones estratégicas.
                  </p>
                </div>
                <div
                  className="services-vector col-sd-12
                  justify-content-center 
                  text-center hover-img"
                >
                  <h3 className="text-uppercase text-center letrasdobles">
                    Hardware y<br />
                    Soporte
                  </h3>
                  <div>
                    <img src={hardware} alt="" className="serviceimg-hardware" />
                  </div>

                  <h5 className="text-uppercase text-center mt-5">
                      Donde todo empieza
                      <br />
                  </h5>
                  <p className="text-services">
                      Asesoría, armado, mantenimiento, rig de minería
                      Soluciones, actualizaciones PC.                  
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/** Carrousell on mobile */}
          <div
            id="carouselServicios"
            className="carousel slide "
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active" data-bs-interval="5000">
                <div
                  className="col-md-4 col-sd-12 justify-content-center 
                  text-center"
                >
                  <h3 className="text-uppercase text-center letrasdobles">
                    desarrollo
                    <br />
                    de software
                  </h3>
                  <div>
                    <img
                      src={desa}
                      alt=""
                      className="serviceimg align-bottom"
                    />
                  </div>
                  <div className="servicebottom ">
                    <h5 className="text-uppercase text-center">
                      visión, adaptación,
                      <br />
                      diseño
                    </h5>
                    <p className="text-services">
                      En un mundo cada vez más inteligente, competitivo y globalizado
                      La originalidad e innovación destacan.
                      Con una perspectiva singular y varios especialistas podemos materializar tu idea y convertirla en proyectos de impacto.
                    </p>
                  </div>
                </div>
              </div>
              <div className="carousel-item" data-bs-interval="5000">
                <div
                  className="col-md-4 col-sd-12 justify-content-center 
                  text-center"
                >
                  <h3 className="text-uppercase text-center letrasdobles">
                    proyectos de
                    <br /> impacto
                  </h3>
                  <div>
                    <a
                      href="https://www.cocop.com.ar"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img src={proyecto} alt="" className="serviceimg" />
                    </a>
                  </div>
                  <div className="servicebottom ">
                    <h5 className="text-uppercase text-center">
                      comunidades
                      <br />
                      coparticipativas
                    </h5>
                  </div>
                  <div className="row mt-5">
                    <div className="col text-uppercase text-center">
                      <a 
                        href="https://www.cocop.com.ar"
                        style={{color:"#fff", textDecoration: "none"}}
                      >
                        www.cocop.com.ar
                      </a>
                      <br /> <br />
                      <h5 className="text-uppercase text-center">
                        colaboremos!
                      </h5>
                      <br /> <br />
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item" data-bs-interval="5000">
                <div
                  className="col-md-4 col-sd-12 text-center justify-content-center 
                  text-center"
                >
                  <h3 className="text-uppercase text-center letrasdobles">
                    ciencia de <br />
                    datos
                  </h3>
                  <div>
                    <img src={ciencia} alt="" className="serviceimg" />
                  </div>
                  <div className="servicebottom ">
                    <h5 className="text-uppercase text-center">
                      el presente y el futuro
                      <br />
                      pasa por ia
                    </h5>
                    <p className="text-services">
                      La información es poder, Mediante machine learning analizamos métricas, identificamos patrones y brindamos un modelo predictivo para la toma de decisiones estratégicas.
                    </p>
                  </div>
                </div>
              </div>
              <div className="carousel-item" data-bs-interval="5000">
                <div
                  className="col-md-4 col-sd-12 text-center justify-content-center 
                  text-center"
                >
                  <h3 className="text-uppercase text-center letrasdobles">
                    Hardware y <br />
                    Soporte
                  </h3>
                  <div>
                    <img src={hardware} alt="" className="serviceimg-hardware" />
                  </div>
                  <div className="servicebottom ">
                    <h5 className="text-uppercase text-center">
                      Donde todo empieza
                      <br />
                    </h5>
                    <p className="text-services">
                      Asesoría, armado, mantenimiento, rig de minería
                      Soluciones, actualizaciones PC.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              // data-bs-target="#carouselServicios"
              data-bs-target=".carousel"
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
              // data-bs-target="#carouselServicios"
              data-bs-target=".carousel"
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

      {/* <div className="servicebottom mt-5">
        <div className="row align-bottom servicecol">
          <div className="col-md-4 col-sd-12"></div>

          <div className="col-md-4 col-sd-12"></div>
          <div className="col-md-4 col-sd-12"></div>
        </div>
      </div> */}
    </div>
  );
};

export default Services;
