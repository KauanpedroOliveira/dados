import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

import { dadosInflacao } from "../data/dados";

function GraficoInflacao() {
  return (
    <div>
      <h2>Impacto da Inflação</h2>

      <BarChart width={700} height={300} data={dadosInflacao}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="ano" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="impacto" />
      </BarChart>
    </div>
  );
}

export default GraficoInflacao;
