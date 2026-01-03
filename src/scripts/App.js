import React, { useEffect } from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";

import { MainHeader } from "./main-header/main-header.jsx";
import { MainFooter } from "./main-footer/main-footer.jsx"
import { HomePage } from "./pages/home-page.jsx";
import { MyCampsPage } from "./pages/my-camps-page.jsx";
import { CampPage } from "./pages/camp-page.jsx"

function App() {
  useEffect(() => { });

  return (
    <Router>
      <MainHeader />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/my-camps" element={<MyCampsPage />} />
        <Route path="/c/:campId" element={<CampPage />} />
      </Routes>

      <MainFooter />
    </Router>
  );
}

export default App;
