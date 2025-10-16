import React from "react";

const Footer = () => {
  return (
    <footer style={{ backgroundColor: "#f8f8f8", padding: "40px 20px" }}>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          maxWidth: "1200px",
          margin: "0 auto",
          justifyContent: "space-between",
        }}
      >
        {/* Columna 1: Logo */}
        <div style={{ flex: "1 1 200px", marginBottom: "20px" }}>
          <img src="/logo.png" alt="Logo" style={{ width: "150px" }} />
        </div>

        {/* Columna 2: Secciones del nav */}
        <div style={{ flex: "1 1 200px", marginBottom: "20px" }}>
          <h4>Secciones</h4>
          <ul style={{ listStyle: "none", padding: 0 }}>
            <li>
              <a
                href="#inicio"
                style={{ textDecoration: "none", color: "#333" }}
              >
                Inicio
              </a>
            </li>
            <li>
              <a
                href="#servicios"
                style={{ textDecoration: "none", color: "#333" }}
              >
                Servicios
              </a>
            </li>
            <li>
              <a
                href="#nosotros"
                style={{ textDecoration: "none", color: "#333" }}
              >
                Nosotros
              </a>
            </li>
            <li>
              <a
                href="#contacto"
                style={{ textDecoration: "none", color: "#333" }}
              >
                Contacto
              </a>
            </li>
          </ul>
        </div>

        {/* Columna 3: Políticas y condiciones */}
        <div style={{ flex: "1 1 200px", marginBottom: "20px" }}>
          <h4>Política y Condiciones</h4>
          <ul style={{ listStyle: "none", padding: 0 }}>
            <li>
              <a
                href="#politica"
                style={{ textDecoration: "none", color: "#333" }}
              >
                Política de Privacidad
              </a>
            </li>
            <li>
              <a
                href="#seguridad"
                style={{ textDecoration: "none", color: "#333" }}
              >
                Seguridad
              </a>
            </li>
            <li>
              <a
                href="#condiciones"
                style={{ textDecoration: "none", color: "#333" }}
              >
                Condiciones de Uso
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
