import React from "react";
import "./App.css";
import Header from "./layout/header";

import AppProvider from "./hooks";

import Footer from "./layout/footer";
import Routes from "./routes";

const App: React.FC = () => {
  return (
    <AppProvider>
      <div style={{ minWidth: "320px", backgroundColor: "#ebe6e6" }}>
        <Header />
        <Routes />
        <Footer />
      </div>
    </AppProvider>
  );
};

export default App;
