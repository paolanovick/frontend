import React, { useState } from "react";
import PasajeroCard from "./PasajeroCard";

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
  const [ultimoVuelo, setUltimoVuelo] = useState(null);

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

      setMensaje("✅ Vuelo inscripto correctamente.");
      setUltimoVuelo(form);
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
    <div className="max-w-lg mx-auto bg-white shadow-lg rounded-2xl p-8 border border-gray-100">
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <h2 className="text-2xl font-bold text-center text-indigo-600 mb-4">
          Inscribir Nuevo Vuelo
        </h2>

        <input
          name="nombre_pasajero"
          placeholder="Nombre pasajero"
          value={form.nombre_pasajero}
          onChange={handleChange}
          required
          className="w-full border-2 border-gray-200 rounded-xl px-4 py-2 focus:border-indigo-500 outline-none transition"
        />

        <input
          name="email_pasajero"
          placeholder="Email pasajero"
          value={form.email_pasajero}
          onChange={handleChange}
          required
          className="w-full border-2 border-gray-200 rounded-xl px-4 py-2 focus:border-indigo-500 outline-none transition"
        />

        <input
          name="aerolinea"
          placeholder="Aerolínea"
          value={form.aerolinea}
          onChange={handleChange}
          required
          className="w-full border-2 border-gray-200 rounded-xl px-4 py-2 focus:border-indigo-500 outline-none transition"
        />

        <input
          name="numero_vuelo"
          placeholder="Número de vuelo"
          value={form.numero_vuelo}
          onChange={handleChange}
          required
          className="w-full border-2 border-gray-200 rounded-xl px-4 py-2 focus:border-indigo-500 outline-none transition"
        />

        <div className="grid grid-cols-2 gap-3">
          <input
            name="origen"
            placeholder="Origen"
            value={form.origen}
            onChange={handleChange}
            required
            className="border-2 border-gray-200 rounded-xl px-4 py-2 focus:border-indigo-500 outline-none transition"
          />
          <input
            name="destino"
            placeholder="Destino"
            value={form.destino}
            onChange={handleChange}
            required
            className="border-2 border-gray-200 rounded-xl px-4 py-2 focus:border-indigo-500 outline-none transition"
          />
        </div>

        <div className="grid grid-cols-2 gap-3">
          <input
            type="date"
            name="fecha_vuelo"
            value={form.fecha_vuelo}
            onChange={handleChange}
            required
            className="border-2 border-gray-200 rounded-xl px-4 py-2 focus:border-indigo-500 outline-none transition"
          />
          <input
            type="time"
            name="hora_salida"
            value={form.hora_salida}
            onChange={handleChange}
            required
            className="border-2 border-gray-200 rounded-xl px-4 py-2 focus:border-indigo-500 outline-none transition"
          />
        </div>

        <input
          name="codigo_reserva"
          placeholder="Código de reserva"
          value={form.codigo_reserva}
          onChange={handleChange}
          required
          className="w-full border-2 border-gray-200 rounded-xl px-4 py-2 focus:border-indigo-500 outline-none transition"
        />

        <button
          type="submit"
          className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold py-3 rounded-xl shadow-md hover:scale-[1.02] active:scale-[0.98] transition-transform"
        >
          Inscribir Vuelo
        </button>

        {mensaje && (
          <p
            className={`text-center font-semibold mt-2 ${
              mensaje.includes("✅") ? "text-green-600" : "text-red-600"
            }`}
          >
            {mensaje}
          </p>
        )}
      </form>

      {/* Tarjeta del pasajero */}
      {ultimoVuelo && <PasajeroCard datos={ultimoVuelo} />}
    </div>
  );
}
