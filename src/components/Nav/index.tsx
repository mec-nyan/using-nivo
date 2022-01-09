import { NavLink } from "react-router-dom";

export default function Nav() {
  return (
    <>
      <header className="App-header">
        <h1>Using Nivo Charts</h1>
      </header>
      <div className="bottomNav">
        <NavLink className="navlink" to="/">
          <div className="option">Home</div>
        </NavLink>
        <NavLink className="navlink" to="/pie">
          <div className="option">Pie</div>
        </NavLink>
        <NavLink className="navlink" to="/bar">
          <div className="option">Bar</div>
        </NavLink>
        <NavLink className="navlink" to="/more">
          <div className="option">More</div>
        </NavLink>
      </div>
    </>
  );
}
