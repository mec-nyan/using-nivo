import "./App.css";
import { Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import { MyResponsivePie, MyResponsiveBar } from "./components/Graphs";
import { data, datum } from "./data";

export default function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="pie" element={<Pie />} />
        <Route path="bar" element={<Bar />} />
        <Route path="more" element={<More />} />
      </Routes>
    </div>
  );
}

function Home() {
  return (
    <div className="temp">
      <h2>Fucking home, man!</h2>
    </div>
  );
}

function More() {
  return (
    <div className="temp">
      <h2>Want some more?</h2>
    </div>
  );
}

function Pie() {
  return (
    <div className="charts">
      <div className="container">
        <MyResponsivePie data={data} />
      </div>
    </div>
  );
}

function Bar() {
  return (
    <div className="charts">
      <div className="container">
        <MyResponsiveBar data={datum} />
      </div>
    </div>
  );
}
