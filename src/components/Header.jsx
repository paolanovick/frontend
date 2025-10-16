import React from "react";

function Header() {
  const logoUrl =
    "https://drive.google.com/uc?export=view&id=14ANnqXL7wjkjRzIwKQT8HYe90sTO8U1B";

  return (
    <header
      style={{
        display: "flex",
        alignItems: "center",
        padding: "10px",
        backgroundColor: "#f5f5f5",
        flexDirection: "column",
      }}
    >
      <img
        src={logoUrl}
        alt="Logo Agencia"
        style={{
          maxWidth: "200px",
          height: "auto",
          display: "block",
          margin: "0 auto",
        }}
      />
      <nav style={{ marginTop: "10px" }}>
        <ul
          style={{ display: "flex", listStyle: "none", padding: 0, margin: 0 }}
        >
          <li style={{ marginRight: "20px" }}>
            <a href="#inicio">Inicio</a>
          </li>
          <li style={{ marginRight: "20px" }}>
            <a href="#sobre">Sobre Nosotros</a>
          </li>
          <li style={{ marginRight: "20px" }}>
            <a href="#servicios">Servicios</a>
          </li>
          <li>
            <a href="#contacto">Contacto</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
