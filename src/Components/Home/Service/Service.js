import React from "react";
import { Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import ReactShowMoreText from "react-show-more-text";
import CustomButton from "../../UI/CusttomButton/CustomButton";
import "./Service.css";

const Service = ({ service }) => {
  const { id, title, description, img } = service;
  return (
    <Col>
      <Card>
        <div className="overflow-hidden">
          <Card.Img variant="top" src={img} className="card-image" />
        </div>

        <Card.Body>
          <Card.Title className="service-title text-decoration-underline">
            {title}
          </Card.Title>
          {/* react-show-more-text is used to provide showmore and showless options */}
          <ReactShowMoreText>{description}</ReactShowMoreText>

          <Card.Footer>
            <Link to={`/service/${id}`}>
              <CustomButton
                type="button"
                value="Details"
                className="px-3 rounded"
              />
            </Link>
          </Card.Footer>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Service;
