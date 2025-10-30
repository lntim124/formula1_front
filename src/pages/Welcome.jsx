import { Link } from "react-router-dom";

export default function Welcome() {
  return (
    <main
      style={{
       width: "100%",
       minHeight: "100vh", // Cambiado a camelCase y con comillas
       display: "grid",
       gridTemplateColumns: "1fr 1fr",
       background: "linear-gradient(180deg, #0b1626 0%, #0b1a2b 100%)",
       color: "white",
       fontFamily: "Inter, sans-serif",
       overflow: "hidden",
       margin: 0,
       padding: 0

    }}

  
>
      
      {/* --- COLUMNA IZQUIERDA --- */}
      <section
        style={{
          padding: "80px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center", 
          textAlign: "center",
        }}
      >
        <div
  style={{

    position: "absolute",
    top: "20px",
    left: "20px",
    display: "flex",
    alignItems: "center",
    gap: "10px",
  
  }}
>
  <img src="/logo.jpeg" alt="Mi Logo" height="60" />
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
          <p style={{ color: "#ffd700", fontWeight: "600", marginTop: "12px",
              fontStyle: "italic",fontFamily: "'Dancing Script', cursive", 
    fontSize: "28px" }}>
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
          

    width: "100%",
    height: "100%",
    backgroundImage: "url('/ch.jpeg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    position: "relative"

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