import * as React from "react";
import { FirebaseProvider } from "./firebase-provider";
import { BrowserRouter } from "react-router-dom";
import { UserProvider } from "./auth-provider";

interface providerProps {
  children: React.ReactNode;
}

const Provider = ({ children }: providerProps) => {

  return (
    <BrowserRouter>
      <FirebaseProvider>
        <UserProvider>
          {children}
        </UserProvider>
      </FirebaseProvider>
    </BrowserRouter>
  );
};

export { Provider };