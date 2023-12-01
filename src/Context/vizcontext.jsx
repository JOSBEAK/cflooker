import { createContext, useEffect, useState } from "react";

const VizContext = createContext();

// eslint-disable-next-line react/prop-types
const VizContextProvider = ({ children }) => {
  const [userData, setUserData] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const fetchUsers = async () => {
    const response = await fetch(
      `https://codeforces.com/api/user.info?handles=${searchValue};`
    );
    if (!response.ok) {
      throw new Error("UnOk");
    }
    const { result } = await response.json();
    setUserData(result);
  };
  useEffect(() => {
    fetchUsers();
  }, [searchValue]);

  const valueToShare = {
    userData,
    fetchUsers,
    setSearchValue,
  };
  return (
    <VizContext.Provider value={valueToShare}>{children}</VizContext.Provider>
  );
};

export { VizContextProvider };
export default VizContext;
