import { useEffect, useState } from "react";
import {
  FaFlagCheckered,
  FaUser,
  FaCar,
  FaTools,
  FaRoad,
  FaExclamationTriangle,
  FaChartBar,
} from "react-icons/fa";

export default function Principal() {
  const [hora, setHora] = useState("");

  useEffect(() => {
    const t = setInterval(() => {
      setHora(new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }));
    }, 1000);
    return () => clearInterval(t);
  }, []);

  const c = styles;

  return (
    <div style={c.layout}>
      {/* Sidebar */}
      <aside style={c.sidebar}>
  
        <div style={c.brandRow}>
          <img src="/logo.jpeg" alt="Mi Logo" style={c.brandImg}/> 
        </div>

        <nav>
          <NavItem icon={<FaFlagCheckered />} label="Carreras" active />
          <NavItem icon={<FaUser />} label="Pilotos" />
          <NavItem icon={<FaCar />} label="Autos" />
          <NavItem icon={<FaTools />} label="Técnicos y Pits" />
          <NavItem icon={<FaRoad />} label="Circuitos" />
          <NavItem icon={<FaExclamationTriangle />} label="Penalizaciones" />
          <NavItem icon={<FaChartBar />} label="Análisis y Reportes" />
        </nav>
      </aside>

      {/* Main */}
      <main style={c.main}>
        <header style={c.topbar}>
          <h1 style={{ ...c.topbarTitle, textAlign: 'center' }}>DATA SYSTEM</h1>

          <div style={c.topbarRight}>
            <span style={c.clock}>{hora}</span>
            <span>
              Jefe de Equipo: <strong>Christian Horner</strong>
            </span>
          </div>
        </header>

        <section>
          {/* Eliminamos el logo que estaba aquí */}
          <div style={c.grid}>
            <div style={{ ...c.card, ...c.cardBig }}>
              <h3 style={c.cardTitle}>Carreras</h3>
              <p>24/05/2024</p>
              <p>14:00 — 15:30</p>
              <p>Circuito X</p>
              <p>Jefe de Equipo</p>
              <button style={c.btnPrimary}>Ver detalles</button>
            </div>

            <Tile icon={<FaUser />} title="Pilotos" />
            <Tile icon={<FaCar />} title="Autos" />
            <Tile icon={<FaTools />} title="Técnicos y Pits" />
            <Tile icon={<FaRoad />} title="Circuitos" />
            <Tile icon={<FaExclamationTriangle color="#FFD700" />} title="Penalizaciones" />
          </div>
        </section>
      </main>
    </div>
  );
}

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

function Tile({ icon, title }) {
  return (
    <div style={styles.cardTile}>
      <div style={styles.tileIco}>{icon}</div>
      <div style={styles.tileTitle}>{title}</div>
    </div>
  );
}

const styles = {
  navy: "#0b1626",
  navy2: "#0e1a33",
  panel: "#101b34",
  line: "rgba(255,255,255,.10)",
  textMuted: "#a9b3c3",
  red: "#DA291C",

  layout: {
    display: "grid",
    gridTemplateColumns: "260px 1fr",
    minHeight: "100vh",
    background: "linear-gradient(180deg,#0b1626 0%, #0b1a2b 100%)",
    color: "#fff",
    fontFamily: "Inter, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif",
  },
  sidebar: {
    background: "#0e1a33",
    borderRight: "1px solid rgba(255,255,255,.08)",
    padding: "22px 16px",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start", // Todo alineado a la izquierda
  },
  brandRow: {
    marginBottom: "28px",
    width: "100%",
    display: "flex",
    justifyContent: "flex-start", // Logo alineado a la izquierda
    alignItems: "center",
  },
  brandImg: {
    height: 60,
    display: "block",
  },
  main: { padding: "28px 42px" },
  topbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottom: "1px solid rgba(255,255,255,.10)",
    paddingBottom: 14,
    marginBottom: 26,
  },
  topbarTitle: { margin: 0, fontSize: 18, letterSpacing: ".5px", color: "#dfe7f5", fontWeight: 700 },
  topbarRight: { display: "flex", gap: 18, alignItems: "center", color: "#a9b3c3", fontSize: 14 },
  clock: { fontVariantNumeric: "tabular-nums" },
  pageTitle: { margin: "8px 0 18px 0", fontSize: 36, fontWeight: 800 },
  grid: { display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 22 },
  card: {
    background: "#101b34",
    border: "1px solid rgba(255,255,255,.10)",
    borderRadius: 16,
    padding: 22,
  },
  cardBig: { gridColumn: "1 / 2" },
  cardTitle: { margin: "0 0 8px 0", fontWeight: 700 },
  cardTile: {
    background: "#101b34",
    border: "1px solid rgba(255,255,255,.10)",
    borderRadius: 16,
    padding: 22,
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  tileIco: { fontSize: 42, marginBottom: 12, color: "#e7edf8" },
  tileTitle: { fontSize: 18, fontWeight: 600 },
  btnPrimary: {
    background: "#DA291C",
    color: "#fff",
    border: "none",
    borderRadius: 12,
    padding: "12px 18px",
    fontWeight: 700,
    cursor: "pointer",
    transition: "transform .08s ease, background .15s ease",
  },
};