import { signInWithPopup, GoogleAuthProvider, getAuth } from "firebase/auth";

export const googlesignin = () => {
  const auth = getAuth();
  const provider = new GoogleAuthProvider();
  signInWithPopup(auth, provider)
    .then((result) => {
      GoogleAuthProvider.credentialFromResult(result);
    });
};
