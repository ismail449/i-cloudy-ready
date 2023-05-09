import { createContext, useState, FC, Dispatch, ReactNode } from "react";

type SidebarContextType = {
  isCartSidebarOpen: boolean;
  isKitchenSidebarOpen: boolean;
  setIsCartSidebarOpen: Dispatch<React.SetStateAction<boolean>>;
  setIsKitchenSidebarOpen: Dispatch<React.SetStateAction<boolean>>;
};

export const SidebarContext = createContext<SidebarContextType>({
  isCartSidebarOpen: false,
  isKitchenSidebarOpen: false,
  setIsCartSidebarOpen: () => {},
  setIsKitchenSidebarOpen: () => {},
});
type SidebarProviderProps = {
  children: ReactNode;
};

export const SidebarProvider: FC<SidebarProviderProps> = ({ children }) => {
  const [isCartSidebarOpen, setIsCartSidebarOpen] = useState(false);
  const [isKitchenSidebarOpen, setIsKitchenSidebarOpen] = useState(false);
  const value = {
    isCartSidebarOpen,
    setIsCartSidebarOpen,
    isKitchenSidebarOpen,
    setIsKitchenSidebarOpen,
  };
  return (
    <SidebarContext.Provider value={value}>{children}</SidebarContext.Provider>
  );
};
