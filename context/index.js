"use client";
import React, { useState, createContext, useEffect, useMemo } from "react";
import preloader from "@/assets/images/Fidget-spinner.gif";

export const Context = createContext();

export const ContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const userLoggedIn = localStorage.getItem("user");

  useEffect(() => {
    if (!userLoggedIn) return;
    console.log("====================================");
    console.log(JSON.parse(userLoggedIn));
    console.log("====================================");

    setUser(JSON.parse(userLoggedIn));
  }, [userLoggedIn]);

  const value = {
    user,
    setUser,
  };

  return <Context.Provider value={value}>{children}</Context.Provider>;
};
