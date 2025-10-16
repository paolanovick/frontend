// Header.jsx
import React from "react";
import logo from "../assets/flyPoloSF.png";

export default function Header() {
  return (
    <header
      style={{
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 40px",
        }}
      >
        <nav
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "20px 0",
          }}
        >
          <div style={{ display: "flex", alignItems: "center" }}>
            <img
              src={logo}
              alt="Logo Agencia"
              style={{
                maxWidth: "180px",
                height: "auto",
              }}
            />
          </div>

          <ul
            style={{
              display: "flex",
              listStyle: "none",
              margin: 0,
              padding: 0,
              gap: "30px",
            }}
          >
            <li>
              <a
                href="#inicio"
                style={{
                  color: "#ffffff",
                  textDecoration: "none",
                  fontSize: "15px",
                  fontWeight: "500",
                  transition: "opacity 0.3s ease",
                }}
              >
                Inicio
              </a>
            </li>
            <li>
              <a
                href="#vuelos"
                style={{
                  color: "#ffffff",
                  textDecoration: "none",
                  fontSize: "15px",
                  fontWeight: "500",
                  transition: "opacity 0.3s ease",
                }}
              >
                Mis Vuelos
              </a>
            </li>
            <li>
              <a
                href="#ayuda"
                style={{
                  color: "#ffffff",
                  textDecoration: "none",
                  fontSize: "15px",
                  fontWeight: "500",
                  transition: "opacity 0.3s ease",
                }}
              >
                Ayuda
              </a>
            </li>
            <li>
              <a
                href="#contacto"
                style={{
                  color: "#ffffff",
                  textDecoration: "none",
                  fontSize: "15px",
                  fontWeight: "500",
                  transition: "opacity 0.3s ease",
                }}
              >
                Contacto
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}


// ============================================


