import React, { useEffect, useRef, useState } from "react";
import { Input } from "../../../shared/UI/input/input";
import { Button } from "../../../shared/UI/button/button";
import { useAuth } from "../../../app/providers/auth-provider";
import { ICreativityMessage } from "../../../shared/types";
import cl from "./creativity.module.scss";
import { useFetchData } from "../../../shared/API/hooks/useFetchData";
import { sendCreativityMessage } from "../../../features/creativity-chat/send-creativity-message";
import { getUniqueDates } from "../../book-page-content/utils/get-unique-dates";
import { handleDelete } from "../helpers/handle-delete";

const CreativityContent = () => {
  const [msg, setMsg] = useState<string>("");
  const [creativityMessages, messagesLoading] = useFetchData<ICreativityMessage>("creativity");
  const scrollDown = useRef<null | HTMLDivElement>(null);
  const uniqueDates = getUniqueDates(creativityMessages);
  const { user } = useAuth();

  useEffect(() => {
    scrollDown.current?.scrollIntoView({ behavior: "smooth", block: "end" });
  }, [creativityMessages.length]);

  return (
    <div className={cl.creativity}>
      {messagesLoading ?
        <h1 className={cl.creativityLoading}>Загружаем сообщения...</h1>
        :
        <div className={cl.creativityContent}>
          <div className={cl.creativityMessages}>
            {uniqueDates.map((date, index) =>
              <React.Fragment key={index}>
                <p className={cl.creativityMessagesDate}>{date.toLocaleDateString()}</p>
                {creativityMessages.map((msg: ICreativityMessage) => {
                  const msgDate = new Date(msg.createdAt.seconds * 1000 + msg.createdAt.nanoseconds / 1000000);
                  if (msgDate.toLocaleDateString() === date.toLocaleDateString()) {
                    const { email, userName, id, message } = msg;
                    const hours = msgDate.getHours();
                    const minutes = msgDate.getMinutes();
                    return (
                      <div
                        className={`${cl.creativityMessagesItem} ${email === user?.email && cl.creativityMessagesItemOwn}`}
                        key={id}
                        ref={scrollDown}
                        onDoubleClick={() => handleDelete(msg.email, msg.id, user?.email)}
                      >
                        <div className={cl.creativityMessagesItemCnt}>
                          <p className={cl.creativityMessagesItemUser}>{userName}</p>
                          <p className={cl.creativityMessagesItemContent}>{message}</p>
                          <p className={cl.creativityMessagesItemTime}>
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
        </div>
      }
      <footer className={cl.creativityFooter}>
        <form onSubmit={(e) => sendCreativityMessage(e, msg, user, setMsg)} className={cl.creativityForm}>
          <Input
            type="text"
            value={msg}
            onChange={(e) => setMsg(e.target.value)}
            placeholder={"Напишите сообщение в чат!"}
            extraClassName={cl.creativityInput}
          />
          <Button variant={"outlined"}>Send</Button>
        </form>
      </footer>
    </div>
  );
};

export { CreativityContent };