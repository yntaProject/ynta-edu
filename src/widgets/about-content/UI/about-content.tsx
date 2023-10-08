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
        <animated.img style={animationXright} src="./assets/images/landing/about-us-background.jpg" alt="about us" className={cl.aboutBackground}/>
      </div>
      <animated.div style={animationY} className={cl.aboutContent}>
        <div className={cl.aboutContentItem}>
          <h3>Цель</h3>
          <p>em Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной
            "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую
            коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не только
            успешно пережил без заметных изменений пять веков, но и перешагнул в электронный дизайн. Его популяризации в
            новое время послужили публикация листо</p>
        </div>
        <div className={cl.aboutContentItem}>
          <h3>О сайте</h3>
          <p>em Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной
            "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую
            коллекцию </p>
        </div>
        <div className={cl.aboutContentItem}>
          <h3>Достижения</h3>
          <p>em Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной
            "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую
            коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не только
            успешно пережил без заметных изменений пять веков, но и перешагнул в электронный дизайн. Его популяризации в
            новое время послужили публикация листоem Ipsum - это текст-"рыба", часто используемый в печати и
            вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время
            некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для
            распечатки образцов. Lorem Ipsum не только успешно пережил без заметных изменений пять веков, но и
            перешагнул в электронный дизайн. Его популяризации в новое время послужили публикация листо</p>
        </div>
        <div className={cl.aboutContentItem}>
          <h3>Авторы</h3>
          <p>em Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной
            "рыбой"о</p>
        </div>
      </animated.div>
    </div>
  );
};

export { AboutContent };