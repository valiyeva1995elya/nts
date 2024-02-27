import "./style.css";
import Header from "../header";
import Footer from "../footer";

export default function Contact (){
    return(
        <>
        <Header/>
        <div className="contact">
            <h4>Notarized Translation Services</h4>
            <p className="contact-text">Почта:</p>
            <p className="contact-text"><b>ntservicesast@gmail.com</b></p>
            <p className="contact-text">Инстаграм:</p>
            <p className="contact-text"><b>@nts-astana</b></p>
            <p className="contact-text">Телеграм</p>
            <p className="contact-text"><b>nts-astana</b></p>
            <p className="contact-text">Телефон:</p>
            <p className="contact-text"><b>8 (771) 377 95 95</b></p>
            <p className="contact-text"><b>8 (702) 960 20 10</b></p>
        </div>
        <Footer/>
        </>
    )
}