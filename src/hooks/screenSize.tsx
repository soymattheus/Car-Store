import React from "react";
import { useMediaQuery } from "react-responsive";

interface ScreenSizeContextType {
  isMobile: boolean;
  isTablet: boolean;
  isLaptop: boolean;
  isDesktop: boolean;
  is4k: boolean;
}

const ScreenSizeContext = React.createContext<
  ScreenSizeContextType | undefined
>(undefined);
ScreenSizeContext.displayName = "Contexto de para controle do tamanho da tela.";

interface ScreenSizeProviderType {
  children: React.ReactNode;
}

export function ScreenSizeProvider({ children }: ScreenSizeProviderType) {
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });
  const isTablet = useMediaQuery({
    query: "(min-width: 768px) and (max-width: 1022px)",
  });
  const isLaptop = useMediaQuery({
    query: "(min-width: 1023px) and (max-width: 1439px)",
  });
  const isDesktop = useMediaQuery({
    query: "(min-width: 1440px) and (max-width: 2559px)",
  });
  const is4k = useMediaQuery({
    query: "(min-width: 1440px) and (max-width: 2559px)",
  });

  return (
    <ScreenSizeContext.Provider
      value={{ isMobile, isTablet, isLaptop, isDesktop, is4k }}
    >
      {children}
    </ScreenSizeContext.Provider>
  );
}

export function useScreenSize(): ScreenSizeContextType {
  const context = React.useContext(ScreenSizeContext);

  if (!context)
    throw new Error("useScreenSize must be used within an AuthProvider");

  return context;
}
