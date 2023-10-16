import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../../../firebase";

export function handleDelete(
  email: string | null,
  id: string | undefined,
  userEmail: string | null | undefined,
): void {
  if (email === userEmail) {
    const docRef = doc(db, "creativity", id!);
    deleteDoc(docRef);
  }
}