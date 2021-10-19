import React, { useEffect, useState } from "react";
import { Badge, Container } from "react-bootstrap";
import { useParams } from "react-router";
import CustomButton from "../../UI/CusttomButton/CustomButton";
import PopUpModal from "../../UI/Modal/PopUpModal";
import "./ServiceDetails.css";

const ServiceDetails = () => {
  /* getting id from url using useParams */
  const { id } = useParams();
  const [service, setService] = useState({});
  /* popUp is used to showing modal */
  const [popUp, setPopUp] = useState(false);
  const { title, img, description, cost } = service;
  useEffect(() => {
    fetch("/services.json")
      .then((res) => res.json())
      .then((data) => {
        const ser = data.find((d) => d.id == id);
        setService(ser);
      });
  }, []);
  return (
    <Container className="service-details-container d-md-flex d-sm-flex-row-reverse">
      {popUp ? (
        <PopUpModal
          setShowModal={setPopUp}
          header="Test is booked"
          bodyHeader="We booked this test for you"
          text="This test is booked for you. You may come anytime.We ensure your highest facility."
        />
      ) : (
        ""
      )}
      <div className="">
        <img className="m-3" src={img} alt="" />
      </div>
      <div className="me-5">
        <h1>{title}</h1>
        <hr />
        <p className="lh-lg">{description}</p>
        <h2>
          Price <Badge>{cost} $</Badge>
        </h2>
        <CustomButton
          value="Book Now"
          onClick={() => setPopUp(true)}
          className="mt-3 p-2 px-3 fs-3 rounded"
        />
      </div>
    </Container>
  );
};

export default ServiceDetails;
