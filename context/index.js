"use client";
import React, { useState, createContext, useEffect, useMemo } from "react";
import preloader from "@/assets/images/Fidget-spinner.gif";

export const Context = createContext();

export const ContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const userLoggedIn = localStorage.getItem("user");
  console.log("====================================");
  console.log(JSON.parse(userLoggedIn)[0]);
  console.log("====================================");
  useEffect(() => {
    if (!userLoggedIn) return;

    setUser(JSON.parse(userLoggedIn)[0]);
  }, [userLoggedIn]);

  const value = {
    user,
    setUser,
  };

  return <Context.Provider value={value}>{children}</Context.Provider>;
};
