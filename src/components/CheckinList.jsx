import React from "react";
import CheckinCard from "./CheckinCard";

const CheckinList = ({ vuelos }) => {
  if (!vuelos.length) return <p>No hay vuelos próximos.</p>;

  return (
    <div>
      {vuelos.map((vuelo, index) => (
        <CheckinCard key={index} vuelo={vuelo} />
      ))}
    </div>
  );
};

export default CheckinList;
