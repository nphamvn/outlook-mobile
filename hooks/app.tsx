import React from "react";
import { createContext, useEffect, useState } from "react";

type AppContextType = {
  accounts: {
    email: string;
    folders: string[];
  }[];
};

export const AppContext = createContext<AppContextType | null>(null);

export const useAppContext = () => {
  const context = React.useContext(AppContext);
  if (context === undefined) {
    throw new Error("useAppContext must be used within a AppProvider");
  }
  return context;
};

const mockAccounts = [
  {
    provider: "Outlook",
    email: "pvnam95@hotmail.com",
    folders: ["Inbox", "Sent", "Drafts", "Deleted", "Junk"],
  },
  {
    provider: "Gmail",
    email: "pvnam95@gmail.com",
    folders: ["Inbox", "Sent", "Drafts", "Deleted", "Spam"],
  },
];

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [accounts, setAccounts] = useState<{
    provider: string;
    email: string;
    folders: string[];
  }[]>([]);

  useEffect(() => {
    setAccounts(mockAccounts);
  }, []);

  return (
    <AppContext.Provider value={{ accounts }}>{children}</AppContext.Provider>
  );
};
