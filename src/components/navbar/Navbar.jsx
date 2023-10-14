import React from "react";
import "./Navbar.scss";
import logo from "../../assets/logo.avif";
import { Link } from "react-scroll";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
function Navbar() {
  const [menu, setMenu] = useState(false);
  return (
    <nav className="navbar">
      <img src={logo} alt="Logo" className="logo" />
      <div className="desktopMenu">
        <Link
          activeClass="active"
          to="intro"
          smooth={true}
          offset={-100}
          duration={500}
          className="desktopMenuList"
        >
          Home
        </Link>
        <Link
          activeClass="active"
          to="about"
          smooth={true}
          offset={-73}
          duration={500}
          className="desktopMenuList"
        >
          About
        </Link>
        <Link
          activeClass="active"
          to="contact"
          smooth={true}
          offset={-60}
          duration={500}
          className="desktopMenuList"
        >
          Contact
        </Link>
      </div>
      <button
        className="mobmenu"
        onClick={() => {
          setMenu(!menu);
        }}
      ><MenuIcon className="icon"/></button>
      <div className="mobNavMenu" style={{ display: menu ? "flex" : "none" }}>
      <Link
          activeClass="active"
          to="intro"
          smooth={true}
          offset={-100}
          duration={500}
          className="desktopMenuList"
        >
          Home
        </Link>
        <Link
          activeClass="active"
          to="about"
          smooth={true}
          offset={-73}
          duration={500}
          className="desktopMenuList"
        >
          About
        </Link>
        <Link
          activeClass="active"
          to="contact"
          smooth={true}
          offset={-60}
          duration={500}
          className="desktopMenuList"
        >
          Contact
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
