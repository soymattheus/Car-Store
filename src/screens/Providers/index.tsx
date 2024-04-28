import React from "react";
import { SearchCarProvider } from "./searchCar";

function SearchCarModuleProvider({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return <SearchCarProvider>{children}</SearchCarProvider>;
}

export default SearchCarModuleProvider;
