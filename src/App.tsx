import "./App.css";
import { Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import {
  MyResponsivePie,
  MyResponsiveBar,
  CustomBar,
  LangBar,
} from "./components/Graphs";
import { data, datum, babes, lang } from "./data";

export default function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="pie" element={<Pie />} />
        <Route path="bar" element={<Bar />} />
        <Route path="babes" element={<BabesBar />} />
        <Route path="lang" element={<NewLangBar />} />
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

function BabesBar() {
  return (
    <div className="charts">
      <div className="container">
        <CustomBar data={babes} keys={["lez", "bj only", "movies"]} />
      </div>
    </div>
  );
}

function NewLangBar() {
  const levels: Array<string> = ["No", "A1", "A2", "B1", "B2", "C1", "C2"];
  const lalala = lang.map((o) => ({ ...o, level: levels[o.level] }));
  return (
    <div className="charts">
      <div className="container">
        <LangBar data={lalala} keys={["count"]} index="level" />
      </div>
    </div>
  );
}
