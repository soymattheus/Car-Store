import React from "react";
import { ScreenSizeProvider } from "./screenSize";
import SearchCarModuleProvider from "../screens/Providers";

function AppProvider({ children }: { children: React.ReactNode }): JSX.Element {
  return (
    <ScreenSizeProvider>
      <SearchCarModuleProvider>{children}</SearchCarModuleProvider>
    </ScreenSizeProvider>
  );
}

export default AppProvider;
