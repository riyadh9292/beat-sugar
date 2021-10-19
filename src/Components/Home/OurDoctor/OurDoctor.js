import React from "react";
import { Badge, Card, Col } from "react-bootstrap";

const OurDoctor = ({ doctor }) => {
  /* using destructuring */
  const { name, img, designation, specialize, experience } = doctor;
  return (
    <Col>
      <Card>
        <div className="overflow-hidden">
          <Card.Img variant="top" src={img} className="card-image" />
        </div>

        <Card.Body>
          <Card.Title className="service-title text-decoration-underline">
            Name: {name}
          </Card.Title>
          <Card.Text className="service-description lh-lg">
            {/* this cause minor warning <p> cannot appear as a descendant of <p>. but i think that's ok. */}
            <p>Specialist: {specialize}</p>
            <Badge
              bg={designation === "Chairman" ? "warning" : "primary"}
              text="light"
              className="fs-4"
            >
              {designation}
            </Badge>
          </Card.Text>
          <Card.Footer>{experience}</Card.Footer>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default OurDoctor;
