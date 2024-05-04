import React, { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Loading from "../components/Loading";
const Home = React.lazy(() => import("../screens/searchCar"));
const CarDetail = React.lazy(() => import("../screens/CarDetail"));

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<CarDetail />} path="/detalhes" />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default AppRoutes;
