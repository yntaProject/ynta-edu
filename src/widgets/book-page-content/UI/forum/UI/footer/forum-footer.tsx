import cl from "../../../selected-books.module.scss";
import { sendMessage } from "../../../../../../features/forum/chat/send-message";
import { Input } from "../../../../../../shared/UI/input/input";
import { Button } from "../../../../../../shared/UI/button/button";
import paperClip from "../../../../../../../public/assets/images/paper-clip.svg";
import { ChangeEvent, useState } from "react";
// @ts-ignore
const ForumFooter = ({ user, type, activeBook, selectedChat, setIsError }) => {
  const [msg, setMsg] = useState<string>("");
  const [file, setFile] = useState<File | null>(null);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      setFile(files[0]);
    }
  };

  return (
    <footer className={cl.forumFooter}>
      <form
        onSubmit={(e) =>
          sendMessage(e, user, msg, type, file, activeBook, selectedChat, setMsg, setIsError, setFile)
        }
        className={cl.forumForm}
      >
        <Input
          type="text"
          value={msg}
          onChange={(e) => setMsg(e.target.value)}
          placeholder={"Напишите сообщение в чат!"}
          extraClassName={cl.forumInput}
        />
        {file &&
          <img
            src={URL.createObjectURL(file)}
            className={cl.forumImageMessage}
            onClick={() => setFile(null)}
            alt="image as message"
          />
        }
        <div className={cl.forumFooterUplaod}>
          <input
            type="file"
            id="file"
            accept={"image/*"}
            style={{ display: "none" }}
            onChange={handleFileChange}
          />
          <label htmlFor="file">
            <img src={paperClip} alt="upload"/>
          </label>
        </div>
        <Button variant={"outlined"}>
          Send
        </Button>
      </form>
    </footer>
  );
};

export { ForumFooter };