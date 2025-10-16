import React, { useState } from "react";
import PasajeroCard from "./PasajeroCard";

export default function InscribirVueloForm() {
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
  const [ultimoPasajero, setUltimoPasajero] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMensaje("");
    setIsSubmitting(true);

    try {
      await fetch(
        "https://script.google.com/macros/s/AKfycbwUu9CEOMafFpi8We1QS_gXewY-uU15hOLCIceyWfrDa20LWNLMKJ8HomT_UQFCwpH-/exec",
        {
          method: "POST",
          mode: "no-cors",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(form),
        }
      );

      setUltimoPasajero({ ...form, id: Date.now() });
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

      setTimeout(() => setMensaje(""), 3000);
    } catch (err) {
      console.error(err);
      setMensaje("❌ Error de red o servidor.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-sky-100 to-purple-200 p-6 md:p-12">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 text-center">
          <img
            src="https://drive.google.com/uc?export=view&id=14ANnqXL7wjkjRzIwKQT8HYe90sTO8U1B"
            alt="agenciaLogo"
            className="mx-auto mb-6 h-20 object-contain"
          />
          <h1 className="text-4xl font-bold bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent mb-2">
            Sistema de Check-in Automático
          </h1>
          <p className="text-gray-500 text-lg">
            Registrá los vuelos de tus pasajeros y enviaremos recordatorios
            automáticos
          </p>
        </div>

        {/* Formulario */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <div className="flex items-center gap-4 mb-6 border-b-2 border-gray-100 pb-4">
            <div className="bg-gradient-to-br from-violet-600 to-indigo-600 p-3 rounded-xl shadow-md text-2xl">
              ✈️
            </div>
            <h2 className="text-2xl font-bold text-gray-800">
              Inscribir Nuevo Vuelo
            </h2>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                👤 Nombre del Pasajero
              </label>
              <input
                name="nombre_pasajero"
                placeholder="Juan Pérez"
                value={form.nombre_pasajero}
                onChange={handleChange}
                required
                className="w-full p-3 border-2 border-gray-200 rounded-xl focus:border-violet-600 text-gray-700"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                📧 Email del Pasajero
              </label>
              <input
                type="email"
                name="email_pasajero"
                placeholder="juan@email.com"
                value={form.email_pasajero}
                onChange={handleChange}
                required
                className="w-full p-3 border-2 border-gray-200 rounded-xl focus:border-violet-600 text-gray-700"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  🏢 Aerolínea
                </label>
                <input
                  name="aerolinea"
                  placeholder="Aerolineas Argentinas"
                  value={form.aerolinea}
                  onChange={handleChange}
                  required
                  className="w-full p-3 border-2 border-gray-200 rounded-xl focus:border-violet-600 text-gray-700"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  #️⃣ Número de Vuelo
                </label>
                <input
                  name="numero_vuelo"
                  placeholder="AR1234"
                  value={form.numero_vuelo}
                  onChange={handleChange}
                  required
                  className="w-full p-3 border-2 border-gray-200 rounded-xl focus:border-violet-600 text-gray-700"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  📍 Origen
                </label>
                <input
                  name="origen"
                  placeholder="Buenos Aires (EZE)"
                  value={form.origen}
                  onChange={handleChange}
                  required
                  className="w-full p-3 border-2 border-gray-200 rounded-xl focus:border-violet-600 text-gray-700"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  📍 Destino
                </label>
                <input
                  name="destino"
                  placeholder="Bariloche"
                  value={form.destino}
                  onChange={handleChange}
                  required
                  className="w-full p-3 border-2 border-gray-200 rounded-xl focus:border-violet-600 text-gray-700"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  📅 Fecha de Vuelo
                </label>
                <input
                  type="date"
                  name="fecha_vuelo"
                  value={form.fecha_vuelo}
                  onChange={handleChange}
                  required
                  className="w-full p-3 border-2 border-gray-200 rounded-xl focus:border-violet-600 text-gray-700"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  🕐 Hora de Salida
                </label>
                <input
                  type="time"
                  name="hora_salida"
                  value={form.hora_salida}
                  onChange={handleChange}
                  required
                  className="w-full p-3 border-2 border-gray-200 rounded-xl focus:border-violet-600 text-gray-700"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                🎫 Código de Reserva
              </label>
              <input
                name="codigo_reserva"
                placeholder="ABC123"
                value={form.codigo_reserva}
                onChange={handleChange}
                required
                className="w-full p-3 border-2 border-gray-200 rounded-xl focus:border-violet-600 text-gray-700"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full py-4 rounded-xl font-bold text-lg text-white shadow-md transition-transform duration-200 ${
                isSubmitting
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-gradient-to-r from-violet-600 to-indigo-600 hover:scale-[1.02]"
              }`}
            >
              {isSubmitting ? "Inscribiendo..." : "✈️ Inscribir Vuelo"}
            </button>

            {mensaje && (
              <div
                className={`p-4 rounded-xl text-center font-semibold border-2 ${
                  mensaje.includes("✅")
                    ? "bg-green-100 text-green-800 border-green-300"
                    : "bg-red-100 text-red-800 border-red-300"
                }`}
              >
                {mensaje}
              </div>
            )}
          </form>
        </div>

        {/* Mostrar el cuadro con datos */}
        {ultimoPasajero && <PasajeroCard pasajero={ultimoPasajero} />}
      </div>
    </div>
  );
}
