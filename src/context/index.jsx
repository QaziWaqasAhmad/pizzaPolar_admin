import React, { createContext, useState, memo } from "react";

export const AppContext = createContext();
const AppProvider = (props) => {
  const [openDrawer, setOpenDrawer] = useState(true);

  return (
    <AppContext.Provider
      value={{
        openDrawer,
        setOpenDrawer
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default memo(AppProvider);
