import React, { useEffect, useState } from "react";
import Papa from "papaparse";
import CheckinList from "./components/CheckinList";
import InscribirVueloForm from "./components/InscribirVueloForm";
import "./index.css";

function App() {
  const [vuelos, setVuelos] = useState([]);

  useEffect(() => {
    // Leer CSV desde public
    Papa.parse("/vuelos.csv", {
      download: true,
      header: true,
      complete: (results) => {
        // Filtrar vuelos próximos 24-48h
        const ahora = new Date();
        const en24horas = new Date(ahora.getTime() + 24 * 60 * 60 * 1000);
        const vuelosProximos = results.data.filter((vuelo) => {
          const fechaVuelo = new Date(
            `${vuelo.fecha_vuelo} ${vuelo.hora_salida}`
          );
          const tiempoAntes = new Date(
            fechaVuelo.getTime() - 24 * 60 * 60 * 1000
          );
          return ahora >= tiempoAntes && fechaVuelo <= en24horas;
        });
        setVuelos(vuelosProximos);
      },
      error: (err) => console.error("Error leyendo CSV:", err),
    });
  }, []);

  return (
    <div className="App">
      <h1>Vuelos Próximos para Check-in</h1>
      <InscribirVueloForm />
      <CheckinList vuelos={vuelos} />
    </div>
  );
}

export default App;
