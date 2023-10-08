import { getAuth } from "firebase/auth";

export const handleLogout = () => {
  const auth = getAuth();
  auth.signOut();
};