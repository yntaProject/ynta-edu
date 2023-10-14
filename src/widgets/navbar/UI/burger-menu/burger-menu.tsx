import { Squash as Hamburger } from "hamburger-react";
import cl from "./burger.module.scss";
import { Dispatch, SetStateAction } from "react";
import { Frame } from "../../../../shared/UI/frame/frame";
import { ThreeDots } from "react-loader-spinner";
import { Link } from "react-router-dom";
import { handleLogout } from "../../../authorization-content/helpers/handle-logout";
import { User } from "firebase/auth";

interface BurgerMenuProps {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  loading: boolean;
  user: User | null;
  avatar: string | null;
}

const BurgerMenu = ({ isOpen, setIsOpen, loading, user, avatar }: BurgerMenuProps) => {
  return isOpen ? 
    <header className={cl.burger}>
      <div className={cl.burgerBtn}>
        <Hamburger toggled={isOpen} toggle={setIsOpen} size={48} easing="ease-in-out" rounded color={"#FFFFFF"}/>
      </div>
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
            <Link to={"/profile"} className={cl.navbarProfile} onClick={() => setIsOpen(false)}>
              <img src={avatar || "./assets/images/user-mock.png"} alt="avatar" className={cl.navbarCircle}/>
              <h3>{user?.email}</h3>
            </Link>
            :
            <div className={cl.navbarNotdetected} onClick={() => setIsOpen(false)}>
              <img src="./assets/images/user-mock.png" alt="mock"/>
              <h3>{"notdetected.user@gmail.com"}</h3>
            </div>
          }
        </>
      }
      <div className={cl.navbarSections}>
        <Link to={"/"} className={cl.sectionItem} onClick={() => setIsOpen(false)}>Главная</Link>
        <Link to={"/about"} className={cl.sectionItem} onClick={() => setIsOpen(false)}>О Нас</Link>
        <Link to={"/books"} className={cl.sectionItem} onClick={() => setIsOpen(false)}>Книги</Link>
        <Link to={"/creativity"} className={cl.sectionItem} onClick={() => setIsOpen(false)}>Творчество</Link>
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
        <div className={cl.navbarReg} onClick={() => setIsOpen(false)}>
          <Link to={"/auth"} className={cl.sectionItem}>Зарегистрироваться</Link>
        </div>}
    </header>
    : 
    <header className={cl.burgerBtn}>
      <Hamburger toggled={isOpen} toggle={setIsOpen} size={48} easing="ease-in-out" rounded color={"#ED553B"}/>
    </header>
  ;
};

export { BurgerMenu };