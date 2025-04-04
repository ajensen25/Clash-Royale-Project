import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header>
      <div className="header-left">
        <Link to="/" className="navbar-link">
          Clash<b>Info</b>
        </Link>
      </div>
      <div className="header-right">
        <Link to="/search" className="navbar-link hover-animation">
          Search
        </Link>
        <button>
          <i className="uil uil-setting"></i>
        </button>
      </div>
    </header>
  );
}

export default Navbar;
