import React, { useState } from "react";
import ReactPlayer from "react-player";
import { Modal, Button } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";


const About = ({goBottom}) => {
  const [show, setShow] = useState(false);
  const [msj, setMsj] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const nav = useNavigate();

  const handleButton = (value) => {
    if(value === "A") {
      setMsj("Compartes la visión y valores de la empresa nos gustaría trabajar en conjunto!")
    }
    if(value === "B") {
      setMsj("Hay que participar de forma activa para que esto suceda!")
    }
    handleShow();
  }

  const handleModal = () => {
    handleClose();    
    goBottom();
    nav('/main#contact');
  }

  return (
    <div id="about">  
      <div className="servDiv">
        <div className="bg-sevices">
          <div className="container" id="about-litio">
            <div className="row headAbout">
              <p className="title-about-litio">LI 3, el mineral que puede llevar a la humanidad al siguiente nivel y potenciar la región.</p>
                <div className="player-video">
                  <ReactPlayer
                    className=""
                    url="https://vimeo.com/714123222"
                    width="600px"
                    playing={false}
                    height="300px"
                    controls={true}
                    muted={false}
                    playsinline={true}
                  />
                </div>
              <div className="option-about-litio">
                <h5>A. Invertiría en desarrollar tecnología propia para poder extraer los recursos y producir las baterías, sin depender de terceros, teniendo como prioridad el medioambiente y los derechos indígenas.
                </h5>
                <br/>
                <h5>
                  B. Mantendría y regularía a las empresas extranjeras, exigiendo mayor participación en los beneficios obtenidos...
                </h5>
              </div>
              <div className="btn-options-video-litio">
                <button className="btn-a-b" onClick={() => handleButton("A")} >A</button>
                <button className="btn-a-b" onClick={() => handleButton("B")} >B</button>
              </div>
              <div className="col mt-3 ">
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="modal">

      <Modal
        style={{ 
          marginTop: "35vh", 
          width: "calc(100vw -18px)"
        }}
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>
            Perfecto !!
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {msj}
        </Modal.Body>
        <Modal.Footer>
          <Button 
            variant="primary" 
            onClick={() => handleModal()}
            style={{ 
              borderRadius: "7px",
              backgroundColor: "#ba179a",
              fontWeight: "bold",
              border: "1px solid #700ea2"
            }} 
          >
            Continuar
          </Button>
        </Modal.Footer>
      </Modal>
        </div>
    </div>
  );
};

export default About;
