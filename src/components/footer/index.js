import "./style.css";
import insta from "./img/instagram.png";
import telegram from "./img/telegram.png";
import whatsapp from "./img/whatsapp.png";
import logo from "./img/logo.png"

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-logo">
        <img src={logo} className="logo"/>
      </div>
      <div className="footer-networks">
        <img className="footer-img" src={whatsapp} />
        <img className="footer-img" src={insta} />
        <img className="footer-img" src={telegram} />
      </div>
      <div className="footer-info">
        <h3>Контакты</h3>
        <p className="footer-text">Свяжитесь с нами для получения дополнительной информации и консультаций.</p>
        <p className="footer-text">ntservicesast@gmail.com </p>
        <p className="footer-text">8 (771) 377 95 95 </p>
        <p className="footer-text">8 (702) 960 20 10</p>
      </div>
      
    </div>
  );
}
