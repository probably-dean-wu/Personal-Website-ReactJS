import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import "../styles/Navbar.css";
import ReorderIcon from '@mui/icons-material/Reorder';
import BookIcon from '@mui/icons-material/Book';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import DescriptionIcon from '@mui/icons-material/Description';
import CodeIcon from '@mui/icons-material/Code';
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';

function Navbar() {

  // 2 vars that are false
  const [expandNavbar, setExpandNavbar] = useState(false);

  //location makes it so it can see which page its on
  const location = useLocation();

  // useEffect makes it so Navbar closes everytime the location changes
  useEffect(() => {
    setExpandNavbar(false)
  }, [location])
  // prev is the previous state it was in so if it was True then it becomes False and vice versa
  return (
    <div className="navbar" id = {expandNavbar ? "open": "close"}> 
        <div className='toggleButton'> 
          <button onClick={() => {setExpandNavbar((prev) => !prev)}}> 
            <ReorderIcon /> 
          </button>
        </div>
        <div className='links sideBarFont'>
            <Link to="/" className={location.pathname === "/" ? "activeBox" : "box"}> <HomeIcon/>Home </Link>
            <Link to="/about" className={location.pathname === "/about" ? "activeBox" : "box"}> <SearchIcon/>About </Link>            
            <Link to="/projects" className={location.pathname === "/projects" ? "activeBox" : "box"}> <CodeIcon/>Projects </Link>
            <Link to="/experience" className={location.pathname === "/experience" ? "activeBox" : "box"}> <DescriptionIcon/>Experience </Link>
            <Link to="/awards" className={location.pathname === "/awards" ? "activeBox" : "box"}> <EmojiEventsIcon/>Awards </Link>
            <Link to="/blog" className={location.pathname === "/blog" ? "activeBox" : "box"}> <BookIcon />Blog</Link>
        </div>
    </div>
  )
}

export default Navbar
