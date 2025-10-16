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

  return (
    <div
     
    >
      <div style={{ maxWidth: "600px", margin: "0 auto" }}>
        {/* Header con Logo */}
        

        {/* Título */}
        <div
          style={{
            background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
            padding: "30px 40px",
            textAlign: "center",
          }}
        >
          <h1
            style={{
              margin: "0",
              color: "#ffffff",
              fontSize: "28px",
              fontWeight: "600",
            }}
          >
            ✈️ Sistema de Check-in Automático
          </h1>
          <p
            style={{
              margin: "10px 0 0 0",
              color: "#e0e7ff",
              fontSize: "14px",
            }}
          >
            Registrá los vuelos de tus pasajeros
          </p>
        </div>

        {/* Formulario */}
        <div
          style={{
            backgroundColor: "#ffffff",
            padding: "40px",
            borderRadius: "0 0 12px 12px",
            boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
          }}
        >
          <div style={{ marginBottom: "25px" }}>
            <label
              style={{
                display: "block",
                color: "#666666",
                fontSize: "12px",
                textTransform: "uppercase",
                letterSpacing: "0.5px",
                marginBottom: "8px",
              }}
            >
              Nombre del Pasajero
            </label>
            <input
              name="nombre_pasajero"
              placeholder="Juan Pérez"
              value={form.nombre_pasajero}
              onChange={handleChange}
              required
              style={{
                width: "100%",
                padding: "14px 16px",
                border: "1px solid #e0e0e0",
                borderRadius: "8px",
                fontSize: "15px",
                fontWeight: "600",
                color: "#606060ff",
                backgroundColor: "#f8f9fa",
                boxSizing: "border-box",
                outline: "none",
              }}
            />
          </div>

          <div style={{ marginBottom: "25px" }}>
            <label
              style={{
                display: "block",
                color: "#666666",
                fontSize: "12px",
                textTransform: "uppercase",
                letterSpacing: "0.5px",
                marginBottom: "8px",
              }}
            >
              Email del Pasajero
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
                padding: "14px 16px",
                border: "1px solid #e0e0e0",
                borderRadius: "8px",
                fontSize: "15px",
                fontWeight: "600",
                color: "#333333",
                backgroundColor: "#f8f9fa",
                boxSizing: "border-box",
                outline: "none",
              }}
            />
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "15px",
              marginBottom: "25px",
            }}
          >
            <div>
              <label
                style={{
                  display: "block",
                  color: "#666666",
                  fontSize: "12px",
                  textTransform: "uppercase",
                  letterSpacing: "0.5px",
                  marginBottom: "8px",
                }}
              >
                Aerolínea
              </label>
              <input
                name="aerolinea"
                placeholder="Aerolineas Argentinas"
                value={form.aerolinea}
                onChange={handleChange}
                required
                style={{
                  width: "100%",
                  padding: "14px 16px",
                  border: "1px solid #e0e0e0",
                  borderRadius: "8px",
                  fontSize: "15px",
                  fontWeight: "600",
                  color: "#333333",
                  backgroundColor: "#f8f9fa",
                  boxSizing: "border-box",
                  outline: "none",
                }}
              />
            </div>
            <div>
              <label
                style={{
                  display: "block",
                  color: "#666666",
                  fontSize: "12px",
                  textTransform: "uppercase",
                  letterSpacing: "0.5px",
                  marginBottom: "8px",
                }}
              >
                Vuelo
              </label>
              <input
                name="numero_vuelo"
                placeholder="AR1234"
                value={form.numero_vuelo}
                onChange={handleChange}
                required
                style={{
                  width: "100%",
                  padding: "14px 16px",
                  border: "1px solid #e0e0e0",
                  borderRadius: "8px",
                  fontSize: "15px",
                  fontWeight: "600",
                  color: "#333333",
                  backgroundColor: "#f8f9fa",
                  boxSizing: "border-box",
                  outline: "none",
                }}
              />
            </div>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "15px",
              marginBottom: "25px",
            }}
          >
            <div>
              <label
                style={{
                  display: "block",
                  color: "#666666",
                  fontSize: "12px",
                  textTransform: "uppercase",
                  letterSpacing: "0.5px",
                  marginBottom: "8px",
                }}
              >
                Origen
              </label>
              <input
                name="origen"
                placeholder="Buenos Aires (EZE)"
                value={form.origen}
                onChange={handleChange}
                required
                style={{
                  width: "100%",
                  padding: "14px 16px",
                  border: "1px solid #e0e0e0",
                  borderRadius: "8px",
                  fontSize: "15px",
                  fontWeight: "600",
                  color: "#333333",
                  backgroundColor: "#f8f9fa",
                  boxSizing: "border-box",
                  outline: "none",
                }}
              />
            </div>
            <div>
              <label
                style={{
                  display: "block",
                  color: "#666666",
                  fontSize: "12px",
                  textTransform: "uppercase",
                  letterSpacing: "0.5px",
                  marginBottom: "8px",
                }}
              >
                Destino
              </label>
              <input
                name="destino"
                placeholder="Bariloche"
                value={form.destino}
                onChange={handleChange}
                required
                style={{
                  width: "100%",
                  padding: "14px 16px",
                  border: "1px solid #e0e0e0",
                  borderRadius: "8px",
                  fontSize: "15px",
                  fontWeight: "600",
                  color: "#333333",
                  backgroundColor: "#f8f9fa",
                  boxSizing: "border-box",
                  outline: "none",
                }}
              />
            </div>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "15px",
              marginBottom: "25px",
            }}
          >
            <div>
              <label
                style={{
                  display: "block",
                  color: "#666666",
                  fontSize: "12px",
                  textTransform: "uppercase",
                  letterSpacing: "0.5px",
                  marginBottom: "8px",
                }}
              >
                Fecha
              </label>
              <input
                type="date"
                name="fecha_vuelo"
                value={form.fecha_vuelo}
                onChange={handleChange}
                required
                style={{
                  width: "100%",
                  padding: "14px 16px",
                  border: "1px solid #e0e0e0",
                  borderRadius: "8px",
                  fontSize: "15px",
                  fontWeight: "600",
                  color: "#333333",
                  backgroundColor: "#f8f9fa",
                  boxSizing: "border-box",
                  outline: "none",
                }}
              />
            </div>
            <div>
              <label
                style={{
                  display: "block",
                  color: "#666666",
                  fontSize: "12px",
                  textTransform: "uppercase",
                  letterSpacing: "0.5px",
                  marginBottom: "8px",
                }}
              >
                Hora de salida
              </label>
              <input
                type="time"
                name="hora_salida"
                value={form.hora_salida}
                onChange={handleChange}
                required
                style={{
                  width: "100%",
                  padding: "14px 16px",
                  border: "1px solid #e0e0e0",
                  borderRadius: "8px",
                  fontSize: "15px",
                  fontWeight: "600",
                  color: "#333333",
                  backgroundColor: "#f8f9fa",
                  boxSizing: "border-box",
                  outline: "none",
                }}
              />
            </div>
          </div>

          <div style={{ marginBottom: "30px" }}>
            <label
              style={{
                display: "block",
                color: "#666666",
                fontSize: "12px",
                textTransform: "uppercase",
                letterSpacing: "0.5px",
                marginBottom: "8px",
              }}
            >
              Código de reserva
            </label>
            <input
              name="codigo_reserva"
              placeholder="ABC123"
              value={form.codigo_reserva}
              onChange={handleChange}
              required
              style={{
                width: "100%",
                padding: "14px 16px",
                border: "1px solid #e0e0e0",
                borderRadius: "8px",
                fontSize: "15px",
                fontWeight: "600",
                color: "#333333",
                backgroundColor: "#f8f9fa",
                boxSizing: "border-box",
                letterSpacing: "1px",
                outline: "none",
              }}
            />
          </div>

          <button
            onClick={handleSubmit}
            disabled={isSubmitting}
            style={{
              width: "100%",
              padding: "16px 40px",
              background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
              color: "#ffffff",
              border: "none",
              borderRadius: "8px",
              fontSize: "16px",
              fontWeight: "600",
              cursor: isSubmitting ? "not-allowed" : "pointer",
              boxShadow: "0 4px 12px rgba(102, 126, 234, 0.3)",
              opacity: isSubmitting ? "0.7" : "1",
              transition: "all 0.3s ease",
            }}
          >
            {isSubmitting ? "Inscribiendo..." : "Inscribir Vuelo"}
          </button>

          {mensaje && (
            <div
              style={{
                marginTop: "20px",
                padding: "20px",
                backgroundColor: mensaje.includes("✅") ? "#d4edda" : "#f8d7da",
                borderRadius: "8px",
                borderLeft: mensaje.includes("✅")
                  ? "4px solid #28a745"
                  : "4px solid #dc3545",
                color: mensaje.includes("✅") ? "#155724" : "#721c24",
                fontSize: "14px",
                lineHeight: "1.6",
              }}
            >
              {mensaje}
            </div>
          )}
        </div>

        {/* Footer */}
        <div
          style={{
            backgroundColor: "#f8f9fa",
            padding: "25px 40px",
            borderRadius: "0 0 12px 12px",
            borderTop: "1px solid #e0e0e0",
            marginTop: "-12px",
          }}
        >
          <p
            style={{
              margin: "0",
              color: "#999999",
              fontSize: "12px",
              textAlign: "center",
              lineHeight: "1.5",
            }}
          >
            Sistema automático de recordatorios de check-in
          </p>
        </div>
      </div>
    </div>
  );
}
