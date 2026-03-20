import {
  createContext,
  useEffect,
  useState,
  type PropsWithChildren,
} from "react";
import { users, type User } from "../data/user-mock.data";

type AuhtStatus = "checking" | "authenticated" | "not-authenticated";

interface Props {
  //state
  authStatus: AuhtStatus;
  user: User | null;

  //metodos
  login: (userId: number) => boolean;
  logout: () => void;
}

export const UserContext = createContext({} as Props);

export const UserContextProvider = ({ children }: PropsWithChildren) => {
  const [authStatus, setAuthStatus] = useState<AuhtStatus>("checking");
  const [user, setUser] = useState<User | null>(null);

  const handleLogin = (userId: number): boolean => {
    const user = users.find((user) => user.id === userId);
    if (!user) {
      console.log(`User not found ${userId}`);
      handleLogout();
      return false;
    }
    setUser(user);
    setAuthStatus("authenticated");
    console.log(userId);
    localStorage.setItem("userId", userId.toString());
    return true;
  };
  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem("userId");
    setAuthStatus("not-authenticated");
  };

  useEffect(() => {
    const storeUserID = localStorage.getItem("userId");
    if (storeUserID) {
      handleLogin(+storeUserID);
      return;
    } else {
      handleLogout();
    }
  }, []);

  return (
    <UserContext.Provider
      value={{
        authStatus,
        user,
        login: handleLogin,
        logout: handleLogout,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
