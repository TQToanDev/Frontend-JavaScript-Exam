import { useState } from "react";
import { createContext } from "react";

export const AppContext = createContext([]);

export const AppProvider = ({ children }) => {
  const [userData, setUserData] = useState([]);
  const [reposData, setReposData] = useState([]);
  const [commitData, setCommitData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorMessenger, setErrorMessenger] = useState(null);
  return (
    <AppContext.Provider
      value={{
        userData,
        setUserData,
        reposData,
        setReposData,
        commitData,
        setCommitData,
        loading,
        setLoading,
        errorMessenger,
        setErrorMessenger,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
