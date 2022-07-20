import React, { Suspense } from "react";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Loading from "../components/Loading";

import MainScreen from "../pages/MainScreen";
import VideoScreen from "../pages/VideoScreen";

const AppRouter = () => {
  return (
    <>
      <Suspense fallback={<Loading />}></Suspense>
      <Router>
        <Routes>
          <Route path="/" element={<VideoScreen />} />
          <Route path="/main" element={<MainScreen />} />
          <Route path="*" element={<MainScreen />} />
        </Routes>
      </Router>
    </>
  );
};

export default AppRouter;
