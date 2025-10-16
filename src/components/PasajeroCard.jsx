// src/components/PasajeroCard.jsx
export default function PasajeroCard({ pasajero }) {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 mt-8">
      <div className="flex justify-between items-start mb-3">
        <div>
          <h3 className="font-bold text-gray-800 text-lg mb-1">
            {pasajero.nombre_pasajero}
          </h3>
          <p className="text-sm text-gray-500 break-all">
            {pasajero.email_pasajero}
          </p>
        </div>
        <span className="bg-violet-100 text-violet-700 px-3 py-1 rounded-md text-sm font-bold">
          {pasajero.aerolinea}
        </span>
      </div>

      <div className="grid grid-cols-2 gap-3 text-sm bg-gray-50 p-4 rounded-md">
        <div>
          <span className="text-gray-500 font-medium">Vuelo:</span>{" "}
          <span className="font-bold text-gray-800">
            {pasajero.numero_vuelo}
          </span>
        </div>
        <div>
          <span className="text-gray-500 font-medium">Código:</span>{" "}
          <span className="font-bold text-gray-800">
            {pasajero.codigo_reserva}
          </span>
        </div>
        <div className="col-span-2">
          <span className="text-gray-500 font-medium">Ruta:</span>
          <div className="font-bold text-gray-800 mt-1">
            {pasajero.origen} <span className="text-violet-600 mx-1">→</span>
            {pasajero.destino}
          </div>
        </div>
        <div>
          <span className="text-gray-500 font-medium">Fecha:</span>
          <div className="font-bold text-gray-800">{pasajero.fecha_vuelo}</div>
        </div>
        <div>
          <span className="text-gray-500 font-medium">Hora:</span>
          <div className="font-bold text-gray-800">{pasajero.hora_salida}</div>
        </div>
      </div>
    </div>
  );
}
