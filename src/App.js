import DisplayContext from "./components/DisplayContext";
import Login from "./components/Login";
import IsLoggedInContextProvider from "./components/store/isLoggedIn-context";

function App() {
  return (
    <IsLoggedInContextProvider>
      <DisplayContext />
      <Login />
    </IsLoggedInContextProvider>
  );
}

export default App;
