import React, { useState } from "react";
import { createContext } from "react";

export const Context = createContext<ContextProps | null>({} as ContextProps);
export const useCtx = () => React.useContext(Context) as ContextProps;

const GContext = ({ children }: { children: React.ReactNode }) => {
  const [open, setOpen] = useState(false);

  const values = {
    open,
    setOpen,
  };

  return <Context.Provider value={values}>{children}</Context.Provider>;
};

export default GContext;

interface ContextProps {
  open: boolean;
  setOpen: any;
}
