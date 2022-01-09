import "./App.css";
import { MyResponsivePie, MyResponsiveBar } from "./components/Graphs";
import { data, datum } from "./data";

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Using Nivo Charts</h1>
      </header>
      <div className="charts">
        <div className="container">
          <MyResponsivePie data={data} />
        </div>
        <div className="container">
          <MyResponsiveBar data={datum} />
        </div>
      </div>
    </div>
  );
}
