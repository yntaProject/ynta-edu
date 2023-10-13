import { addDoc, collection } from "firebase/firestore";
import { db } from "../../firebase";
// @ts-ignore
export const sendCreativityMessage = async (e, msg, user, setMsg) => {
  e.preventDefault();
  if (!msg.trim()) return;
  if (!user?.uid || !user.emailVerified) return;
  setMsg("");
  const messageData = {
    message: msg,
    email: user?.email,
    userName: user?.displayName,
    createdAt: new Date()
  };

  try {
    await addDoc(collection(db, "creativity"), messageData);
  } catch (error) {
    console.error(error);
  }
};