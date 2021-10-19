import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import Service from "../Service/Service";
import "./Services.css";

const Services = () => {
  const [services, setServices] = useState([]);
  /* getting data from json file */
  useEffect(() => {
    fetch("./services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div className="mt-5">
      <h1 className="services-header">Our Services</h1>
      <p>
        Diabetes affects your whole body. To best manage diabetes, you’ll need
        to take steps to keep your risk factors under control and within the
        normal range. <br /> We provide best treatment in the chapest rate.{" "}
      </p>
      <Container>
        <Row xs={1} md={2} lg={3} className="g-4">
          {services.map((service) => (
            <Service key={service.id} service={service} />
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Services;
