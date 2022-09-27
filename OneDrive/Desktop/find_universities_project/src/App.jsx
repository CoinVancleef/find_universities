import React from "react";
import { Route, Routes } from "react-router-dom";

import Header from "./components/Header";
import Countries from "./pages/Main";
import Favorited from "./pages/Favorited";
import Universities from "./pages/Universities";
import "./App.css";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route exact path="/" element={<Countries />} />
        <Route path="/favorited" element={<Favorited />} />
        <Route path="/countries/:countryName" element={<Universities />} />
      </Routes>
    </div>
  );
}

export default App;
