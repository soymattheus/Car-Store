import React, { createContext, useContext, useState, ReactNode } from "react";

interface VingadoresContextType {
  vingador: string;
  setVingador: React.Dispatch<React.SetStateAction<string>>;
}

const VingadoresContext = createContext<VingadoresContextType | undefined>(
  undefined
);

interface VingadoresProviderProps {
  children: ReactNode;
}

export function VingadoresProvider({ children }: VingadoresProviderProps) {
  const [vingador, setVingador] = useState<string>("Homem de Ferro");
  return (
    <VingadoresContext.Provider value={{ vingador, setVingador }}>
      {children}
    </VingadoresContext.Provider>
  );
}

export function useVingadores(): VingadoresContextType {
  const context = useContext(VingadoresContext);
  if (!context) {
    throw new Error(
      "useVingadores deve ser usado dentro de um VingadoresProvider"
    );
  }
  return context;
}
