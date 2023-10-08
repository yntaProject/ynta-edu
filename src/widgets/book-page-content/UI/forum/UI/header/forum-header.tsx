import cl from "../../../selected-books.module.scss";

interface ForumHeaderProps {
  selectedChat: string;
  setSelectedChat: (arg: string) => void;
}

const ForumHeader = ({ selectedChat, setSelectedChat }: ForumHeaderProps) => {
  return (
    <header className={cl.forumHeader}>
      <nav>Форум</nav>
      <select
        value={selectedChat}
        onChange={(e) => setSelectedChat(e.target.value)}
        className={cl.forumSelect}
      >
        {Array.from({ length: 6 }, (_, i) => i + 6).map((chatNumber) =>
          <option
            key={chatNumber}
            value={`${chatNumber}chat`}
            className={cl.forumSelectOption}>{chatNumber} класс</option>
        )}
      </select>
    </header>
  );
};

export { ForumHeader };