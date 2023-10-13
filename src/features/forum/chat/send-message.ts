import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { collection, addDoc } from "firebase/firestore";
import { db, storage } from "../../../firebase";

// @ts-ignore
export async function sendMessage(e, user, msg, type, file, activeBook, selectedChat, setMsg, setIsError, setFile) {
  e.preventDefault();
  if (!msg.trim() && file === null) return;
  if (!activeBook?.id || !user?.uid || !user.emailVerified) return;
  setMsg("");
  setFile(null);
  try {
    let messageImageURL = null;
    if (file) {
      const storageRef = ref(storage, `images/${file.name}`);
      const snapshot = await uploadBytes(storageRef, file);
      messageImageURL = await getDownloadURL(snapshot.ref);
    }
    const messageData = {
      message: msg,
      messageImage: {
        messageImageURL,
        messageImageName: file ? file.name : null
      },
      email: user.email,
      userName: user.displayName,
      createdAt: new Date()
    };

    await addDoc(collection(db, `${type}/${activeBook?.id}/${selectedChat}`), messageData);
  } catch (error) {
    setIsError(true);
  }
}
