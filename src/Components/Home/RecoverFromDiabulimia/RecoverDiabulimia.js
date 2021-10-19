import React from "react";
import { Container } from "react-bootstrap";

const RecoverDiabulimia = () => {
  /* here two youtube video is provided */
  return (
    <Container className="d-md-flex justify-content-between mt-5">
      <div className="">
        <h1>Recover From Diabulimia</h1>
        <div className="embed-responsive embed-responsive-16by9">
          <iframe
            className="embed-responsive-item"
            src="https://www.youtube.com/embed/9iC1IlwBCW8"
            allowFullScreen
          ></iframe>
        </div>
      </div>
      <div className="">
        <h1>Diet For Pergnent Diabetes Woman </h1>

        <div className="embed-responsive embed-responsive-16by9">
          <iframe
            className="embed-responsive-item"
            src="https://www.youtube.com/embed/FQvazRFf26U"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </Container>
  );
};

export default RecoverDiabulimia;
