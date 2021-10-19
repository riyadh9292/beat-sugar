import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import HealthTip from "../HealthTip/HealthTip";
import "./HealthTips.css";

const HealthTips = () => {
  const [tips, setTips] = useState([]);
  /* getting data from json file */
  useEffect(() => {
    fetch("./tips.json")
      .then((res) => res.json())
      .then((data) => setTips(data));
  }, []);
  return (
    <Container className="health-tips-container">
      <h1 className="display-1">
        28 Health and Nutrition Tips That Are Actually Evidence-Based
      </h1>
      <p>
        It’s easy to get confused when it comes to health and nutrition. Even
        qualified experts often seem to hold opposing opinions, which can make
        it difficult to figure out what you should actually be doing to optimize
        your health. Yet, despite all the disagreements, a number of wellness
        tips are well supported by research. Here are 28 health and nutrition
        tips that are based on scientific evidence.
      </p>
      <div className="w-100">
        <img
          className="img-fluid"
          src="https://ahaliadiabetes.org/wp-content/uploads/2019/08/health-2.jpg"
          alt=""
        />
      </div>
      {tips.map((tip) => (
        <HealthTip key={tip.id} tip={tip} />
      ))}
    </Container>
  );
};

export default HealthTips;
