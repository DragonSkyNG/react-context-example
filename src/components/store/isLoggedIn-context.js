import { useState, createContext } from "react";

export const isLoggedInContext = createContext({
  isLoggedIn: false,
  setLoggedInStatus: (status) => {},
});

const IsLoggedInContextProvider = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const setLoggedInStatus = (status) => {
    setIsLoggedIn(status);
  };

  const contextValue = {
    isLoggedIn,
    setLoggedInStatus,
  };

  return (
    <isLoggedInContext.Provider value={contextValue}>
      {props.children}
    </isLoggedInContext.Provider>
  );
};

export default IsLoggedInContextProvider;
