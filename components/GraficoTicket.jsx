import {
  PieChart,
  Pie,
  Tooltip,
} from "recharts";

import { dadosTicket } from "../data/dados";

function GraficoTicket() {
  return (
    <div>
      <h2>Ticket Médio por Segmento</h2>

      <PieChart width={400} height={400}>
        <Pie
          data={dadosTicket}
          dataKey="valor"
          nameKey="segmento"
          outerRadius={120}
          label
        />
        <Tooltip />
      </PieChart>
    </div>
  );
}

export default GraficoTicket;
