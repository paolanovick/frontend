import React, { useState } from "react";

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
    <div
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(135deg, #f3e7ff 0%, #e0f2fe 50%, #ddd6fe 100%)",
        padding: "3rem 1rem",
      }}
    >
      <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
        {/* Header con Logo */}
        <div
          style={{
            background: "white",
            borderRadius: "16px",
            boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
            padding: "2rem",
            marginBottom: "2rem",
            textAlign: "center",
          }}
        >
          <img
            src="https://drive.google.com/uc?export=view&id=14ANnqXL7wjkjRzIwKQT8HYe90sTO8U1B"
            alt="TripNow Logo"
            style={{
              margin: "0 auto 1.5rem",
              height: "80px",
              objectFit: "contain",
              display: "block",
            }}
          />
          <h1
            style={{
              fontSize: "2.5rem",
              fontWeight: "bold",
              background: "linear-gradient(135deg, #7c3aed, #4f46e5)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              marginBottom: "0.75rem",
            }}
          >
            Sistema de Check-in Automático
          </h1>
          <p style={{ color: "#6b7280", fontSize: "1.125rem" }}>
            Registrá los vuelos de tus pasajeros y enviaremos recordatorios
            automáticos
          </p>
        </div>

        <div
          style={{ display: "grid", gridTemplateColumns: "1fr", gap: "2rem" }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "2rem",
            }}
          >
            {/* Formulario */}
            <div
              style={{
                background: "white",
                borderRadius: "16px",
                boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
                padding: "2rem",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "1rem",
                  marginBottom: "1.5rem",
                  paddingBottom: "1rem",
                  borderBottom: "2px solid #f3f4f6",
                }}
              >
                <div
                  style={{
                    background: "linear-gradient(135deg, #7c3aed, #4f46e5)",
                    padding: "0.75rem",
                    borderRadius: "12px",
                    boxShadow: "0 4px 12px rgba(124, 58, 237, 0.3)",
                  }}
                >
                  <span style={{ fontSize: "1.75rem" }}>✈️</span>
                </div>
                <h2
                  style={{
                    fontSize: "1.5rem",
                    fontWeight: "bold",
                    color: "#1f2937",
                    margin: 0,
                  }}
                >
                  Inscribir Nuevo Vuelo
                </h2>
              </div>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "1.25rem",
                }}
              >
                {/* Nombre */}
                <div>
                  <label
                    style={{
                      display: "block",
                      fontSize: "0.875rem",
                      fontWeight: "600",
                      color: "#374151",
                      marginBottom: "0.5rem",
                    }}
                  >
                    👤 Nombre del Pasajero
                  </label>
                  <input
                    name="nombre_pasajero"
                    placeholder="Juan Pérez"
                    value={form.nombre_pasajero}
                    onChange={handleChange}
                    required
                    style={{
                      width: "100%",
                      padding: "0.875rem 1rem",
                      border: "2px solid #e5e7eb",
                      borderRadius: "12px",
                      fontSize: "1rem",
                      color: "#374151",
                      outline: "none",
                      transition: "all 0.2s",
                    }}
                    onFocus={(e) => (e.target.style.borderColor = "#7c3aed")}
                    onBlur={(e) => (e.target.style.borderColor = "#e5e7eb")}
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    style={{
                      display: "block",
                      fontSize: "0.875rem",
                      fontWeight: "600",
                      color: "#374151",
                      marginBottom: "0.5rem",
                    }}
                  >
                    📧 Email del Pasajero
                  </label>
                  <input
                    name="email_pasajero"
                    type="email"
                    placeholder="juan@email.com"
                    value={form.email_pasajero}
                    onChange={handleChange}
                    required
                    style={{
                      width: "100%",
                      padding: "0.875rem 1rem",
                      border: "2px solid #e5e7eb",
                      borderRadius: "12px",
                      fontSize: "1rem",
                      color: "#374151",
                      outline: "none",
                      transition: "all 0.2s",
                    }}
                    onFocus={(e) => (e.target.style.borderColor = "#7c3aed")}
                    onBlur={(e) => (e.target.style.borderColor = "#e5e7eb")}
                  />
                </div>

                {/* Aerolínea y Vuelo */}
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "1rem",
                  }}
                >
                  <div>
                    <label
                      style={{
                        display: "block",
                        fontSize: "0.875rem",
                        fontWeight: "600",
                        color: "#374151",
                        marginBottom: "0.5rem",
                      }}
                    >
                      🏢 Aerolínea
                    </label>
                    <input
                      name="aerolinea"
                      placeholder="Aerolineas Argentinas"
                      value={form.aerolinea}
                      onChange={handleChange}
                      required
                      style={{
                        width: "100%",
                        padding: "0.875rem 1rem",
                        border: "2px solid #e5e7eb",
                        borderRadius: "12px",
                        fontSize: "1rem",
                        color: "#374151",
                        outline: "none",
                        transition: "all 0.2s",
                      }}
                      onFocus={(e) => (e.target.style.borderColor = "#7c3aed")}
                      onBlur={(e) => (e.target.style.borderColor = "#e5e7eb")}
                    />
                  </div>
                  <div>
                    <label
                      style={{
                        display: "block",
                        fontSize: "0.875rem",
                        fontWeight: "600",
                        color: "#374151",
                        marginBottom: "0.5rem",
                      }}
                    >
                      #️⃣ Número de Vuelo
                    </label>
                    <input
                      name="numero_vuelo"
                      placeholder="AR1234"
                      value={form.numero_vuelo}
                      onChange={handleChange}
                      required
                      style={{
                        width: "100%",
                        padding: "0.875rem 1rem",
                        border: "2px solid #e5e7eb",
                        borderRadius: "12px",
                        fontSize: "1rem",
                        color: "#374151",
                        outline: "none",
                        transition: "all 0.2s",
                      }}
                      onFocus={(e) => (e.target.style.borderColor = "#7c3aed")}
                      onBlur={(e) => (e.target.style.borderColor = "#e5e7eb")}
                    />
                  </div>
                </div>

                {/* Origen y Destino */}
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "1rem",
                  }}
                >
                  <div>
                    <label
                      style={{
                        display: "block",
                        fontSize: "0.875rem",
                        fontWeight: "600",
                        color: "#374151",
                        marginBottom: "0.5rem",
                      }}
                    >
                      📍 Origen
                    </label>
                    <input
                      name="origen"
                      placeholder="Buenos Aires (EZE)"
                      value={form.origen}
                      onChange={handleChange}
                      required
                      style={{
                        width: "100%",
                        padding: "0.875rem 1rem",
                        border: "2px solid #e5e7eb",
                        borderRadius: "12px",
                        fontSize: "1rem",
                        color: "#374151",
                        outline: "none",
                        transition: "all 0.2s",
                      }}
                      onFocus={(e) => (e.target.style.borderColor = "#7c3aed")}
                      onBlur={(e) => (e.target.style.borderColor = "#e5e7eb")}
                    />
                  </div>
                  <div>
                    <label
                      style={{
                        display: "block",
                        fontSize: "0.875rem",
                        fontWeight: "600",
                        color: "#374151",
                        marginBottom: "0.5rem",
                      }}
                    >
                      📍 Destino
                    </label>
                    <input
                      name="destino"
                      placeholder="Bariloche"
                      value={form.destino}
                      onChange={handleChange}
                      required
                      style={{
                        width: "100%",
                        padding: "0.875rem 1rem",
                        border: "2px solid #e5e7eb",
                        borderRadius: "12px",
                        fontSize: "1rem",
                        color: "#374151",
                        outline: "none",
                        transition: "all 0.2s",
                      }}
                      onFocus={(e) => (e.target.style.borderColor = "#7c3aed")}
                      onBlur={(e) => (e.target.style.borderColor = "#e5e7eb")}
                    />
                  </div>
                </div>

                {/* Fecha y Hora */}
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "1rem",
                  }}
                >
                  <div>
                    <label
                      style={{
                        display: "block",
                        fontSize: "0.875rem",
                        fontWeight: "600",
                        color: "#374151",
                        marginBottom: "0.5rem",
                      }}
                    >
                      📅 Fecha de Vuelo
                    </label>
                    <input
                      type="date"
                      name="fecha_vuelo"
                      value={form.fecha_vuelo}
                      onChange={handleChange}
                      required
                      style={{
                        width: "100%",
                        padding: "0.875rem 1rem",
                        border: "2px solid #e5e7eb",
                        borderRadius: "12px",
                        fontSize: "1rem",
                        color: "#374151",
                        outline: "none",
                        transition: "all 0.2s",
                      }}
                      onFocus={(e) => (e.target.style.borderColor = "#7c3aed")}
                      onBlur={(e) => (e.target.style.borderColor = "#e5e7eb")}
                    />
                  </div>
                  <div>
                    <label
                      style={{
                        display: "block",
                        fontSize: "0.875rem",
                        fontWeight: "600",
                        color: "#374151",
                        marginBottom: "0.5rem",
                      }}
                    >
                      🕐 Hora de Salida
                    </label>
                    <input
                      type="time"
                      name="hora_salida"
                      value={form.hora_salida}
                      onChange={handleChange}
                      required
                      style={{
                        width: "100%",
                        padding: "0.875rem 1rem",
                        border: "2px solid #e5e7eb",
                        borderRadius: "12px",
                        fontSize: "1rem",
                        color: "#374151",
                        outline: "none",
                        transition: "all 0.2s",
                      }}
                      onFocus={(e) => (e.target.style.borderColor = "#7c3aed")}
                      onBlur={(e) => (e.target.style.borderColor = "#e5e7eb")}
                    />
                  </div>
                </div>

                {/* Código de reserva */}
                <div>
                  <label
                    style={{
                      display: "block",
                      fontSize: "0.875rem",
                      fontWeight: "600",
                      color: "#374151",
                      marginBottom: "0.5rem",
                    }}
                  >
                    🎫 Código de Reserva
                  </label>
                  <input
                    name="codigo_reserva"
                    placeholder="ABC123"
                    value={form.codigo_reserva}
                    onChange={handleChange}
                    required
                    style={{
                      width: "100%",
                      padding: "0.875rem 1rem",
                      border: "2px solid #e5e7eb",
                      borderRadius: "12px",
                      fontSize: "1rem",
                      color: "#374151",
                      outline: "none",
                      transition: "all 0.2s",
                    }}
                    onFocus={(e) => (e.target.style.borderColor = "#7c3aed")}
                    onBlur={(e) => (e.target.style.borderColor = "#e5e7eb")}
                  />
                </div>

                {/* Botón */}
                <button
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  style={{
                    width: "100%",
                    background: isSubmitting
                      ? "#9ca3af"
                      : "linear-gradient(135deg, #7c3aed, #4f46e5)",
                    color: "white",
                    padding: "1rem",
                    borderRadius: "12px",
                    fontWeight: "bold",
                    fontSize: "1.125rem",
                    border: "none",
                    cursor: isSubmitting ? "not-allowed" : "pointer",
                    boxShadow: "0 4px 12px rgba(124, 58, 237, 0.3)",
                    transition: "all 0.2s",
                  }}
                  onMouseOver={(e) => {
                    if (!isSubmitting) e.target.style.transform = "scale(1.02)";
                  }}
                  onMouseOut={(e) => {
                    e.target.style.transform = "scale(1)";
                  }}
                >
                  {isSubmitting ? "Inscribiendo..." : "✈️ Inscribir Vuelo"}
                </button>

                {/* Mensaje */}
                {mensaje && (
                  <div
                    style={{
                      padding: "1rem",
                      borderRadius: "12px",
                      textAlign: "center",
                      fontWeight: "600",
                      background: mensaje.includes("✅")
                        ? "#d1fae5"
                        : "#fee2e2",
                      color: mensaje.includes("✅") ? "#065f46" : "#991b1b",
                      border: `2px solid ${
                        mensaje.includes("✅") ? "#6ee7b7" : "#fca5a5"
                      }`,
                    }}
                  >
                    {mensaje}
                  </div>
                )}
              </div>
            </div>

            {/* Lista de Pasajeros */}
            <div
              style={{
                background: "white",
                borderRadius: "16px",
                boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
                padding: "2rem",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginBottom: "1.5rem",
                  paddingBottom: "1rem",
                  borderBottom: "2px solid #f3f4f6",
                }}
              >
                <h2
                  style={{
                    fontSize: "1.5rem",
                    fontWeight: "bold",
                    color: "#1f2937",
                    margin: 0,
                  }}
                >
                  Pasajeros
                </h2>
                <span
                  style={{
                    background: "linear-gradient(135deg, #7c3aed, #4f46e5)",
                    color: "white",
                    padding: "0.5rem 1rem",
                    borderRadius: "9999px",
                    fontSize: "0.875rem",
                    fontWeight: "bold",
                    boxShadow: "0 2px 8px rgba(124, 58, 237, 0.3)",
                  }}
                >
                  {pasajeros.length}
                </span>
              </div>

              {pasajeros.length === 0 ? (
                <div
                  style={{
                    textAlign: "center",
                    padding: "4rem 0",
                    color: "#9ca3af",
                  }}
                >
                  <div
                    style={{
                      background: "#f3f4f6",
                      width: "80px",
                      height: "80px",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      margin: "0 auto 1rem",
                      fontSize: "2.5rem",
                    }}
                  >
                    ✈️
                  </div>
                  <p style={{ fontSize: "1.125rem", fontWeight: "500" }}>
                    Sin pasajeros registrados
                  </p>
                  <p style={{ fontSize: "0.875rem", marginTop: "0.5rem" }}>
                    Los vuelos aparecerán aquí
                  </p>
                </div>
              ) : (
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.75rem",
                    maxHeight: "600px",
                    overflowY: "auto",
                  }}
                >
                  {pasajeros.map((pasajero) => (
                    <div
                      key={pasajero.id}
                      style={{
                        border: "2px solid #f3f4f6",
                        borderRadius: "12px",
                        padding: "1rem",
                        transition: "all 0.2s",
                      }}
                      onMouseOver={(e) => {
                        e.currentTarget.style.borderColor = "#c4b5fd";
                        e.currentTarget.style.boxShadow =
                          "0 4px 12px rgba(124, 58, 237, 0.15)";
                      }}
                      onMouseOut={(e) => {
                        e.currentTarget.style.borderColor = "#f3f4f6";
                        e.currentTarget.style.boxShadow = "none";
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          alignItems: "start",
                          justifyContent: "space-between",
                          marginBottom: "0.75rem",
                        }}
                      >
                        <div style={{ flex: 1 }}>
                          <h3
                            style={{
                              fontWeight: "bold",
                              color: "#1f2937",
                              fontSize: "1rem",
                              marginBottom: "0.25rem",
                            }}
                          >
                            {pasajero.nombre_pasajero}
                          </h3>
                          <p
                            style={{
                              fontSize: "0.75rem",
                              color: "#6b7280",
                              wordBreak: "break-all",
                            }}
                          >
                            {pasajero.email_pasajero}
                          </p>
                        </div>
                        <div
                          style={{
                            display: "flex",
                            gap: "0.5rem",
                            alignItems: "start",
                          }}
                        >
                          <span
                            style={{
                              background: "#f3e8ff",
                              color: "#7c3aed",
                              padding: "0.25rem 0.5rem",
                              borderRadius: "8px",
                              fontSize: "0.75rem",
                              fontWeight: "bold",
                              whiteSpace: "nowrap",
                            }}
                          >
                            {pasajero.aerolinea}
                          </span>
                          <button
                            onClick={() => eliminarPasajero(pasajero.id)}
                            style={{
                              color: "#ef4444",
                              background: "transparent",
                              border: "none",
                              padding: "0.375rem",
                              borderRadius: "8px",
                              cursor: "pointer",
                              transition: "all 0.2s",
                              fontSize: "1rem",
                            }}
                            onMouseOver={(e) =>
                              (e.target.style.background = "#fee2e2")
                            }
                            onMouseOut={(e) =>
                              (e.target.style.background = "transparent")
                            }
                            title="Eliminar"
                          >
                            🗑️
                          </button>
                        </div>
                      </div>

                      <div
                        style={{
                          display: "grid",
                          gridTemplateColumns: "1fr 1fr",
                          gap: "0.5rem",
                          fontSize: "0.75rem",
                          background: "#f9fafb",
                          padding: "0.75rem",
                          borderRadius: "8px",
                        }}
                      >
                        <div>
                          <span style={{ color: "#6b7280", fontWeight: "500" }}>
                            Vuelo:
                          </span>
                          <span
                            style={{
                              fontWeight: "bold",
                              marginLeft: "0.25rem",
                              color: "#1f2937",
                            }}
                          >
                            {pasajero.numero_vuelo}
                          </span>
                        </div>
                        <div>
                          <span style={{ color: "#6b7280", fontWeight: "500" }}>
                            Código:
                          </span>
                          <span
                            style={{
                              fontWeight: "bold",
                              marginLeft: "0.25rem",
                              color: "#1f2937",
                            }}
                          >
                            {pasajero.codigo_reserva}
                          </span>
                        </div>
                        <div
                          style={{ gridColumn: "1 / -1", marginTop: "0.25rem" }}
                        >
                          <span style={{ color: "#6b7280", fontWeight: "500" }}>
                            Ruta:
                          </span>
                          <div
                            style={{
                              fontWeight: "bold",
                              color: "#1f2937",
                              marginTop: "0.25rem",
                            }}
                          >
                            {pasajero.origen}{" "}
                            <span
                              style={{ color: "#7c3aed", margin: "0 0.25rem" }}
                            >
                              →
                            </span>{" "}
                            {pasajero.destino}
                          </div>
                        </div>
                        <div style={{ marginTop: "0.25rem" }}>
                          <span style={{ color: "#6b7280", fontWeight: "500" }}>
                            Fecha:
                          </span>
                          <div style={{ fontWeight: "bold", color: "#1f2937" }}>
                            {pasajero.fecha_vuelo}
                          </div>
                        </div>
                        <div style={{ marginTop: "0.25rem" }}>
                          <span style={{ color: "#6b7280", fontWeight: "500" }}>
                            Hora:
                          </span>
                          <div style={{ fontWeight: "bold", color: "#1f2937" }}>
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
    </div>
  );
}
