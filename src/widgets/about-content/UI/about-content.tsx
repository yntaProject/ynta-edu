import cl from "./about.module.scss";
import { useSpring, animated } from "@react-spring/web";

const AboutContent = () => {
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
      <div className={cl.about}>
        <animated.h1 style={animationXleft}>О Нас</animated.h1>
        <animated.img
          style={animationXright} src="./assets/images/landing/about-us.jpg" alt="about us"
          className={cl.aboutBackground}/>
      </div>
      <animated.div style={animationY} className={cl.aboutContent}>
        <div className={cl.aboutContentItem}>
          <h3>Цель</h3>
          <p>Мы осознаем важность чтения в современном мире. Наша главная цель - создать платформу, где каждый читатель
            может не только найти книгу по душе, но и стать частью большого сообщества единомышленников. Мы стремимся
            создать пространство для обмена знаниями, опытом и впечатлениями, чтобы продвигать культуру чтения в среде
            широкого круга людей.</p>
        </div>
        <div className={cl.aboutContentItem}>
          <h3>О сайте</h3>
          <p>Наш сайт – это не просто библиотека. Это место, где книги оживают благодаря активному обсуждению и анализу.
            Созданный командой профессионалов и энтузиастов, наш ресурс сочетает в себе современные технологии и любовь
            к чтению. Здесь вы можете не только выбрать интересную книгу, но и узнать мнение о ней других читателей,
            обсудить сложные моменты и порекомендовать свои любимые произведения.</p>
        </div>
        <div className={cl.aboutContentItem}>
          <h3>Достижения</h3>
          <p>За короткое время наш ресурс завоевал доверие тысяч читателей. Мы регулярно расширяем нашу библиотеку,
            учитывая пожелания и предложения наших пользователей. Наши активные пользователи помогли создать уникальное
            и живое сообщество любителей книг.</p>
        </div>
        <div className={cl.aboutContentItem}>
          <h3>Авторы</h3>
          <p>За этим сайтом стоит опытный Frontend-разработчик <strong>Issa Erzhigit</strong>, и, конечно же,
            руководитель <strong>Akbaeva
              Nazgul</strong>. Мы объединили свои
            усилия, чтобы создать место, где каждый может найти книгу по душе и поделиться своими впечатлениями.</p>
        </div>
      </animated.div>
    </div>
  );
};

export { AboutContent };