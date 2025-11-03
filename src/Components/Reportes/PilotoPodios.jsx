import { useEffect, useState } from "react";
import "./General1.css";
import PilotoReportService from "../../Service/PilotoReportService";

 function PilotoPodios(){
  const [rows, setRows] = useState([]);

  useEffect(()=>{
    PilotoReportService.getPodiosPiloto()
      .then(r => setRows(r.data || []))
      .catch(()=> alert("Error cargando Podios de Pilotos"));
  },[]);

  return (
    <div className="report-container">
      <h2>Podios por Piloto (Top 3)</h2>
      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th>ID Piloto</th><th>Piloto</th>
              <th>1ros Puestos</th><th>2dos Puestos</th><th>3ros Puestos</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((x,i)=>(
              <tr key={i}>
                <td>{x.idPiloto ?? x.id_piloto}</td>
                <td>{x.piloto}</td>
                <td>{x.primerosPuestos ?? x.primeros_puestos}</td>
                <td>{x.segundosPuestos ?? x.segundos_puestos}</td>
                <td>{x.tercerosPuestos ?? x.terceros_puestos}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default PilotoPodios;