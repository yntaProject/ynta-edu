import React, { createContext, FC } from "react";
import { app, db } from "../../firebase";
import { FirebaseApp } from "firebase/app";
import { Firestore } from "@firebase/firestore";
interface FirebaseProviderProps {
    children: React.ReactNode;
}
export type FirebaseContextType = {
  app: FirebaseApp;
  db: Firestore;
};
const FirebaseContext = createContext<FirebaseContextType | null>(null);
const FirebaseProvider: FC<FirebaseProviderProps> = ({ children }) => {
  return (
    <FirebaseContext.Provider
      value={{
        app,
        db
      }}
    >
      {children}
    </FirebaseContext.Provider>
  );
};

export { FirebaseProvider };