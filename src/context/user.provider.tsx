import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";
import { getCurrentUser } from "../services/AuthServices";
import { TAuthProps } from "../types";

const USER_CONTEXT = createContext<IUserProviderValues | undefined>(undefined);

interface IUserProviderValues {
  user: TAuthProps | null;
  setUser: (user: TAuthProps | null) => void;
  isLoading: boolean;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
}

const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<TAuthProps | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const handleUser = async () => {
    const userData = await getCurrentUser();

    setUser(userData);
    setIsLoading(false);
  };

  useEffect(() => {
    handleUser();
  }, [isLoading]);

  const values = { user, setUser, isLoading, setIsLoading };
  return (
    <USER_CONTEXT.Provider value={values}>{children}</USER_CONTEXT.Provider>
  );
};

export const useUser = () => {
  const context = useContext(USER_CONTEXT);
  if (context === undefined) {
    throw new Error("useUser must be used within the UserProvider context.");
  }
  return context;
};

export default UserProvider;
