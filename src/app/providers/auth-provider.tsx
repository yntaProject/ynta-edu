import React, { useState, useEffect, useContext, createContext } from "react";
import { getAuth, onAuthStateChanged, User } from "firebase/auth";
import { MutatingDots } from "react-loader-spinner";
import { Frame } from "../../shared/UI/frame/frame";

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
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  return (
    <UserContext.Provider value={currentUser}>
      {loading ? <Frame h={"100vh"}>
        <MutatingDots
          height="100"
          width="100"
          color="#ED553B"
          secondaryColor="#ED553B"
          radius="12.5"
          ariaLabel="mutating-dots-loading"
          visible={true}
        />
      </Frame> : children}
    </UserContext.Provider>
  );
};
