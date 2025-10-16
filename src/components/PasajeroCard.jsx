import React from "react";

export default function PasajeroCard({ datos }) {
  return (
    <div
      className="pasajero-card"
      style={{
        border: "1px solid #ccc",
        borderRadius: "8px",
        padding: "16px",
        marginTop: "20px",
        backgroundColor: "#f9f9f9",
      }}
    >
      <h3>✈️ Datos del vuelo inscripto</h3>
      <p>
        <strong>Pasajero:</strong> {datos.nombre_pasajero}
      </p>
      <p>
        <strong>Email:</strong> {datos.email_pasajero}
      </p>
      <p>
        <strong>Aerolínea:</strong> {datos.aerolinea}
      </p>
      <p>
        <strong>Número de vuelo:</strong> {datos.numero_vuelo}
      </p>
      <p>
        <strong>Origen:</strong> {datos.origen}
      </p>
      <p>
        <strong>Destino:</strong> {datos.destino}
      </p>
      <p>
        <strong>Fecha:</strong> {datos.fecha_vuelo}
      </p>
      <p>
        <strong>Hora:</strong> {datos.hora_salida}
      </p>
      <p>
        <strong>Código de reserva:</strong> {datos.codigo_reserva}
      </p>
    </div>
  );
}
