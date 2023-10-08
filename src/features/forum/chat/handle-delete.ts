import { deleteDoc, doc } from "firebase/firestore";
import { db, storage } from "../../../firebase";
import { deleteObject, ref } from "firebase/storage";

export function handleDelete(
  email: string | null,
  id: string,
  type: string,
  bookId: string | undefined,
  selectedChat: string,
  userEmail: string | null | undefined,
  messageImage: { messageImageURL: string, messageImageName: string }
) {
  if (email === userEmail) {
    const docRef = doc(db, `${type}/${bookId}/${selectedChat}`, id);

    deleteDoc(docRef)
      .then(async () => {
        const imagePath = `images/${messageImage.messageImageName}`;
        const desertRef = ref(storage, imagePath);
        deleteObject(desertRef).then(() => {
        });
      });
  }
}
