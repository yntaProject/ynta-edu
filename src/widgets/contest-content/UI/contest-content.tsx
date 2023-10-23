import cl from "./contest.module.scss";
const ContestContent = () => {
  return (
    <div className={cl.contest}>
      <div className={cl.contestItem}>
        <img src="./assets/images/landing/abai.jpg" alt="abai" className={cl.contestItemImage}/>
        <div className={cl.contestText}>
          <h1>Пазл "Абай"</h1>
          <p>Любой ученик, который выучит наизусть слова назидания Абая, владеет кусочком этой головоломки.
            Класс, который соберёт больше всех пазлов <strong>до конца Hоября</strong>, выиграет не только саму головоломку, но и сборник слов назидания Абая.</p>
        </div>
      </div>
      <div className={cl.contestItem}>
        <img src="./assets/images/landing/harry-potter.jpg" alt="harry potter" className={cl.contestItemImage}/>
        <div className={cl.contestText}>
          <h1>Пазл "Гарри Поттер"</h1>
          <p>Класс, который прочитает произведения Джоан Роулинг на русском языке, обсудит их вместе и создаст
            буктрейлер <strong>до конца Декабря</strong>, станет победителем.</p>
        </div>
      </div>
    </div>
  );
};

export { ContestContent };