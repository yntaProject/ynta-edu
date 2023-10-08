import {
  createUserWithEmailAndPassword,
  getAuth,
  sendEmailVerification,
  signInWithEmailAndPassword,
  updateProfile
} from "firebase/auth";
// @ts-ignore
export const sub = async (e, email: string, name: string, pwd: string, isLogin: boolean, setMessage, setEmailVerificationSent) => {
  const auth = getAuth();
  e.preventDefault();

  if (isLogin) {
    signInWithEmailAndPassword(auth, email, pwd)
      .then(() => {
        setMessage("Successfully logged in");
        window.location.reload();
      })
      .catch(() => {
        setMessage("Invalid password or email");
      });
  } else {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, pwd);
      const user = userCredential.user;
      setMessage("Successfully created user");

      // Обновление имени пользователя
      if (user) {
        await updateProfile(user, {
          displayName: name
        });
        await user.reload();
      }

      // Отправка email для подтверждения
      if (user && !user.emailVerified) {
        sendEmailVerification(user)
          .then(() => {
            setMessage("Email verification sent");
            setEmailVerificationSent(true);
          })
          .catch((error) => {
            setMessage(error.message);
          });
      }
    } catch (error) {
      const errorWithCode = error as { code?: string };

      if (errorWithCode.code === "auth/email-already-in-use") {
        setMessage("Such email already in the system");
      } else {
        setMessage("Weak password, strengthen it (at least 6 characters).");
      }
    }
  }
};