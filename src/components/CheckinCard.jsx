import React from "react";

const CheckinCard = ({ vuelo }) => {
  return (
    <div className="checkin-card">
      <h2>{vuelo.nombre_pasajero}</h2>
      <p>
        Vuelo: {vuelo.aerolinea} {vuelo.numero_vuelo}
      </p>
      <p>
        Origen: {vuelo.origen} → Destino: {vuelo.destino}
      </p>
      <p>
        Fecha: {vuelo.fecha_vuelo} Hora: {vuelo.hora_salida}
      </p>
      <p>Código de reserva: {vuelo.codigo_reserva}</p>
    </div>
  );
};

export default CheckinCard;
