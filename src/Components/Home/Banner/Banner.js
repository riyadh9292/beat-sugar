import React from "react";
import { Carousel } from "react-bootstrap";
import "./Banner.css";

const Banner = () => {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://i.ibb.co/vYzJnzR/Cartoon-professional-hospital-team-of-doctors.jpg"
          alt="First slide"
        />
        <Carousel.Caption className="text-dark">
          <h3>We had 6 specialized doctors</h3>
          <p>Our doctors are highly experienced.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://i.ibb.co/4RVVP1T/Group-of-cartoon-doctors-in-masks-1.jpg"
          alt="Second slide"
        />

        <Carousel.Caption className="text-dark">
          <h3>Health tips</h3>
          <p>You can get some free health tips in out tips section</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://i.ibb.co/8PBQqHc/2699.jpg"
          alt="Third slide"
        />

        <Carousel.Caption className="text-dark">
          <h3>There is no off day</h3>
          <p>We care our patients.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Banner;
