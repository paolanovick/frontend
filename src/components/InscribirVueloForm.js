import React, { useState } from "react";
import {
  Plane,
  Mail,
  Calendar,
  Clock,
  MapPin,
  Hash,
  User,
  Building2,
  Trash2,
} from "lucide-react";

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
  const [pasajeros, setPasajeros] = useState([]);
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
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(form),
        }
      );

      setPasajeros([...pasajeros, { ...form, id: Date.now() }]);

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

  const eliminarPasajero = (id) => {
    setPasajeros(pasajeros.filter((p) => p.id !== id));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 text-center">
          <img
            src="https://drive.google.com/uc?export=view&id=14ANnqXL7wjkjRzIwKQT8HYe90sTO8U1B"
            alt="TripNow Logo"
            className="mx-auto mb-6 h-24 object-contain"
          />
          <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent mb-3">
            Sistema de Check-in Automático
          </h1>
          <p className="text-gray-600 text-lg">
            Registrá los vuelos de tus pasajeros y enviaremos recordatorios
            automáticos
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8">
          <div className="lg:col-span-3 bg-white rounded-2xl shadow-xl p-8">
            <div className="flex items-center gap-3 mb-6 pb-4 border-b-2 border-gray-100">
              <div className="bg-gradient-to-br from-purple-500 to-indigo-600 p-3 rounded-xl shadow-lg">
                <Plane className="text-white" size={28} />
              </div>
              <h2 className="text-2xl font-bold text-gray-800">
                Inscribir Nuevo Vuelo
              </h2>
            </div>

            <div className="space-y-5">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Nombre del Pasajero
                </label>
                <div className="relative">
                  <User
                    className="absolute left-3 top-3.5 text-gray-400"
                    size={20}
                  />
                  <input
                    name="nombre_pasajero"
                    placeholder="Juan Pérez"
                    value={form.nombre_pasajero}
                    onChange={handleChange}
                    required
                    className="w-full pl-11 pr-4 py-3.5 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:ring-2 focus:ring-purple-200 focus:outline-none transition-all text-gray-700"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Email del Pasajero
                </label>
                <div className="relative">
                  <Mail
                    className="absolute left-3 top-3.5 text-gray-400"
                    size={20}
                  />
                  <input
                    name="email_pasajero"
                    type="email"
                    placeholder="juan@email.com"
                    value={form.email_pasajero}
                    onChange={handleChange}
                    required
                    className="w-full pl-11 pr-4 py-3.5 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:ring-2 focus:ring-purple-200 focus:outline-none transition-all text-gray-700"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Aerolínea
                  </label>
                  <div className="relative">
                    <Building2
                      className="absolute left-3 top-3.5 text-gray-400"
                      size={20}
                    />
                    <input
                      name="aerolinea"
                      placeholder="Aerolineas Argentinas"
                      value={form.aerolinea}
                      onChange={handleChange}
                      required
                      className="w-full pl-11 pr-4 py-3.5 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:ring-2 focus:ring-purple-200 focus:outline-none transition-all text-gray-700"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Número de Vuelo
                  </label>
                  <div className="relative">
                    <Hash
                      className="absolute left-3 top-3.5 text-gray-400"
                      size={20}
                    />
                    <input
                      name="numero_vuelo"
                      placeholder="AR1234"
                      value={form.numero_vuelo}
                      onChange={handleChange}
                      required
                      className="w-full pl-11 pr-4 py-3.5 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:ring-2 focus:ring-purple-200 focus:outline-none transition-all text-gray-700"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Origen
                  </label>
                  <div className="relative">
                    <MapPin
                      className="absolute left-3 top-3.5 text-gray-400"
                      size={20}
                    />
                    <input
                      name="origen"
                      placeholder="Buenos Aires (EZE)"
                      value={form.origen}
                      onChange={handleChange}
                      required
                      className="w-full pl-11 pr-4 py-3.5 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:ring-2 focus:ring-purple-200 focus:outline-none transition-all text-gray-700"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Destino
                  </label>
                  <div className="relative">
                    <MapPin
                      className="absolute left-3 top-3.5 text-gray-400"
                      size={20}
                    />
                    <input
                      name="destino"
                      placeholder="Bariloche"
                      value={form.destino}
                      onChange={handleChange}
                      required
                      className="w-full pl-11 pr-4 py-3.5 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:ring-2 focus:ring-purple-200 focus:outline-none transition-all text-gray-700"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Fecha de Vuelo
                  </label>
                  <div className="relative">
                    <Calendar
                      className="absolute left-3 top-3.5 text-gray-400 pointer-events-none"
                      size={20}
                    />
                    <input
                      type="date"
                      name="fecha_vuelo"
                      value={form.fecha_vuelo}
                      onChange={handleChange}
                      required
                      className="w-full pl-11 pr-4 py-3.5 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:ring-2 focus:ring-purple-200 focus:outline-none transition-all text-gray-700"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Hora de Salida
                  </label>
                  <div className="relative">
                    <Clock
                      className="absolute left-3 top-3.5 text-gray-400 pointer-events-none"
                      size={20}
                    />
                    <input
                      type="time"
                      name="hora_salida"
                      value={form.hora_salida}
                      onChange={handleChange}
                      required
                      className="w-full pl-11 pr-4 py-3.5 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:ring-2 focus:ring-purple-200 focus:outline-none transition-all text-gray-700"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Código de Reserva
                </label>
                <div className="relative">
                  <Hash
                    className="absolute left-3 top-3.5 text-gray-400"
                    size={20}
                  />
                  <input
                    name="codigo_reserva"
                    placeholder="ABC123"
                    value={form.codigo_reserva}
                    onChange={handleChange}
                    required
                    className="w-full pl-11 pr-4 py-3.5 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:ring-2 focus:ring-purple-200 focus:outline-none transition-all text-gray-700"
                  />
                </div>
              </div>

              <button
                onClick={handleSubmit}
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-purple-500 to-indigo-600 text-white py-4 rounded-xl font-bold text-lg hover:from-purple-600 hover:to-indigo-700 transition-all transform hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none shadow-lg hover:shadow-xl"
              >
                {isSubmitting ? "Inscribiendo..." : "✈️ Inscribir Vuelo"}
              </button>

              {mensaje && (
                <div
                  className={`p-4 rounded-xl text-center font-semibold ${
                    mensaje.includes("✅")
                      ? "bg-green-100 text-green-800 border-2 border-green-300"
                      : "bg-red-100 text-red-800 border-2 border-red-300"
                  }`}
                >
                  {mensaje}
                </div>
              )}
            </div>
          </div>

          <div className="lg:col-span-2 bg-white rounded-2xl shadow-xl p-8">
            <div className="flex items-center justify-between mb-6 pb-4 border-b-2 border-gray-100">
              <h2 className="text-2xl font-bold text-gray-800">Pasajeros</h2>
              <span className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-md">
                {pasajeros.length}
              </span>
            </div>

            {pasajeros.length === 0 ? (
              <div className="text-center py-16 text-gray-400">
                <div className="bg-gray-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Plane size={40} className="opacity-50" />
                </div>
                <p className="text-lg font-medium">Sin pasajeros registrados</p>
                <p className="text-sm mt-2">Los vuelos aparecerán aquí</p>
              </div>
            ) : (
              <div className="space-y-3 max-h-[600px] overflow-y-auto pr-2">
                {pasajeros.map((pasajero) => (
                  <div
                    key={pasajero.id}
                    className="border-2 border-gray-100 rounded-xl p-4 hover:border-purple-300 hover:shadow-lg transition-all"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1">
                        <h3 className="font-bold text-gray-800 text-base mb-1">
                          {pasajero.nombre_pasajero}
                        </h3>
                        <p className="text-xs text-gray-500 break-all">
                          {pasajero.email_pasajero}
                        </p>
                      </div>
                      <div className="flex gap-2 items-start">
                        <span className="bg-purple-100 text-purple-700 px-2 py-1 rounded-lg text-xs font-bold whitespace-nowrap">
                          {pasajero.aerolinea}
                        </span>
                        <button
                          onClick={() => eliminarPasajero(pasajero.id)}
                          className="text-red-500 hover:bg-red-50 p-1.5 rounded-lg transition-colors"
                          title="Eliminar"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-2 text-xs bg-gray-50 p-3 rounded-lg">
                      <div>
                        <span className="text-gray-500 font-medium">
                          Vuelo:
                        </span>
                        <span className="font-bold ml-1 text-gray-800">
                          {pasajero.numero_vuelo}
                        </span>
                      </div>
                      <div>
                        <span className="text-gray-500 font-medium">
                          Código:
                        </span>
                        <span className="font-bold ml-1 text-gray-800">
                          {pasajero.codigo_reserva}
                        </span>
                      </div>
                      <div className="col-span-2 mt-1">
                        <span className="text-gray-500 font-medium">Ruta:</span>
                        <div className="font-bold text-gray-800 mt-1">
                          {pasajero.origen}{" "}
                          <span className="text-purple-500 mx-1">→</span>{" "}
                          {pasajero.destino}
                        </div>
                      </div>
                      <div className="mt-1">
                        <span className="text-gray-500 font-medium">
                          Fecha:
                        </span>
                        <div className="font-bold text-gray-800">
                          {pasajero.fecha_vuelo}
                        </div>
                      </div>
                      <div className="mt-1">
                        <span className="text-gray-500 font-medium">Hora:</span>
                        <div className="font-bold text-gray-800">
                          {pasajero.hora_salida}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
