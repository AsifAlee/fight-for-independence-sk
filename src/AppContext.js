import React, { createContext } from "react";
const AppContext = createContext("");

const EventProvider = ({ children }) => {
  return <AppContext.Provider>{children}</AppContext.Provider>;
};

export default EventProvider;
