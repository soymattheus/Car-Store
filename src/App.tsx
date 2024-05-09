import React from "react";
import "./App.css";
import Header from "./layout/header";

import AppProvider from "./hooks";

import Footer from "./layout/footer";
import Routes from "./routes";

const App: React.FC = () => {
  return (
    <AppProvider>
      <div className="app">
        <Header />
        <Routes />
        <Footer />
      </div>
    </AppProvider>
  );
};

export default App;
