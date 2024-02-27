import Header from "../header";
import Footer from "../footer";
import { useLocation } from "react-router-dom";
import photo from "./photo1.jpg";
import "./style.css"

export default function Main() {
  const location = useLocation();
  return (
    <div>
      <Header />
      <div className="home">
      
        <div>
          <img className="home-img" src={photo} />

          <h2>
            Notarized Translation Services - Ваш Надежный Партнер в
            Переводческих Услугах
          </h2>
          <p className="home-text-info">
            Добро пожаловать в наше бюро переводов, специализирующееся на
            нотариальных переводах. Мы предоставляем высококачественные
            переводческие услуги с особым уклоном в нотариальные переводы,
            гарантируя точность и законность каждого документа.
          </p>
          <p className="home-text-info mr">
            Если вам требуются нотариальные переводы высокого качества с
            индивидуальным подходом, обратитесь в наше бюро переводов. Мы
            гарантируем надежность, точность и своевременность в каждом проекте.
          </p>
        </div>
        <p className="home-text-info2">Наши ключевые особенности:</p>
        <div className="home-text-info3">
          <div className="home-text-block">
            <p className="home-text-exp">
              <u>Опыт и Экспертиза: </u>
              <br /> Наша команда включает в себя профессиональных переводчиков
              с обширным опытом в нотариальных переводах. Мы знаем специфику
              требований, предъявляемых к данному типу перевода, и гарантируем
              соответствие всем нормам.
            </p>
          </div>
          <div className="home-text-block">
            <p className="home-text-exp">
              <u>Легальная Аккредитация:</u> <br /> Мы являемся аккредитованным
              бюро, соответствующим всем требованиям нормативов, касающихся
              нотариальных переводов. Наши переводы признаются юридическими
              органами.
            </p>
          </div>
        </div>
        <div className="home-text-info3">
          <div className="home-text-block">
            <p className="home-text-exp">
              <u>Конфиденциальность: </u>
              <br /> Мы ценим конфиденциальность ваших документов. Вся
              передаваемая информация обрабатывается с максимальным вниманием к
              безопасности и соблюдению конфиденциальности.
            </p>
          </div>
          <div className="home-text-block">
            <p className="home-text-exp">
              <u>Сервис Высокого Уровня:</u> <br /> Мы стремимся предоставить
              нашим клиентам не только профессиональные переводы, но и отличный
              сервис. Наша команда всегда готова ответить на ваши вопросы и
              предоставить необходимую поддержку.
            </p>
          </div>
        </div>
      
    </div>
      <Footer />
    </div>
  );
}
