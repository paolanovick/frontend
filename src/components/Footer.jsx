// Footer.jsx
import React from "react";

export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#2d3748",
        color: "#ffffff",
        padding: "60px 40px 30px",
        marginTop: "60px",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            gap: "40px",
            marginBottom: "40px",
          }}
        >
          {/* Columna 1: Logo */}
          <div>
            <img
              src="https://drive.google.com/uc?export=view&id=14ANnqXL7wjkjRzIwKQT8HYe90sTO8U1B"
              alt="Logo Agencia"
              style={{
                maxWidth: "200px",
                height: "auto",
                marginBottom: "20px",
              }}
            />
            <p
              style={{
                color: "#a0aec0",
                fontSize: "14px",
                lineHeight: "1.6",
                margin: "0",
              }}
            >
              Sistema automático de check-in para tu comodidad y tranquilidad.
            </p>
          </div>

          {/* Columna 2: Navegación */}
          <div>
            <h3
              style={{
                fontSize: "16px",
                fontWeight: "600",
                marginBottom: "20px",
                color: "#ffffff",
                textTransform: "uppercase",
                letterSpacing: "0.5px",
              }}
            >
              Navegación
            </h3>
            <ul
              style={{
                listStyle: "none",
                padding: 0,
                margin: 0,
              }}
            >
              <li style={{ marginBottom: "12px" }}>
                <a
                  href="#inicio"
                  style={{
                    color: "#a0aec0",
                    textDecoration: "none",
                    fontSize: "14px",
                    transition: "color 0.3s ease",
                  }}
                >
                  Inicio
                </a>
              </li>
              <li style={{ marginBottom: "12px" }}>
                <a
                  href="#vuelos"
                  style={{
                    color: "#a0aec0",
                    textDecoration: "none",
                    fontSize: "14px",
                    transition: "color 0.3s ease",
                  }}
                >
                  Mis Vuelos
                </a>
              </li>
              <li style={{ marginBottom: "12px" }}>
                <a
                  href="#ayuda"
                  style={{
                    color: "#a0aec0",
                    textDecoration: "none",
                    fontSize: "14px",
                    transition: "color 0.3s ease",
                  }}
                >
                  Ayuda
                </a>
              </li>
              <li style={{ marginBottom: "12px" }}>
                <a
                  href="#contacto"
                  style={{
                    color: "#a0aec0",
                    textDecoration: "none",
                    fontSize: "14px",
                    transition: "color 0.3s ease",
                  }}
                >
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          {/* Columna 3: Políticas */}
          <div>
            <h3
              style={{
                fontSize: "16px",
                fontWeight: "600",
                marginBottom: "20px",
                color: "#ffffff",
                textTransform: "uppercase",
                letterSpacing: "0.5px",
              }}
            >
              Información Legal
            </h3>
            <ul
              style={{
                listStyle: "none",
                padding: 0,
                margin: 0,
              }}
            >
              <li style={{ marginBottom: "12px" }}>
                <a
                  href="#privacidad"
                  style={{
                    color: "#a0aec0",
                    textDecoration: "none",
                    fontSize: "14px",
                    transition: "color 0.3s ease",
                  }}
                >
                  Política de Privacidad
                </a>
              </li>
              <li style={{ marginBottom: "12px" }}>
                <a
                  href="#terminos"
                  style={{
                    color: "#a0aec0",
                    textDecoration: "none",
                    fontSize: "14px",
                    transition: "color 0.3s ease",
                  }}
                >
                  Términos y Condiciones
                </a>
              </li>
              <li style={{ marginBottom: "12px" }}>
                <a
                  href="#cookies"
                  style={{
                    color: "#a0aec0",
                    textDecoration: "none",
                    fontSize: "14px",
                    transition: "color 0.3s ease",
                  }}
                >
                  Política de Cookies
                </a>
              </li>
              <li style={{ marginBottom: "12px" }}>
                <a
                  href="#uso"
                  style={{
                    color: "#a0aec0",
                    textDecoration: "none",
                    fontSize: "14px",
                    transition: "color 0.3s ease",
                  }}
                >
                  Condiciones de Uso
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div
          style={{
            borderTop: "1px solid #4a5568",
            paddingTop: "20px",
            textAlign: "center",
          }}
        >
          <p
            style={{
              color: "#718096",
              fontSize: "13px",
              margin: 0,
            }}
          >
            © 2025 Sistema de Check-in Automático. Todos los derechos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
