import cl from "../../../selected-books.module.scss";
import React, { useEffect, useRef } from "react";
import { IMessage } from "../../../../../../shared/types";
import { handleDelete } from "../../../../../../features/forum/chat/handle-delete";
import { ThreeDots } from "react-loader-spinner";

interface ForumBodyProps {
  uniqueDates: Date[];
  chatMessages: IMessage[];
  isLoading: boolean;
  userEmail: string | null | undefined;
  selectedChat: string;
  type: string;
  bookId: string | undefined;
}

const ForumBody = ({ uniqueDates, chatMessages, isLoading, userEmail, selectedChat, type, bookId }: ForumBodyProps) => {
  const scrollDown = useRef<null | HTMLDivElement>(null);

  useEffect(() => {
    scrollDown.current?.scrollIntoView({ behavior: "smooth", block: "end" });
  }, [chatMessages, isLoading]);

  return chatMessages.length &&
    <div className={cl.forumBody}>
      {isLoading
        ? <ThreeDots
          height="80"
          width="80"
          radius="9"
          color="#4fa94d"
          ariaLabel="three-dots-loading"
          wrapperStyle={{}}
          visible={true}
        />
        :
        <div className={cl.forumMessages}>
          {uniqueDates.map((date, index) =>
            <React.Fragment key={index}>
              <p className={cl.forumMessagesDate}>{date.toLocaleDateString()}</p>
              {chatMessages.map((msg: IMessage) => {
                const msgDate = msg?.createdAt.toDate();
                const msgDateString = msgDate.toLocaleDateString();
                if (msgDateString === date.toLocaleDateString()) {
                  const hours = msgDate.getHours();
                  const minutes = msgDate.getMinutes();
                  return (
                    <div
                      className={`${cl.forumMessagesItem} ${msg.email === userEmail && cl.forumMessagesItemOwn}`}
                      onDoubleClick={() => handleDelete(msg.email, msg.id, type, bookId, selectedChat, userEmail, msg.messageImage)}
                      key={msg?.id}
                      ref={scrollDown}>
                      <div className={cl.forumMessagesItemCnt}>
                        <p className={cl.forumMessagesItemUser}>{msg?.userName}</p>
                        {msg?.messageImage.messageImageURL &&
                          <img src={msg?.messageImage.messageImageURL} alt="message as image"/>}
                        {msg.message &&
                          <p className={cl.forumMessagesItemContent}>{msg?.message}</p>}
                        <p className={cl.forumMessagesItemTime}>
                          {`${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}`}
                        </p>
                      </div>
                    </div>
                  );
                }
                return null;
              })}
            </React.Fragment>
          )}
        </div>
      }
    </div>
    ||
    <div className={cl.forumEmpty}>
      <h1>Здесь пока нет сообщений &#128554;</h1>
    </div>;

};

export { ForumBody };