import GraficoPreco from "./components/GraficoPreco";
import GraficoInflacao from "./components/GraficoInflacao";
import GraficoTicket from "./components/GraficoTicket";

function App() {
  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Dashboard Produtos Madeireiros - SFB</h1>

      <GraficoPreco />
      <GraficoInflacao />
      <GraficoTicket />
    </div>
  );
}

export default App;
