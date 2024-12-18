"use client";

import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";

import { TAuthProps } from "../types";
import { getCurrentUser } from "../services/AuthServices";

interface IUserProviderValues {
  user: TAuthProps | null;
  setUser: (user: TAuthProps | null) => void;
  isLoading: boolean;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
}

const USER_CONTEXT = createContext<IUserProviderValues | undefined>(undefined);

const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<TAuthProps | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const handleUser = async () => {
    try {
      const userData = await getCurrentUser();

      setUser(userData);
      setIsLoading(false);
    } catch (error: any) {
      setUser(null);
    }
  };

  useEffect(() => {
    handleUser();
  }, [isLoading]);

  return (
    <USER_CONTEXT.Provider value={{ user, setUser, isLoading, setIsLoading }}>
      {children}
    </USER_CONTEXT.Provider>
  );
};

export const useCurrentUser = () => {
  const context = useContext(USER_CONTEXT);

  if (context === undefined) {
    throw new Error(
      "useCurrentUser must be used within the UserProvider context."
    );
  }

  return context;
};

export default UserProvider;
