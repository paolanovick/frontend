import React from "react";
import CheckinList from "./components/CheckinList";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-bold text-center mb-6">
        Recordatorios de Check-in
      </h1>
      <CheckinList csvFilePath="/vuelos.csv" />
    </div>
  );
}

export default App;
