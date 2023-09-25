import React, { createContext, useState, memo } from "react";
import { useLocalStorage } from "../hooks/useLocalSrorage";
import { useNavigate } from "react-router-dom";

export const AppContext = createContext();
const AppProvider = (props) => {
  const [openDrawer, setOpenDrawer] = useState(true);
  const [user, setUser] = useLocalStorage("users", null);
  const navigate = useNavigate();

  const login = async (data) => {
    setUser(data);
    navigate("/home", { replace: true });
  };

  const logout = () => {
    setUser(null);
    navigate("/", { replace: true });
  };


  return (
    <AppContext.Provider
      value={{
        openDrawer,
        setOpenDrawer,
        user,
        login,
        logout
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default memo(AppProvider);