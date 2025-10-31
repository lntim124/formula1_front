import { useEffect, useState } from "react";
import {
  FaHome,
  FaFlagCheckered,
  FaUser,
  FaCar,
  FaTools,
  FaRoad,
  FaExclamationTriangle,
  FaChartBar,
} from "react-icons/fa";

/* ---------- Subcomponente: item del menú ---------- */
function NavItem({ icon, label, active }) {
  const base = {
    display: "flex",
    alignItems: "center",
    gap: 10,
    padding: "10px 12px",
    borderRadius: 10,
    cursor: "pointer",
    color: active ? "#fff" : "#a9b3c3",
    background: active ? "rgba(255,255,255,.10)" : "transparent",
    transition: "background .15s ease,color .15s ease",
    marginBottom: 8,
  };
  const ico = { fontSize: 16 };
  return (
    <div style={base}>
      <span style={ico}>{icon}</span>
      <span>{label}</span>
    </div>
  );
}

/* ---------- Estilos ---------- */
const styles = {
  layout: {
    display: "grid",
    gridTemplateColumns: "260px 1fr", // Sidebar + contenido
    minHeight: "100vh",
    background: "linear-gradient(180deg,#0b1626 0%, #0b1a2b 100%)",
    color: "#fff",
    fontFamily:
      "Inter, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif",
  },
  sidebar: {
    background: "#0e1a33",
    borderRight: "1px solid rgba(255,255,255,.08)",
    padding: "22px 16px",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
  },
  brandRow: {
    marginBottom: "28px",
    width: "100%",
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  brandImg: { height: 60, display: "block" },
  main: { padding: "18px 28px" },
  topbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottom: "1px solid rgba(255,255,255,.10)",
    paddingBottom: 10,
    marginBottom: 16,
  },
  topbarTitle: {
    margin: 0,
    fontSize: 18,
    letterSpacing: ".5px",
    color: "#dfe7f5",
    fontWeight: 700,
  },
  topbarRight: {
    display: "flex",
    gap: 18,
    alignItems: "center",
    color: "#a9b3c3",
    fontSize: 14,
  },
  clock: { fontVariantNumeric: "tabular-nums" },

homeContainer: {
  display: "flex",
  flexDirection: "row", // ✅ siempre uno al lado del otro
  alignItems: "center",
  justifyContent: "center",
  gap: "60px",
  marginTop: "40px",
  padding: "0 4rem",
  maxWidth: "1600px",
  margin: "0 auto",
},

homeImg: {
  width: "420px",
  height: "auto",
  borderRadius: "12px",
  border: "1px solid rgba(255,255,255,.15)",
  objectFit: "cover",
  boxShadow: "0 0 25px rgba(0,0,0,0.4)",
  flexShrink: 0, // ✅ evita que se encoja
},

homeText: {
  flex: 1,
  fontSize: "12px",
  lineHeight: "1.8",
  color: "#dce2ee",
  textAlign: "justify",
  fontFamily: "'Poppins', sans-serif",
  maxWidth: "700px",
},

homeTitle: {
  fontFamily: "'Orbitron', sans-serif",
  fontSize: "20px",
  fontWeight: 900,
  color: "#ffffff",
  textAlign: "center",
  textTransform: "uppercase",
  letterSpacing: "2px",
  marginBottom: "25px",
  width: "100%",
},

// 📱 Solo en pantallas pequeñas apila vertical
"@media (max-width: 1024px)": {
  homeContainer: {
    flexDirection: "column", // ✅ solo se apilan en pantallas pequeñas
    padding: "1rem",
    textAlign: "center",
  },
  homeImg: {
    width: "80%",
    maxWidth: "350px",
  },
  homeText: {
    maxWidth: "90%",
  },
},

// 🖥️ Pantallas grandes
"@media (min-width: 1600px)": {
  homeContainer: {
    gap: "100px",
  },
  homeImg: {
    width: "500px",
  },
  homeText: {
    fontSize: "20px",
    maxWidth: "800px",
  },
  homeTitle: {
    fontSize: "30px",
  },
}}

export default function Principal() {
  const [hora, setHora] = useState("");

  useEffect(() => {
    const t = setInterval(() => {
      setHora(
        new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
      );
    }, 1000);
    return () => clearInterval(t);
  }, []);

  const c = styles;

  return (
    <div style={c.layout}>
      {/* Sidebar */}
      <aside style={c.sidebar}>
        <div style={c.brandRow}>
          <img src="/logo.jpeg" alt="Mi Logo" style={c.brandImg} />
        </div>

        <nav>
          {/* 🔹 Nuevo botón de inicio con ícono de casa */}
          <NavItem icon={<FaHome />} label="Inicio" active />

          <NavItem icon={<FaUser />} label="Pilotos" />
          <NavItem icon={<FaTools />} label="Técnicos y Pits" />
          <NavItem icon={<FaFlagCheckered />} label="Carreras" />
          <NavItem icon={<FaRoad />} label="Circuitos" />
          <NavItem icon={<FaCar />} label="Autos" />
          <NavItem icon={<FaExclamationTriangle />} label="Penalizaciones" />
          <NavItem icon={<FaChartBar />} label="Análisis y Reportes" />
        </nav>
      </aside>

      {/* Panel derecho (solo encabezado) */}
      <main style={c.main}>
        <header style={c.topbar}>
          <h1 style={{ ...c.topbarTitle, textAlign: "left" }}>DATA SYSTEM</h1>
          <div style={c.topbarRight}>
            <span style={c.clock}>{hora}</span>
            <span>
              Jefe de Equipo: <strong>Christian Horner</strong>
            </span>
          </div>
        </header>

          <div style={c.homeContainer}>
          <img
            src="/f1.jpeg" 
            alt="Imagen de inicio"
            style={c.homeImg}
          />

          <div style={c.homeTitle}>
         <h2>   CONOCE LA HISTORIA DE TU EQUIPO</h2>
 
            <p>
              Red Bull Racing es una de las escuderías más exitosas y admiradas de la Fórmula 1 moderna. 
              Fundada en 2005, tras la compra del antiguo equipo Jaguar Racing por parte de Red Bull GmbH, 
              la escudería estableció su sede en Milton Keynes, Reino Unido. Desde sus primeros años,
              Red Bull se distinguió por su estilo audaz, su enfoque innovador y una imagen fresca que rompió
              con la tradición más conservadora del automovilismo.
            </p>

            <p>
              Bajo la dirección técnica del legendario ingeniero Adrian Newey, el equipo alcanzó su primera gran 
              etapa de gloria junto a Sebastian Vettel, conquistando cuatro campeonatos del mundo consecutivos entre 
              2010 y 2013. Tras algunos años de transición, Red Bull volvió a dominar la categoría con Max Verstappen, 
              quien desde 2021 ha liderado una nueva era de triunfos y récords para el equipo.

            </p>

            <p>
              Más allá de los resultados, Red Bull Racing se ha consolidado como una fábrica de talento. Su programa de jóvenes 
              pilotos ha impulsado las carreras de figuras como Daniel Ricciardo, Carlos Sainz Jr. y Pierre Gasly, demostrando su 
              compromiso con el futuro del deporte.Hoy en día, Red Bull continúa siendo sinónimo de rendimiento, creatividad y excelencia 
              técnica, manteniéndose como una de las escuderías más dominantes e inspiradoras del mundo de la Fórmula 1.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}

     
