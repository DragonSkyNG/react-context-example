import { useContext } from "react";
import { isLoggedInContext } from "./store/isLoggedIn-context";

const Login = () => {
  const loggedInCtx = useContext(isLoggedInContext);

  const onClickSetTrue = () => {
    loggedInCtx.setLoggedInStatus(true);
  };
  const onClickSetFalse = () => {
    loggedInCtx.setLoggedInStatus(false);
  };

  return (
    <>
      <button onClick={onClickSetTrue}>Change loggedin true</button>
      <button onClick={onClickSetFalse}>Change loggedin false</button>
    </>
  );
};

export default Login;
