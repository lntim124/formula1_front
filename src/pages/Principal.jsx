import { useEffect, useState } from "react";
import CrearEmpleado from "../Components/Crear/Empleado";
import ListarEmpleado from "../Components/Listar/Empleado";
import ListarAuto from "../Components/Listar/Auto.jsx";
import ListarCarrera from "../Components/Listar/Carrera.jsx";
import ListarPenalizacion from "../Components/Listar/Penalizacion.jsx";



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
function NavItem({ icon, label, active, onClick }) {
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
    <div style={base} onClick={onClick}>
      <span style={ico}>{icon}</span>
      <span>{label}</span>
    </div>
  );
}

/* ---------- Estilos ---------- */
const styles = {
  layout: {
    display: "grid",
    gridTemplateColumns: "260px 1fr",
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
    flexWrap: "wrap",
    display: "flex",
    gap: "40px",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: "20px",
  },
  homeImg: {
    width: "420px",
    height: "340px",
    borderRadius: "12px",
    border: "1px solid rgba(255,255,255,.15)",
    objectFit: "cover",
    boxShadow: "0 0 25px rgba(0,0,0,0.4)",
  },
  homeTitle: {
    fontFamily: "'Orbitron', sans-serif",
    fontSize: "15px",
    fontWeight: 900,
    color: "#ffffff",
    textAlign: "center",
    textTransform: "uppercase",
    letterSpacing: "2px",
    marginBottom: "20px",
    width: "100%",
    display: "block",
  },
  homeText: {
    flex: 1,
    fontSize: "18px",
    lineHeight: "1.8",
    color: "#dce2ee",
    textAlign: "justify",
    fontFamily: "'Poppins', sans-serif",
  },
};

/* ---------- COMPONENTE PRINCIPAL ---------- */
export default function Principal() {
  const [hora, setHora] = useState("");
  const [active, setActive] = useState("Inicio");

  useEffect(() => {
    const t = setInterval(() => {
      setHora(
        new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
      );
    }, 1000);
    return () => clearInterval(t);
  }, []);

  const c = styles;

  // Función para cambiar vistas (desde los componentes hijos)
  const [vista, setVista] = useState("listar-empleado");

  const handleChangeView = (nuevaVista) => {
    setVista(nuevaVista);
  };

  /* ---------- Contenido dinámico ---------- */
  const renderContent = () => {
    switch (active) {
      // === EMPLEADOS ===
      case "Empleados":
        return (
          <div style={{ padding: "20px" }}>
      {vista === "listar-empleado" && (
        <ListarEmpleado irACrear={() => handleChangeView("crear-empleado")} />
      )}

      {vista === "crear-empleado" && (
        <CrearEmpleado onChangeView={handleChangeView} />
      )}
    </div>
        );

      case "CrearEmpleado":
        return <CrearEmpleado volver={() => handleChangeView("Empleados")} />;

      // === AUTOS ===
      case "Autos":
        return(
          <ListarAuto></ListarAuto>
        )

      case "Carreras":
        return <ListarCarrera></ListarCarrera>
        
      case "Penalizaciones":
        return <ListarPenalizacion></ListarPenalizacion>

      case "Análisis y Reportes":
        return 

      default:
        return (
          <div style={c.homeContainer}>
            <img src="/f1.jpeg" alt="Imagen de inicio" style={c.homeImg} />
            <div style={c.homeTitle}>
              <h2>CONOCE LA HISTORIA DE TU EQUIPO</h2>
              <p style={c.homeText}>
                Red Bull Racing es una de las escuderías más exitosas y admiradas
                de la Fórmula 1 moderna. Fundada en 2005, tras la compra del
                antiguo equipo Jaguar Racing por parte de Red Bull GmbH, la
                escudería estableció su sede en Milton Keynes, Reino Unido...
              </p>
            </div>
          </div>
        );
    }
  };

  return (
    <div style={c.layout}>
      {/* Sidebar */}
      <aside style={c.sidebar}>
        <div style={c.brandRow}>
          <img src="/logo.jpeg" alt="Mi Logo" style={c.brandImg} />
        </div>

        <nav>
          {/* Aquí puedes ir agregando más secciones */}
          
          <NavItem
            icon={<FaHome />}
            label="Empleados"
            active={active === "Empleados" || active === "CrearEmpleado"}
            onClick={() => setActive("Empleados")}
          />
          
          <NavItem
            icon={<FaFlagCheckered />}
            label="Carreras"
            active={active === "Carreras"}
            onClick={() => setActive("Carreras")}
          />
          
          <NavItem
            icon={<FaCar />}
            label="Autos"
            active={active === "Autos"}
            onClick={() => setActive("Autos")}
          />
          <NavItem
            icon={<FaExclamationTriangle />}
            label="Penalizaciones"
            active={active === "Penalizaciones"}
            onClick={() => setActive("Penalizaciones")}
          />
          <NavItem
            icon={<FaChartBar />}
            label="Análisis y Reportes"
            active={active === "Análisis y Reportes"}
            onClick={() => setActive("Análisis y Reportes")}
          />
        </nav>
      </aside>

      {/* Panel derecho */}
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

        {/* Contenido dinámico */}
        {renderContent()}
      </main>
    </div>
  );
}
