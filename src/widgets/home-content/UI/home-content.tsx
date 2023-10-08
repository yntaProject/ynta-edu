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
          <h1>ipsum dolor si</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu feugiat amet, libero ipsum enim pharetra
            hac. Urna commodo, lacus ut magna velit eleifend. Amet, quis urna, a eu.</p>
          <Link to={"/books"}>
            <Button variant={"outlined"} extraClassName={cl.homeIntroTextLink}>К книгам!</Button>
          </Link>
        </div>
        <img src="./assets/images/landing/books-group.png" alt="books group"/>
      </animated.div>

      <animated.div style={animationXleft} className={cl.preBenefits}>
        <h2>
          Explore our Top Categories
        </h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu feugiat amet, libero ipsum enim pharetra hac.
          Urna commodo, lacus ut magna velit eleifend. Amet, quis urna, a eu.Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Sed eu feugiat amet, libero ipsum ipsum dolor sit amet, consectetur adipiscing elit. Sed eu
          feugiat amet, libero ipsum..</p>
      </animated.div>
      <animated.div style={animationXright} className={cl.benefits}>
        <div className={cl.benefitsItem}>
          <img src="./assets/images/landing/benefit1.png" alt="benefit1"/>
          <div className={cl.benefitsItemText}>
            <h4>Higher Education</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu feugiat amet, libero ipsum enim pharetra
              hac. Urna commodo, lacus ut mat,</p>
          </div>
        </div>

        <div className={cl.benefitsItem}>
          <img src="./assets/images/landing/benefit2.png" alt="benefit2"/>
          <div className={cl.benefitsItemText}>
            <h4>Management Books</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu feugiat amet, libero ipsum enim pharetra
              hac. Urna commodo, lacus ut mat,</p>
          </div>
        </div>

        <div className={cl.benefitsItem}>
          <img src="./assets/images/landing/benefit3.png" alt="benefit3"/>
          <div className={cl.benefitsItemText}>
            <h4>Engineering Books</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu feugiat amet, libero ipsum enim pharetra
              hac. Urna commodo, lacus ut mat,</p>
          </div>
        </div>
      </animated.div>

      <animated.div style={animationXleft} className={cl.joinUs}>
        <div className={cl.joinUsText}>
          <h2>Access, Read, Practice & Engage
            with Digital Content (eBook) </h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu feugiat amet, libero ipsum enim pharetra
            hac. Urna commodo, lacus ut magna velit eleifend. Amet, quis urna, a eu.Lorem ipsum dolor sit amet,
            consectetur adipiscing elit.</p>
          <Link to={"/auth"}><Button variant={"primary"}>Зарегестрироваться</Button></Link>
        </div>
        <img src="./assets/images/landing/girl-with-books.png" alt="girl with books"/>
      </animated.div>

      <div className={cl.statistic}>
        <div className={cl.statisticLeft}>
          <h1>All books are 50% off now! Don't miss such a deal!</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu feugiat amet, libero ipsum enim pharetra
            hac.</p>
          <div className={cl.statisticLeftCols}>
            <div className={cl.statisticLeftColsItem}>
              <h5>768</h5>
              <p>Days</p>
            </div>
            <div className={cl.statisticLeftColsItem}>
              <h5>01</h5>
              <p>Hour</p>
            </div>
            <div className={cl.statisticLeftColsItem}>
              <h5>27</h5>
              <p>Mint</p>
            </div>
            <div className={cl.statisticLeftColsItem}>
              <h5>55</h5>
              <p>Sec</p>
            </div>
          </div>
          <Link to={"/books"}>
            <Button variant={"outlined"} extraClassName={cl.statisticLeftColsButton}>К книгам!</Button>
          </Link>
        </div>
        <img src="./assets/images/landing/books-group2.png" alt="books group2"/>
      </div>

      <div className={cl.feedback}>
        <img src="./assets/images/landing/typing.jpg" alt="typing"/>
        <div className={cl.feedbackRight}>
          <div className={cl.feedbackRightText}>
            <h2>Get over a 100 free books</h2>
            <p>Get access by subcribing to our newsletter. Jump start your book reading by quickly check through the
              popular book categories...</p>
          </div>

          <div className={cl.feedbackRightButton}>
            <Input placeholder={"Сообщить об ошибке ->"}
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