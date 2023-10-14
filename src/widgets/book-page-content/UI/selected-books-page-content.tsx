import { useFetchData } from "../../../shared/API/hooks/useFetchData";
import { useEffect, useState } from "react";
import cl from "./selected-books.module.scss";
import { IBook } from "../../../shared/types";
import { Forum } from "./forum";
import { isBookNew } from "../utils/is-new-book";
import { MutatingDots } from "react-loader-spinner";
import { Frame } from "../../../shared/UI/frame/frame";

interface SelectedBooksPageContent {
  type: string;
}

const SelectedBooksPageContent = ({ type }: SelectedBooksPageContent) => {
  const [booksData, isLoading] = useFetchData<IBook>(type, true);
  const [activeBook, setActiveBook] = useState<IBook | null>(null);
  const [selectedChat, setSelectedChat] = useState<string>("6chat");

  useEffect(() => {
    if (booksData.length > 0) {
      setActiveBook(booksData[0]);
    }
  }, [booksData]);

  if (isLoading) return <Frame h={"70vh"}>
    <MutatingDots
      height="100"
      width="100"
      color="#ED553B"
      secondaryColor="#ED553B"
      radius="12.5"
      ariaLabel="mutating-dots-loading"
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
    />;
  </Frame>;

  return (
    <div className={cl.booksNav}>
      <div className={cl.booksContainer}>
        {booksData.map((book: IBook) =>
          <div
            key={book.id}
            className={`${cl.booksItem} ${book.id === activeBook?.id && cl.activeBookItem}`}
            onClick={() => setActiveBook(book)}>
            <h1>{book.title}</h1>
            {isBookNew(book.createdAt) && <p className={cl.newBook}>НОВАЯ</p>}
          </div>
        )}
      </div>
      <div className={cl.bookLink}>
        <nav>Ссылка на книгу</nav>
        <a href={activeBook?.link} target={"_blank"}>{activeBook?.link}</a>
      </div>
      <div className={cl.booktrailer}>
        <nav>Буктрейлер</nav>
        <p>{activeBook?.booktrailer}</p>
      </div>
      <Forum
        setSelectedChat={setSelectedChat}
        selectedChat={selectedChat} activeBook={activeBook}
        type={type}
        bookId={activeBook?.id}
      />
    </div>
  );
};

export { SelectedBooksPageContent };