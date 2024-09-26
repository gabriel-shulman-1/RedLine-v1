import logo from "../assets/REDLINE PNG TRANSP 05.png";
import "../styles/navBarB.css";
import instaLogo from "../assets/Instagram.png";
import { NavLink } from "react-router-dom";
import { WhatsAppLink } from "./wps";
import useResponsive from "./useResponsive";
import imgMenu from "../assets/REDLINE PNG BN 05.png"
import menuIcon from "../assets/iconos/menu.svg"
export const NavBar = () => {
  const { isMobile } = useResponsive();
  return (
    <>
      {isMobile ? (
        <nav className="nav-bar">
          <img className="imgMenu n1"  src={imgMenu} alt={imgMenu} width="250px"/>
          <img className="imgMenu n2" src={menuIcon} alt={menuIcon} width="250px"/>
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
      ) : (
        ""
      )}
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

        {!isMobile ? (
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
        ) : (
          ""
        )}
      </header>
    </>
  );
};
