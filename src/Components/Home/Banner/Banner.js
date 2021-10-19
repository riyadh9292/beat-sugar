import React from "react";
import { Carousel } from "react-bootstrap";
import "./Banner.css";

const Banner = () => {
  return (
    <Carousel className="mt-5 pt-5 h-25">
      <Carousel.Item interval={1000}>
        <img
          className="d-block img-fluid"
          src="https://i.ibb.co/vYzJnzR/Cartoon-professional-hospital-team-of-doctors.jpg"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img
          className="d-block img-fluid"
          src="https://i.ibb.co/4RVVP1T/Group-of-cartoon-doctors-in-masks-1.jpg"
          alt="second"
        />
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img
          className="d-block img-fluid"
          src="https://i.ibb.co/8PBQqHc/2699.jpg"
          alt="third"
        />
      </Carousel.Item>
    </Carousel>
  );
};

export default Banner;
