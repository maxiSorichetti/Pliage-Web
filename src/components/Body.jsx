import React from "react";

const Body = () => {
  return (
    <div id="home">
      <div className="cabecera">
        <div className="position-absolute headTxt">
          <h2 className="curvar text-white animate__animated animate__fadeIn">
            curvar <br />
            la realidad
          </h2>
          <span className="subtitulo text-white fs-5 text animate__animated animate__fadeIn animate__delay-1s" style={{fontWeight: "bold"}}>
            Generando oportunidades de desarrollo colectivo a nivel Global{" "}
            <br /> por medio de la integracion y el conocimiento.
          </span>
        </div>
      </div>
    </div>
  );
};

export default Body
