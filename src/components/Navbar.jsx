import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/Navbar.css";
import ReorderIcon from '@mui/icons-material/Reorder';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import CodeIcon from '@mui/icons-material/Code';
import DescriptionIcon from '@mui/icons-material/Description';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import NoteIcon from '@mui/icons-material/Note';
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
        <Link to="/" className={location.pathname === "/" ? "navBoxActive" : "navBox"}> <HomeIcon /> Home </Link>
        <Link to="/about" className={location.pathname === "/about" ? "navBoxActive" : "navBox"}> <SearchIcon /> About </Link>
        <Link to="/projects" className={location.pathname === "/projects" ? "navBoxActive" : "navBox"}> <CodeIcon /> Projects </Link>
        <Link to="/experience" className={location.pathname === "/experience" ? "navBoxActive" : "navBox"}> <DescriptionIcon /> Experience </Link>
        <Link to="/awards" className={location.pathname === "/awards" ? "navBoxActive" : "navBox"}> <EmojiEventsIcon /> Awards </Link>
        <Link to="/notes" className={location.pathname === "/notes" ? "navBoxActive" : "navBox"}> <NoteIcon /> Notes </Link>
        <Link to="/resume" className={location.pathname === "/resume" ? "navBoxActive" : "navBox"}> <AttachFileIcon /> Resume </Link>
      </div>
    </div>
  );
}

export default Navbar;