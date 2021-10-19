import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import OurDoctor from "../OurDoctor/OurDoctor";

const OurDoctors = () => {
  const [doctors, setDoctors] = useState([]);
  /* getting data from json file */
  useEffect(() => {
    fetch("./doctors.json")
      .then((res) => res.json())
      .then((data) => setDoctors(data));
  }, []);
  return (
    <Container className="mt-5">
      <h1>Meet Our Doctors</h1>
      <p>
        We had some of the people in the business. They are highly qualified and
        affectionate to patients.
      </p>
      <Row xs={1} md={2} lg={3} className="g-4">
        {doctors.map((doctor) => (
          <OurDoctor key={doctor.id} doctor={doctor} />
        ))}
      </Row>
    </Container>
  );
};

export default OurDoctors;
