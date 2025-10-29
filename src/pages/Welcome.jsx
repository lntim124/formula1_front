import { Link } from "react-router-dom";

export default function Welcome() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        alignItems: "center",
        background: "linear-gradient(180deg,#0b1626 0%, #0b1a2b 100%)",
        color: "white",
        fontFamily: "Inter, sans-serif",
        overflow: "hidden",
      
      }}
    >
      
      {/* --- COLUMNA IZQUIERDA --- */}
      <section
        style={{
          padding: "80px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "20px" }}>
          <img src="/vite.svg" alt="logo" height="28" />
          <h3 style={{ margin: 0, opacity: 0.85, letterSpacing: "2px" }}>RACE DATA</h3>
        </div>

        <h1 style={{ fontSize: "56px", lineHeight: "1.05", marginBottom: "10px" }}>
          BIENVENIDO AL EQUIPO
        </h1>

        <div
          style={{
            backgroundColor: "rgba(255,255,255,0.08)",
            border: "1px solid rgba(255,255,255,0.2)",
            borderRadius: "16px",
            padding: "24px",
            marginBottom: "30px",
            maxWidth: "500px",
          }}
        >
          <p style={{ fontSize: "18px", color: "#eaeaea" }}>
            Te damos la bienvenida a <strong>Red Bull Racing Data System</strong>. 
            ¡Adelante y explora los datos del equipo!
          </p>
          <p style={{ color: "#ffd700", fontWeight: "600", marginTop: "12px" }}>
            Christian Horner
          </p>
        </div>

        <Link
          to="/dashboard"
          style={{
            backgroundColor: "#DA291C",
            color: "#fff",
            fontWeight: "700",
            padding: "16px 32px",
            borderRadius: "14px",
            fontSize: "18px",
            textDecoration: "none",
            display: "inline-block",
            width: "fit-content",
            boxShadow: "0 6px 16px rgba(218,41,28,.35)",
          }}
        >
          Comenzar
        </Link>

        <p style={{ marginTop: "16px", color: "#a9b3c3", fontSize: "14px" }}>
          Implementado por <strong>RACE DATA</strong>
        </p>
      </section>

      {/* --- COLUMNA DERECHA: IMAGEN --- */}
      <section
        style={{
          height: "100%",
          position: "relative",
          overflow: "hidden",
          background: "url('/ch.jpeg') center/cover no-repeat",
        }}
      >
        {/* sombra degradada para contraste */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(90deg, rgba(11,22,38,0.8) 0%, rgba(11,22,38,0) 60%)",
          }}
        ></div>
      </section>
    </main>
  );
}