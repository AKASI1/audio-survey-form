import React from "react";
import { Route, Routes } from "react-router";
import Main from "./Components/Main";
import Report from "./Components/Report";
import AudiosContext from "./Storage";

const App = () => {
  return (
    <AudiosContext>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/report" element={<Report />} />
      </Routes>
    </AudiosContext>
  );
};

export default App;
