import React from "react";
import { Container } from "react-bootstrap";
import "./About.css";
const About = () => {
  return (
    <Container className="about-container">
      <h1 className="display-1">About Us</h1>
      <hr />
      <img src="https://i.ibb.co/cJ6Mc92/logo-removebg-preview.png" alt="" />
      <p className="fs-4">
        <span className="text-danger display-1">D</span>iabetes Elixier is a
        health care service that works with diabetes patients. Every November
        14, we celebrate world diabetes day by providing health tips.In this
        day, We provide awareness to all kind of people. We also provide free
        tips , how to lead a healthy life.
      </p>
      <div className="w-100">
        <img
          className="img-fluid"
          src="https://media-eng.dhakatribune.com/uploads/2019/11/px-world-diabetes-day-logo-1573669951418.jpg"
          alt=""
        />
      </div>
      <div className="d-md-flex mt-3">
        <h2 className="display-2">
          <u> Our Working Procedure:-</u>
        </h2>
        <p className="lead">
          <span className="fs-1">W</span>e work as a team.Our team consist of{" "}
          <span className="text-danger">6 sepcialized</span> doctors, who are
          experienced in Diabetologists more than{" "}
          <span className="text-success">7 years</span>. Any new member may
          welcome in our clinic. But at first he/she has to register. We provide
          him/her personal guide.It’s easy to get confused when it comes to
          health and nutrition. Even qualified experts often seem to hold
          opposing opinions, which can make it difficult to figure out what you
          should actually be doing to optimize your health. Yet, despite all the
          disagreements, a number of wellness tips are well supported by
          research.Treatment for type 1 diabetes involves insulin injections or
          the use of an insulin pump, frequent blood sugar checks, and
          carbohydrate counting. Treatment of type 2 diabetes primarily involves
          lifestyle changes, monitoring of your blood sugar, along with diabetes
          medications, insulin or both.
        </p>
      </div>
      <div className="">
        <h2 className="display-5">
          <u> Our Service Time:-</u>
        </h2>
        <p className="lead">Any time,any day</p>
      </div>
    </Container>
  );
};

export default About;
