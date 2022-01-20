import { useContext } from "react";
import context from "./context";
import store from "./store";
import jwtDecode from "jwt-decode";

const useAuth = () => {
  const { user, setUser } = useContext(context);

  const logOut = () => {
    setUser(null);
    store.removeToken();
  };

  const logIn = (authToken) => {
    const user = jwtDecode(authToken);

    setUser(user);
    store.storeToken(authToken);
  };

  return { user, logOut, logIn };
};

export default useAuth;
