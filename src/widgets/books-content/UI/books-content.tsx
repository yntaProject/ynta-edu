import cl from "./books.module.scss";
import { Link } from "react-router-dom";
import { useSpring, animated } from "@react-spring/web";

const BooksContent = () => {
  const animationY = useSpring({
    opacity: 1,
    transform: "translateY(0%)",
    from: { opacity: 0, transform: "translateY(100%)" },
  });
  return (
    <animated.div style={animationY} className={cl.booksContainer}>
      <Link to={"/books/worldwide"}>
        <img src="/assets/images/world-culture.webp" alt="world culture" className={cl.booksImage}/>
      </Link>
      <Link to={"/books/russian"}>
        <img src="/assets/images/russian-culture.jpeg" alt="world culture" className={cl.booksImage}/>
      </Link>
      <Link to={"/books/kazakh"}>
        <img src="/assets/images/kazakh-culture.webp" alt="world culture" className={cl.booksImage}/>
      </Link>
    </animated.div>
  );
};

export { BooksContent };