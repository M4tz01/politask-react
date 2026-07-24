import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

function EstadisticasPanel({ tareas, tareasAceptadas, puntos }) {
  const pendientes = tareas.filter((t) => t.estado === "Pendiente").length;
  const enProgreso = tareas.filter((t) => t.estado === "En progreso").length;
  const completadas = tareas.filter((t) => t.estado === "Completada").length;

  const completadasComoAceptador = tareasAceptadas.filter(
    (t) => t.estado === "Completada"
  ).length;

  const data = {
    labels: ["Pendiente", "En progreso", "Completada"],
    datasets: [
      {
        data: [pendientes, enProgreso, completadas],
        backgroundColor: ["#fbbf24", "#38bdf8", "#4ade80"],
        borderWidth: 0,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        position: "bottom",
        labels: { boxWidth: 12, font: { size: 12 } },
      },
    },
    cutout: "65%",
  };

  return (
    <section className="dashboard__panel dashboard__stats-panel">
      <div className="dashboard__section-heading">
        <span>Resumen</span>
        <h2>Mis estadísticas</h2>
        <p>Un vistazo a tu actividad en PoliTask.</p>
      </div>

      <div className="stats-grid">
        <div className="stats-numbers">
          <div className="stats-card">
            <strong>{puntos}</strong>
            <span>Puntos actuales</span>
          </div>
          <div className="stats-card">
            <strong>{tareas.length}</strong>
            <span>Tareas publicadas</span>
          </div>
          <div className="stats-card">
            <strong>{completadasComoAceptador}</strong>
            <span>Completadas para otros</span>
          </div>
        </div>

        <div className="stats-chart">
          {tareas.length === 0 ? (
            <p className="dashboard__empty">
              Publica tu primera tarea para ver el gráfico.
            </p>
          ) : (
            <Doughnut data={data} options={options} />
          )}
        </div>
      </div>
    </section>
  );
}

export default EstadisticasPanel;