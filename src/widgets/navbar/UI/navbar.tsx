import { Link } from "react-router-dom";
import cl from "./navbar.module.scss";
import { useAuth } from "../../../app/providers/auth-provider";
import { handleLogout } from "../../authorization-content/helpers/handle-logout";
import { User } from "firebase/auth";

const Navbar = () => {
  const { user, loading }: { user: User | null, loading: boolean } = useAuth();
  let avatar: string | null = null;

  if (user?.providerData.length! > 1) {
    const googleProvider = user?.providerData.find((provider) => provider.providerId === "google.com");
    avatar = googleProvider?.photoURL || null;
  }
  return (
    <header className={cl.navbar}>
      {loading ?
        <span>Loading...</span>
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
      {loading && <h1>...</h1> ||
        user?.emailVerified &&
        <h1 onClick={handleLogout}>Выйти</h1> ||
        <Link to={"/auth"} className={cl.sectionItem}>Зарегистрироваться</Link>}
    </header>
  );
};

export { Navbar };