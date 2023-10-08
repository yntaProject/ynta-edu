export interface IBook {
  title: string;
  id: string;
  link: string;
  booktrailer: string;
  createdAt: any;
}

export interface IMessage {
  userName: string;
  email: string; // email
  message: string;
  id: string;
  createdAt: any;
  messageImage: {
    messageImageURL: string;
    messageImageName: string
  };
}