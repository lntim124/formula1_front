import { useEffect, useState } from "react";
import "./General1.css";
import PilotoReportService from "../../Service/PilotoReportService";

 function PilotoResultado(){
  const [rows, setRows] = useState([]);

  useEffect(()=>{
    PilotoReportService.getResultadoPilotos()
      .then(r => setRows(r.data || []))
      .catch(()=> alert("Error cargando Resultado de Pilotos"));
  },[]);

  return (
    <div className="report-container">
      <h2>Resultados de Pilotos por Carrera</h2>
      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th>ID Piloto</th><th>Piloto</th>
              <th>ID Carrera</th><th>Carrera</th><th>Fecha</th>
              <th>Ranking Final</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((x,i)=>(
              <tr key={i}>
                <td>{x.idPiloto ?? x.id_piloto}</td>
                <td>{x.piloto}</td>
                <td>{x.idCarrera ?? x.id_carrera}</td>
                <td>{x.carrera}</td>
                <td>{x.fecha}</td>
                <td>{x.rankingFinal ?? x.ranking_final}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default PilotoResultado;