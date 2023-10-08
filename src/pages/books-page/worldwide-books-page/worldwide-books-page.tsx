import { SelectedBooksPageContent } from "../../../widgets/book-page-content/UI/selected-books-page-content";
import { useLocation } from "react-router-dom";
import { ButtonBack } from "../../../entities/button-back";
import cl from "../books.module.scss";

const WorldwideBooksPage = () => {
  const location = useLocation();
  const paths: string[] = location.pathname.split("/");

  return (
    <div>
      <div className={cl.booksHeader}>
        <ButtonBack/>
        <h1>Всемирная литература</h1>
      </div>
      <SelectedBooksPageContent type={paths[2]}/>
    </div>
  );
};

export { WorldwideBooksPage };