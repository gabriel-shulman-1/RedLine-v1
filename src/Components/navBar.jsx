import logo from "../assets/REDLINE PNG TRANSP 05.png";
import "../styles/navBarB.css";
import instaLogo from "../assets/Instagram.png";
import { NavLink } from "react-router-dom";
import { WhatsAppLink } from "./wps";
import useResponsive from './useResponsive';
export const NavBar = () => {
  const { isMobile, isTablet, isDesktop } = useResponsive();
  console.log(isDesktop)
  console.log(isTablet)
  console.log(isMobile)
  return (
    <header>
      <div className="top-bar">
        <div className="logo">
          <NavLink to={"/"}>
            <img src={logo} alt="Logo" width="250px" />
          </NavLink>
        </div>

        <div className="social-icons">
          <WhatsAppLink
            phoneNumber="+5401155238433"
            message="hola, me interesa sus servicios"
          />
          <a
            href="https://www.instagram.com/redlinenetsrl?igsh=bnR0bDhyNWp0MzB0"
            target="_blank"
            rel="noreferrer"
          >
            <img src={instaLogo} alt="Instagram" width="30" />
          </a>
        </div>
      </div>

      <nav className="nav-bar">
        <NavLink to={"/"} className={"link"}>
          <button className="nav-btn">
            <p className="rubik-p5">Nuestros planes</p>
          </button>
        </NavLink>
        <NavLink to={"/services"} className={"link"}>
          <button className="nav-btn">
            <p className="rubik-p5">Nuestros servicios</p>
          </button>
        </NavLink>
        <NavLink to={"/prices"} className={"link"}>
          <button className="nav-btn">
            <p className="rubik-p5">Cotizaciones</p>
          </button>
        </NavLink>
        <NavLink to={"/contact"} className={"link"}>
          <button className="nav-btn">
            <p className="rubik-p5">Contacto</p>
          </button>
        </NavLink>
      </nav>
    </header>
  );
};
