import React from "react";
import Header from "./Header"; // Componente para el logo y navegación
import Footer from "./Footer"; // Componente footer
import CheckinList from "./components/CheckinList"; // Lista de vuelos
import InscribirVueloForm from "./components/InscribirVueloForm"; // Formulario

function App() {
  // Como n8n maneja la carga y envío de datos, aquí no necesitas lógica adicional

  return (
    <div>
      <Header />

      {/* Sección del formulario - será la primera sección visible */}
      <section
        style={{ padding: "40px 20px", maxWidth: "800px", margin: "0 auto" }}
      >
        <InscribirVueloForm />
      </section>

      {/* Lista de vuelos próximos */}
      <section style={{ padding: "20px" }}>
        <CheckinList vuelos={[]} />{" "}
        {/* Puedes actualizar esto en el futuro si necesitas */}
      </section>

      <Footer />
    </div>
  );
}

export default App;
