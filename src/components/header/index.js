import "./style.css";
import logo from "./logo.png";
import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const location = useLocation();

  return (
    // <div className="header">
    //   <img src={logo} className="logo" />

    <div>
      {location.pathname === "/price" ? (
        <div className="header">
          <img src={logo} className="logo" />
          <div className="header-nav">
            <Link to="/">
              <a>Главная</a>
            </Link>
            <Link to="/price">
              <u><a>Прайс</a></u>
            </Link>
            <Link to="/contact">
              <a>Контакты</a>
            </Link>
          </div>
        </div>
      ) : location.pathname === "/contact" ? (
        <div className="header">
          <img src={logo} className="logo" />
          <div className="header-nav">
            <Link to="/">
              <a>Главная</a>
            </Link>
            <Link to="/price">
              <a>Прайс</a>
            </Link>
            <Link to="/contact">
            <u><a>Контакты</a></u>
            </Link>
          </div>
        </div>
      ) : (
        <div className="header">
          <img src={logo} className="logo" />
          <div className="header-nav">
            <Link to="/">
            <u><a>Главная</a></u>
            </Link>
            <Link to="/price">
              <a>Прайс</a>
            </Link>
            <Link to="/contact">
              <a>Контакты</a>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
