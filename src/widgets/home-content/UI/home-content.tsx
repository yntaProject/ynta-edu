import { Link } from "react-router-dom";
import cl from "./home.module.scss";
import { Button } from "../../../shared/UI/button/button";
import { Input } from "../../../shared/UI/input/input";
import { useState } from "react";
import { useSpring, animated } from "@react-spring/web";

const HomeContent = () => {
  const [feedback, setFeedback] = useState("");
  const animationY = useSpring({
    opacity: 1,
    transform: "translateY(0%)",
    from: { opacity: 0, transform: "translateY(100%)" },
  });
  const animationXleft = useSpring({
    opacity: 1,
    transform: "translateX(0%)",
    from: { opacity: 0, transform: "translateX(-100%)" },
  });
  const animationXright = useSpring({
    opacity: 1,
    transform: "translateX(0%)",
    from: { opacity: 0, transform: "translateX(100%)" },
  });

  return (
    <div>
      <animated.div style={animationY} className={cl.homeIntro}>
        <div className={cl.homeIntroText}>
          <h1>Книги – это окно в другие миры и эпохи.</h1>
          <p>Книги – не просто источник знаний. Они – друзья, наставники, источники вдохновения, помогающие расширять
            горизонты и понимать этот многогранный мир.</p>
          <Link to={"/books"}>
            <Button variant={"outlined"} extraClassName={cl.homeIntroTextLink}>К книгам!</Button>
          </Link>
        </div>
        <img src="./assets/images/landing/books-group.png" alt="books group"/>
      </animated.div>

      <animated.div style={animationXleft} className={cl.preBenefits}>
        <h2>
          Мир книг под рукой: погрузись, обменяйся, поделись!
        </h2>
        <p>В литературе скрыты удивительные миры, от фантастических галактик до тайн человеческой души. Наш сайт
          приглашает вас в это путешествие. Поделитесь впечатлениями, обменяйтесь опытом и откройте новые горизонты
          чтения. Обогащайтесь, общайтесь и погружайтесь в увлекательный процесс вместе с нами. Мир книг ждет вас!</p>
      </animated.div>
      <animated.div style={animationXright} className={cl.benefits}>
        <div className={cl.benefitsItem}>
          <img src="./assets/images/landing/benefit1.png" alt="benefit1"/>
          <div className={cl.benefitsItemText}>
            <h4>Развитие критического мышления</h4>
            <p>Чтение книг углубляет аналитические навыки, учит воспринимать информацию осмысленно и делать обоснованные
              выводы.</p>
          </div>
        </div>

        <div className={cl.benefitsItem}>
          <img src="./assets/images/landing/benefit2.png" alt="benefit2"/>
          <div className={cl.benefitsItemText}>
            <h4>Улучшение коммуникативных способностей</h4>
            <p>Благодаря литературе расширяется словарный запас, улучшается грамотность и способность ясно выражать свои
              мысли.</p>
          </div>
        </div>

        <div className={cl.benefitsItem}>
          <img src="./assets/images/landing/benefit3.png" alt="benefit3"/>
          <div className={cl.benefitsItemText}>
            <h4>Развитие эмпатии</h4>
            <p>Через книги мы переживаем истории других людей, что помогает лучше понимать и чувствовать чужие эмоции и
              переживания.</p>
          </div>
        </div>
      </animated.div>

      <animated.div style={animationXleft} className={cl.joinUs}>
        <div className={cl.joinUsText}>
          <h2>Присоединяйтесь к нашему сообществу читателей!</h2>
          <p>Откройте для себя мир увлекательных книг, общайтесь с единомышленниками и делитесь своими впечатлениями.
            Зарегистрируйтесь сейчас, чтобы начать новое захватывающее путешествие в мире литературы! 📚🌍</p>
          <Link to={"/auth"}><Button variant={"primary"}>Зарегестрироваться</Button></Link>
        </div>
        <img src="./assets/images/landing/girl-with-books.png" alt="girl with books"/>
      </animated.div>

      <div className={cl.statistic}>
        <div className={cl.statisticLeft}>
          <h1>Огромный выбор книг ждет своего читателя!</h1>
          <p>Углубитесь в мир литературы и откройте для себя новые горизонты, участвуя в активном обсуждении книг на
            нашем ресурсе.</p>
          <div className={cl.statisticLeftCols}>
            <div className={cl.statisticLeftColsItem}>
              <h5>42+</h5>
              <p>Книг на сайте</p>
            </div>
            <div className={cl.statisticLeftColsItem}>
              <h5>23</h5>
              <p>Активных читателей</p>
            </div>
            <div className={cl.statisticLeftColsItem}>
              <h5>426</h5>
              <p>Обсуждений о книгах</p>
            </div>
            <div className={cl.statisticLeftColsItem}>
              <h5>320</h5>
              <p>Рекомендаций</p>
            </div>
          </div>
          <Link to={"/books"}>
            <Button variant={"outlined"} extraClassName={cl.statisticLeftColsButton}>Погрузитесь в чтение!</Button>
          </Link>
        </div>
        <img src="./assets/images/landing/books-group2.png" alt="books group2"/>
      </div>

      <div className={cl.feedback}>
        <img src="./assets/images/landing/typing.jpg" alt="typing"/>
        <div className={cl.feedbackRight}>
          <div className={cl.feedbackRightText}>
            <h2>Обратная связь</h2>
            <p>Если вы столкнулись с проблемой или хотите предложить улучшение, дайте нам знать! Мы ценим ваше мнение и
              стремимся сделать наш сайт лучше.</p>
          </div>

          <div className={cl.feedbackRightButton}>
            <Input
              placeholder={"Опишите вашу проблему или предложение"}
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}/>
            <Button variant={"primary"} onClick={() => setFeedback("")}>Отправить</Button>
          </div>
        </div>
      </div>

    </div>
  );
};

export { HomeContent };