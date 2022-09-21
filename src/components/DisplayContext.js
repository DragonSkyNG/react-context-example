import { useContext } from "react";
import { isLoggedInContext } from "./store/isLoggedIn-context";

const DisplayContext = () => {
  const isLoggedInCtx = useContext(isLoggedInContext);
  console.log(isLoggedInCtx.isLoggedIn);
  return <div>{`${isLoggedInCtx.isLoggedIn}`}</div>;
};

export default DisplayContext;
