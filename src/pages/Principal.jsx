export default function Principal() {
  return (
    <main style={{
      minHeight: "100vh",
      background: "linear-gradient(180deg, #0b1626 0%, #0b1a2b 100%)",
      color: "white",
      fontFamily: "Inter, sans-serif",
      padding: "40px"
    }}>
      <header style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: "40px"
      }}>
        <h2>RACE DATA – Data System</h2>
        <div>{new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}</div>
      </header>

      <section style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: "20px"
      }}>
        <div style={cardStyle}>
          <h3>Carreras</h3>
          <p>Consulta las carreras registradas.</p>
        </div>

        <div style={cardStyle}>
          <h3>Pilotos</h3>
          <p>Información de cada piloto.</p>
        </div>

        <div style={cardStyle}>
          <h3>Penalizaciones</h3>
          <p>Visualiza sanciones y efectos.</p>
        </div>
      </section>
    </main>
  );
}

const cardStyle = {
  background: "rgba(255, 255, 255, 0.05)",
  padding: "20px",
  borderRadius: "12px",
  border: "1px solid rgba(255, 255, 255, 0.1)",
};