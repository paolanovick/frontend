import React, { useState } from "react";

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

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMensaje("");

    try {
      // Combinar fecha y hora en un solo campo
      const fechaHoraVuelo = `${form.fecha_vuelo}T${form.hora_salida}:00`;

      // Enviar como JSON (NO como FormData)
      const resp = await fetch(
        "https://n8n.triptest.com.ar/webhook/vueloForm",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            nombre: form.nombre_pasajero,
            apellido: "", // Si no lo tienes, déjalo vacío
            email: form.email_pasajero,
            aerolinea: form.aerolinea,
            numeroVuelo: form.numero_vuelo,
            origen: form.origen,
            destino: form.destino,
            fechaVuelo: fechaHoraVuelo,
            codigoReserva: form.codigo_reserva,
          }),
        }
      );

      if (resp.ok) {
        setMensaje("✅ Vuelo inscripto correctamente.");
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
      } else {
        setMensaje("❌ Error al inscribir vuelo.");
      }
    } catch (err) {
      console.error(err);
      setMensaje("❌ Error de red o servidor.");
    }
  };

  return (
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
  );
}
