import "./style.css";
import Header from "../header";
import Footer from "../footer";

export default function Price() {
  const date = [
    {
      number: 1,
      subj: "Паспорт",
      price: "от 2 500 тг",
    },
    {
      number: 2,
      subj: "Свидетельство о заключении брака",
      price: "от 2 500 тг",
    },
    {
      number: 3,
      subj: "Свидетельство о рождении",
      price: "от 2 500 тг",
    },
    {
      number: 4,
      subj: "Водительское удостоверение",
      price: "от 2 500 тг",
    },
    {
      number: 5,
      subj: "Аттестат",
      price: "от 2 500 тг",
    },
    {
      number: 6,
      subj: "Диплом",
      price: "от 2 500 тг",
    },
    {
      number: 7,
      subj: "Справка с учебы",
      price: "от 2 500 тг",
    },
    {
      number: 8,
      subj: "Справка с работы",
      price: "от 2 500 тг",
    },
    {
      number: 9,
      subj: "Доверенность",
      price: "от 2 500 тг",
    },
    {
      number: 10,
      subj: "Заявление",
      price: "от 2 500 тг",
    },
    {
      number: 11,
      subj: "Согласие",
      price: "от 2 500 тг",
    },
    {
      number: 12,
      subj: "Договор",
      price: "от 2 500 тг",
    },
    {
      number: 13,
      subj: "Сертификат",
      price: "от 2 500 тг",
    },
    {
      number: 14,
      subj: "Апостиль",
      price: "от 2 500 тг",
    },
  ];
  return (
    <>
      <Header />
      <div className="price">
        <table>
          <thead>
            <tr>
              <th>№</th>
              <th>Документ</th>
              <th>Цена</th>
            </tr>
          </thead>
          <tbody>
            {date.map((item, index) => (
              <tr key={index}>
                <td className="cn">{item.number}</td>
                <td>{item.subj}</td>
                <td className="cn">{item.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Footer />
    </>
  );
}
