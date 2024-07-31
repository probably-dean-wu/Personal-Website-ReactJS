import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/Navbar.css";
import ReorderIcon from '@mui/icons-material/Reorder';

function Navbar() {
  const [expandNavbar, setExpandNavbar] = useState(false);

  const location = useLocation();

  useEffect(() => {
    setExpandNavbar(false);
  }, [location]);

  return (
    <div className="navbar" id={expandNavbar ? "open" : "close"}>
      <div className="toggleButton">
        <button
          onClick={() => {
            setExpandNavbar((prev) => !prev);
          }}
        >
          <ReorderIcon />
        </button>
      </div>
      <div className="links" >
        <Link to="/" className={location.pathname === "/" ? "navBoxActive" : "navBox"}> Home </Link>
        <Link to="/about" className={location.pathname === "/about" ? "navBoxActive" : "navBox"}> About </Link>
        <Link to="/projects" className={location.pathname === "/projects" ? "navBoxActive" : "navBox"}> Projects </Link>
        <Link to="/experience" className={location.pathname === "/experience" ? "navBoxActive" : "navBox"}> Experience </Link>
        <Link to="/awards" className={location.pathname === "/awards" ? "navBoxActive" : "navBox"}> Awards </Link>
      </div>
    </div>
  );
}

export default Navbar;