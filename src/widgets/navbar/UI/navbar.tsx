import { Link } from "react-router-dom";
import cl from "./navbar.module.scss";
import { useAuth } from "../../../app/providers/auth-provider";
import { handleLogout } from "../../authorization-content/helpers/handle-logout";
import { User } from "firebase/auth";
import { ThreeDots } from "react-loader-spinner";
import { Frame } from "../../../shared/UI/frame/frame";
import { useMediaQuery } from "../../../shared/API/hooks/useMediaQuery";
import { BurgerMenu } from "./burger-menu/burger-menu";
import { useState } from "react";

const Navbar = () => {
  const { user, loading }: { user: User | null, loading: boolean } = useAuth();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const matches = useMediaQuery("(max-width: 1050px)");
  let avatar: string | null = null;

  if (user?.providerData.length! > 1) {
    const googleProvider = user?.providerData.find((provider) => provider.providerId === "google.com");
    avatar = googleProvider?.photoURL || null;
  }

  return matches ? 
    <BurgerMenu isOpen={isOpen} setIsOpen={setIsOpen} user={user} loading={loading} avatar={avatar}/>
    : 
    <header className={cl.navbar}>
      {loading ?
        <Frame>
          <ThreeDots
            height="80"
            width="80"
            radius="9"
            color="#ED553B"
            ariaLabel="three-dots-loading"
            visible={true}
          />
        </Frame>
        :
        <>
          {user?.emailVerified ?
            <Link to={"/profile"} className={cl.navbarProfile}>
              <img src={avatar || "./assets/images/user-mock.png"} alt="avatar" className={cl.navbarCircle}/>
              <h3>{user?.email}</h3>
            </Link>
            :
            <img src="./assets/images/user-mock.png" alt="mock" className={cl.navbarCircle}/>
          }
        </>
      }
      <div className={cl.navbarSections}>
        <Link to={"/"} className={cl.sectionItem}>Главная</Link>
        <span className={cl.column}></span>
        <Link to={"/about"} className={cl.sectionItem}>О Нас</Link>
        <span className={cl.column}></span>
        <Link to={"/books"} className={cl.sectionItem}>Книги</Link>
        <span className={cl.column}></span>
        <Link to={"/creativity"} className={cl.sectionItem}>Творчество</Link>
      </div>
      {loading &&
        <Frame>
          <ThreeDots
            height="80"
            width="80"
            radius="9"
            color="#ED553B"
            ariaLabel="three-dots-loading"
            wrapperStyle={{}}
            visible={true}
          />
        </Frame> ||
        user?.emailVerified &&
        <h1 onClick={handleLogout} className={cl.navbarLogout}>Выйти</h1> ||
        <Link to={"/auth"} className={cl.sectionItem}>Зарегистрироваться</Link>}
    </header>
  ;
};

export { Navbar };