import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

import { dadosPreco } from "../data/dados";

function GraficoPreco() {
  return (
    <div>
      <h2>Preço Médio Unitário</h2>

      <LineChart width={700} height={300} data={dadosPreco}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="ano" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="preco" />
      </LineChart>
    </div>
  );
}

export default GraficoPreco;

