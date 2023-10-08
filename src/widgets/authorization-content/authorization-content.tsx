import { sub } from "../../features/authorization/sub";
import { Input } from "../../shared/UI/input/input";
import { Button } from "../../shared/UI/button/button";
import { googlesignin } from "../../features/authorization/google-signin";
import { useEffect, useState } from "react";
import cl from "./auth.module.scss";
import { useAuth } from "../../app/providers/auth-provider";
import { useNavigate } from "react-router-dom";

const AuthorizationContent = () => {
  const [email, setEmail] = useState<string>("");
  const [pwd, setPwd] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [isLogin, setIsLogin] = useState<boolean>(false);
  const [message, setMessage] = useState<string | null>(null);
  const [emailVerificationSent, setEmailVerificationSent] = useState<boolean>(false);
  const { user, loading } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && user?.emailVerified) {
      navigate("/");
    }
  }, [loading, user, navigate]);

  useEffect(() => {
    if (message === "Email verification sent") setIsLogin(true);
  }, [message]);

  return (
    <form
      className={cl.form}
      onSubmit={(event) => {
        sub(event, email, name, pwd, isLogin, setMessage, setEmailVerificationSent);
      }}>
      <div className={cl.formContent}>
        {!isLogin && 
          <div className={cl.formInput}>
            <label>
              Your name
            </label>
            <Input
              placeholder="example: John Doe"
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </div>
        }
        <div className={cl.formInput}>
          <label>
            Email
          </label>
          <Input
            type="email"
            placeholder="Email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <div className={cl.formInput}>
          <label>
            Password
          </label>
          <Input
            type="password"
            placeholder="Password"
            onChange={(e) => {
              setPwd(e.target.value);
            }}
          />
        </div>
        {message && <div>{message}</div>}
        {isLogin && <div className={cl.formButton}>
          <Button
            variant={"primary"}
            type="submit"
            disabled={emailVerificationSent && !isLogin}
          >
            Login
          </Button>
          <p onClick={() => setIsLogin(false)}>Haven't an account</p>
        </div> || <div className={cl.formButton}>
          <Button
            variant={"primary"}
            type="submit"
          >
            Sign In
          </Button>
          <p onClick={() => setIsLogin(true)}>Already have an account?</p>
        </div>}
      </div>
      <div className={cl.googleForm}>
        <h1>or</h1>
        <Button onClick={googlesignin} variant={"primary"}>
          <div className={cl.googleButton}>
            <img src="./assets/images/google-icon.svg" alt="google icon" className={cl.googleIcon}/>
            Google
          </div>
        </Button>
      </div>
    </form>
  );
};

export { AuthorizationContent };