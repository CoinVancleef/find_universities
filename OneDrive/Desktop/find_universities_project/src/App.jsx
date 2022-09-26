import React from "react";
import { Route, Routes } from "react-router-dom";

import Header from "./components/Header";
import Countries from "./pages/Countries";
import Favorited from "./pages/Favorited";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route exact path="/" element={<Countries />} />
        <Route path="/favorited" element={<Favorited />} />
      </Routes>
    </div>
  );
}

export default App;
