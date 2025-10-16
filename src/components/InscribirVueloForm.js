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
} from "lucide-react";

export default function InscribirVueloForm({ onSuccess }) {
  const [formData, setFormData] = useState({
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

  // Logo de la agencia desde Google Drive
  const LOGO_URL =
    "https://drive.google.com/uc?export=view&id=14ANnqXL7wjkjRzIwKQT8HYe90sTO8U1B";

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
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
          body: JSON.stringify(formData),
        }
      );

      setPasajeros([...pasajeros, { ...formData, id: Date.now() }]);

      setMensaje("✅ Vuelo inscripto correctamente.");
      setFormData({
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
      onSuccess && onSuccess();
    } catch (err) {
      console.error(err);
      setMensaje("❌ Error de red o servidor.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 text-center">
          <img
            src={LOGO_URL}
            alt="Logo Agencia"
            className="mx-auto mb-4 h-20 object-contain"
          />
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            Sistema de Check-in Automático
          </h1>
          <p className="text-gray-600">
            Registra los vuelos de tus pasajeros y enviaremos recordatorios
            automáticos
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-gradient-to-br from-purple-500 to-indigo-600 p-3 rounded-xl">
                <Plane className="text-white" size={24} />
              </div>
              <h2 className="text-2xl font-bold text-gray-800">
                Inscribir Nuevo Vuelo
              </h2>
            </div>

            <div className="space-y-4">
              <div className="relative">
                <User
                  className="absolute left-3 top-3 text-gray-400"
                  size={20}
                />
                <input
                  name="nombre_pasajero"
                  placeholder="Nombre del pasajero"
                  value={formData.nombre_pasajero}
                  onChange={handleChange}
                  className="w-full pl-11 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none transition-colors"
                />
              </div>

              <div className="relative">
                <Mail
                  className="absolute left-3 top-3 text-gray-400"
                  size={20}
                />
                <input
                  name="email_pasajero"
                  type="email"
                  placeholder="Email del pasajero"
                  value={formData.email_pasajero}
                  onChange={handleChange}
                  className="w-full pl-11 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none transition-colors"
                />
              </div>

              <div className="relative">
                <Building2
                  className="absolute left-3 top-3 text-gray-400"
                  size={20}
                />
                <input
                  name="aerolinea"
                  placeholder="Aerolínea (ej: Aerolineas Argentinas)"
                  value={formData.aerolinea}
                  onChange={handleChange}
                  className="w-full pl-11 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none transition-colors"
                />
              </div>

              <div className="relative">
                <Hash
                  className="absolute left-3 top-3 text-gray-400"
                  size={20}
                />
                <input
                  name="numero_vuelo"
                  placeholder="Número de vuelo"
                  value={formData.numero_vuelo}
                  onChange={handleChange}
                  className="w-full pl-11 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none transition-colors"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="relative">
                  <MapPin
                    className="absolute left-3 top-3 text-gray-400"
                    size={20}
                  />
                  <input
                    name="origen"
                    placeholder="Origen"
                    value={formData.origen}
                    onChange={handleChange}
                    className="w-full pl-11 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none transition-colors"
                  />
                </div>
                <div className="relative">
                  <MapPin
                    className="absolute left-3 top-3 text-gray-400"
                    size={20}
                  />
                  <input
                    name="destino"
                    placeholder="Destino"
                    value={formData.destino}
                    onChange={handleChange}
                    className="w-full pl-11 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="relative">
                  <Calendar
                    className="absolute left-3 top-3 text-gray-400"
                    size={20}
                  />
                  <input
                    type="date"
                    name="fecha_vuelo"
                    value={formData.fecha_vuelo}
                    onChange={handleChange}
                    className="w-full pl-11 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none transition-colors"
                  />
                </div>
                <div className="relative">
                  <Clock
                    className="absolute left-3 top-3 text-gray-400"
                    size={20}
                  />
                  <input
                    type="time"
                    name="hora_salida"
                    value={formData.hora_salida}
                    onChange={handleChange}
                    className="w-full pl-11 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none transition-colors"
                  />
                </div>
              </div>

              <div className="relative">
                <Hash
                  className="absolute left-3 top-3 text-gray-400"
                  size={20}
                />
                <input
                  name="codigo_reserva"
                  placeholder="Código de reserva"
                  value={formData.codigo_reserva}
                  onChange={handleChange}
                  className="w-full pl-11 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none transition-colors"
                />
              </div>

              <button
                onClick={handleSubmit}
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-purple-500 to-indigo-600 text-white py-4 rounded-xl font-semibold hover:from-purple-600 hover:to-indigo-700 transition-all transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none shadow-lg"
              >
                {isSubmitting ? "Inscribiendo..." : "✈️ Inscribir Vuelo"}
              </button>

              {mensaje && (
                <div
                  className={`p-4 rounded-xl text-center font-semibold ${
                    mensaje.includes("✅")
                      ? "bg-green-100 text-green-800"
                      : "bg-red-100 text-red-800"
                  }`}
                >
                  {mensaje}
                </div>
              )}
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Pasajeros Registrados ({pasajeros.length})
            </h2>

            {pasajeros.length === 0 ? (
              <div className="text-center py-12 text-gray-400">
                <Plane size={48} className="mx-auto mb-4 opacity-50" />
                <p>No hay pasajeros registrados aún</p>
              </div>
            ) : (
              <div className="space-y-4 max-h-[600px] overflow-y-auto pr-2">
                {pasajeros.map((pasajero) => (
                  <div
                    key={pasajero.id}
                    className="border-2 border-gray-100 rounded-xl p-4 hover:border-purple-200 hover:shadow-md transition-all"
                  >
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h3 className="font-bold text-gray-800 text-lg">
                          {pasajero.nombre_pasajero}
                        </h3>
                        <p className="text-sm text-gray-500">
                          {pasajero.email_pasajero}
                        </p>
                      </div>
                      <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-xs font-semibold">
                        {pasajero.aerolinea}
                      </span>
                    </div>

                    <div className="grid grid-cols-2 gap-2 text-sm mt-3">
                      <div>
                        <span className="text-gray-500">Vuelo:</span>
                        <span className="font-semibold ml-1">
                          {pasajero.numero_vuelo}
                        </span>
                      </div>
                      <div>
                        <span className="text-gray-500">Código:</span>
                        <span className="font-semibold ml-1">
                          {pasajero.codigo_reserva}
                        </span>
                      </div>
                      <div className="col-span-2">
                        <span className="text-gray-500">Ruta:</span>
                        <span className="font-semibold ml-1">
                          {pasajero.origen} → {pasajero.destino}
                        </span>
                      </div>
                      <div>
                        <span className="text-gray-500">Fecha:</span>
                        <span className="font-semibold ml-1">
                          {pasajero.fecha_vuelo}
                        </span>
                      </div>
                      <div>
                        <span className="text-gray-500">Hora:</span>
                        <span className="font-semibold ml-1">
                          {pasajero.hora_salida}
                        </span>
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
