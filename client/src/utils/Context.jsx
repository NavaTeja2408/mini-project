import { createContext, useContext, useState, useEffect } from "react";

export const UserContext = createContext({});

export function UserContextProvider({ children }) {
  const getUserFromLocalStorage = () => {
    const user = localStorage.getItem("user");
    if (user) {
      try {
        return JSON.parse(user);
      } catch (error) {
        console.error("Error parsing JSON from localStorage:", error);
        return null;
      }
    }
    return null;
  };
  const [authUser, setAuthUser] = useState(getUserFromLocalStorage());

  useEffect(() => {}, [authUser]);

  return (
    <UserContext.Provider
      value={{
        authUser,
        setAuthUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
