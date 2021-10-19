import React from "react";

const HealthTip = ({ tip }) => {
  const { id, heading, desc } = tip;
  return (
    <>
      <h2 className="display-3">
        {id}. {heading}
      </h2>
      <hr />
      <p className="lead">{desc}</p>
    </>
  );
};

export default HealthTip;
