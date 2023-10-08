import React, { useState, useEffect, useContext, createContext } from "react";
import { getAuth, onAuthStateChanged, User } from "firebase/auth";

export const UserContext = createContext<User | null>(null);

export const useAuth = (): { user: User | null, loading: boolean } => {
  const user = useContext(UserContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, () => {
      setLoading(false);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return { user, loading };
};

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true); // Added loading state
  const auth = getAuth();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (newUser) => {
      setCurrentUser(newUser);
      setLoading(false); // Set loading to false here
    });

    return unsubscribe;
  }, []);

  return (
    <UserContext.Provider value={currentUser}>
      {loading ? "Loading..." : children}
    </UserContext.Provider>
  );
};
