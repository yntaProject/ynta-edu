import cl from "../../selected-books.module.scss";
import { useState } from "react";
import { IBook, IMessage } from "../../../../../shared/types";
import { useAuth } from "../../../../../app/providers/auth-provider";
import { useFetchData } from "../../../../../shared/API/hooks/useFetchData";
import { getUniqueDates } from "../../../utils/get-unique-dates";
import { ForumHeader } from "./header/forum-header";
import { ForumBody } from "./body/forum-body";
import { ForumFooter } from "./footer/forum-footer";
import { Frame } from "../../../../../shared/UI/frame/frame";
import { MutatingDots } from "react-loader-spinner";

interface ForumProps {
  setSelectedChat: (arg: string) => void;
  selectedChat: string;
  activeBook: IBook | null;
  bookId: string | undefined;
  type: string;
}

const Forum = ({ setSelectedChat, selectedChat, activeBook, type, bookId }: ForumProps) => {
  const [chatMessages, isLoading] = useFetchData<IMessage>(`${type}/${activeBook?.id}/${selectedChat}`);
  const [isError, setIsError] = useState<boolean>(false);
  const uniqueDates = getUniqueDates(chatMessages);
  const { user } = useAuth();

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
    <div className={cl.forum}>
      {isError ?
        <h1 className={cl.forumError}>Ошибка, попробуйте позже!</h1>
        :
        <>
          <ForumHeader selectedChat={selectedChat} setSelectedChat={setSelectedChat}/>
          <ForumBody
            userEmail={user?.email}
            chatMessages={chatMessages}
            uniqueDates={uniqueDates}
            selectedChat={selectedChat}
            type={type}
            bookId={bookId}
            isLoading={isLoading}/>
          <ForumFooter
            activeBook={activeBook}
            selectedChat={selectedChat}
            type={type}
            user={user}
            setIsError={setIsError}/>
        </>
      }
    </div>
  );
};

export { Forum };