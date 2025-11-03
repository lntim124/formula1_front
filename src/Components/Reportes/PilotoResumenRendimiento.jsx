import { useEffect, useState } from "react";
import "./General1.css";
import PilotoReportService from "../../Service/PilotoReportService";

 function PilotoResumenRendimiento(){
  const [rows, setRows] = useState([]);

  useEffect(()=>{
    PilotoReportService.getResumenRendimiento()
      .then(r => setRows(r.data || []))
      .catch(()=> alert("Error cargando Resumen de Rendimiento"));
  },[]);

  return (
    <div className="report-container">
      <h2>Resumen de Rendimiento del Piloto</h2>
      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th>ID Piloto</th><th>Piloto</th>
              <th>Carreras Disputadas</th><th>Promedio Posición</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((x,i)=>(
              <tr key={i}>
                <td>{x.idPiloto ?? x.id_piloto}</td>
                <td>{x.piloto}</td>
                <td>{x.carrerasDisputadas ?? x.carreras_disputadas}</td>
                <td>{x.promedioPosicion ?? x.promedio_posicion}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default PilotoResumenRendimiento;