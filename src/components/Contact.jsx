import React, { useState } from "react";
import emailjs from "emailjs-com";

import SocialIcons from "./SocialIcons";
import Loading from "./Loading";

const Contact = () => {
  const [enviado, setEnviado] = useState(false);
  const [loading, setLoading] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs
      .sendForm(
        // aca van la credenciales de emailjs para enviar correos.
        "service_pb7mq5k",
        "template_yefej0n",
        e.target,
        "VS92catk-OspAqYWS"
      )
      .then(
        (result) => {
          setLoading(false);
          setEnviado(true);
          console.log(result.text);
          document.getElementById("formContacto").reset();
        },
        (error) => {
          setLoading(false);
          console.log(error.text);
        }
      );
  };
  if (loading) {
    return (
      <div
        style={{
          height: "100vh",
          marginTop: "50%",
        }}
      >
        <Loading />
      </div>
    );
  } else {
    return (
      <div className="seccionContact" id="contact">
        <div className="row  text-center">
          <div className="col">
            <br /> <br />
            <br />
            {/* <hr
            style={{
              color: "#fff",
              opacity: 1,
              margin: "auto",
              marginBottom: "4em",
              width: "90%",
            }}
          /> */}
          </div>
        </div>

        <div className="row align-items-center">
          <div className="col-2 col-md-2 col-xs-2"></div>
          <div className="col-md-6 col-xs-6">
            <h2 className="text-white mb-4 text-start text-uppercase">
              Dejanos tu mensaje
            </h2>
            <form onSubmit={sendEmail} id="formContacto">
             
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="floatingInput"
                  placeholder="Nombre"
                  name="nombre"
                />
              </div>
              <div className="input-group mb-3">
                <input
                  type="email"
                  className="form-control"
                  id="floatingPassword"
                  placeholder="Email"
                  name="email"
                />
              </div>
              <div className="form-floating mt-3">
                <textarea
                  className="form-control"
                  placeholder="Mensaje"
                  id="floatingTextarea2"
                  style={{ height: "15em" }}
                  name="mensaje"
                ></textarea>
              </div>

              <button
                type="submit"
                id="btnSub"
                className={
                  enviado
                    ? "visually-hidden"
                    : "btn btn-light mt-3 mb-4 float-end"
                }
              >
                Enviar
              </button>
            </form>

            <div
              className={
                enviado
                  ? "alert alert-success mt-3"
                  : "alert alert-success mt-3  visually-hidden"
              }
              id="alertSuc"
              role="alert"
            >
              Mensaje enviado correctamente.
            </div>
          </div>
          <div className="col-md-4 col-sd-12 align-self-center">
            <div className="socialContact">
              <SocialIcons />
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default Contact;
