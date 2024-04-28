import React from "react";
import "./App.css";
import Header from "./layout/header";

import AppProvider from "./hooks";

import Banner from "./components/Banner";
import SearchCar from "./screens/searchCar";
import Footer from "./layout/footer";

function App() {
  return (
    <AppProvider>
      <div style={{ minWidth: "320px", backgroundColor: "#ebe6e6" }}>
        <Header />
        <Banner />
        <SearchCar />
        <Footer />
      </div>
    </AppProvider>
  );
}

export default App;
