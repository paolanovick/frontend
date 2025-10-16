import React, { useState } from "react";
import PasajeroCard from "./PasajeroCard"; // 👈 nuevo import

export default function InscribirVueloForm({ onSuccess }) {
  const [form, setForm] = useState({
    nombre_pasajero: "",
    email_pasajero: "",
    aerolinea: "",
    numero_vuelo: "",
    origen: "",
    destino: "",
    fecha_vuelo: "",
    hora_salida: "",
    codigo_reserva: "",
  });

  const [mensaje, setMensaje] = useState("");
  const [ultimoVuelo, setUltimoVuelo] = useState(null); // 👈 para mostrar la tarjeta

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMensaje("");

    try {
      await fetch(
        "https://script.google.com/macros/s/AKfycbwUu9CEOMafFpi8We1QS_gXewY-uU15hOLCIceyWfrDa20LWNLMKJ8HomT_UQFCwpH-/exec",
        {
          method: "POST",
          mode: "no-cors",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(form),
        }
      );

      // Mostramos éxito
      setMensaje("✅ Vuelo inscripto correctamente.");
      setUltimoVuelo(form); // 👈 guardamos el último vuelo

      // Reseteamos el formulario
      setForm({
        nombre_pasajero: "",
        email_pasajero: "",
        aerolinea: "",
        numero_vuelo: "",
        origen: "",
        destino: "",
        fecha_vuelo: "",
        hora_salida: "",
        codigo_reserva: "",
      });

      onSuccess && onSuccess();
    } catch (err) {
      console.error(err);
      setMensaje("❌ Error de red o servidor.");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="inscribir-form">
        <h2>Inscribir Nuevo Vuelo</h2>

        <input
          name="nombre_pasajero"
          placeholder="Nombre pasajero"
          value={form.nombre_pasajero}
          onChange={handleChange}
          required
        />
        <input
          name="email_pasajero"
          placeholder="Email pasajero"
          value={form.email_pasajero}
          onChange={handleChange}
          required
        />
        <input
          name="aerolinea"
          placeholder="Aerolínea"
          value={form.aerolinea}
          onChange={handleChange}
          required
        />
        <input
          name="numero_vuelo"
          placeholder="Número vuelo"
          value={form.numero_vuelo}
          onChange={handleChange}
          required
        />
        <input
          name="origen"
          placeholder="Origen"
          value={form.origen}
          onChange={handleChange}
          required
        />
        <input
          name="destino"
          placeholder="Destino"
          value={form.destino}
          onChange={handleChange}
          required
        />
        <input
          type="date"
          name="fecha_vuelo"
          value={form.fecha_vuelo}
          onChange={handleChange}
          required
        />
        <input
          type="time"
          name="hora_salida"
          value={form.hora_salida}
          onChange={handleChange}
          required
        />
        <input
          name="codigo_reserva"
          placeholder="Código de reserva"
          value={form.codigo_reserva}
          onChange={handleChange}
          required
        />

        <button type="submit">Inscribir Vuelo</button>
        {mensaje && <p>{mensaje}</p>}
      </form>

      {/* 👇 mostramos el cuadro solo si hay un vuelo cargado */}
      {ultimoVuelo && <PasajeroCard datos={ultimoVuelo} />}
    </div>
  );
}
