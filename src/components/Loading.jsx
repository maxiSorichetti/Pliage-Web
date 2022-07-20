import React from "react";

const Loading = () => {
  return (
    <div className="container w-100 text-center mt-5">
      {" "}
      <br />
      <h1 className="text-center mt-5 text-white">Enviando....</h1>
      <br /> <br />
      <div className="spinner-border text-warning" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};

export default Loading;
