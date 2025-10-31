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
};

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
      </main>
    </div>
  );
}