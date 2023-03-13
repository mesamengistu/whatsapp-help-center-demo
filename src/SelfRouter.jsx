import React from "react";
import { Route, Routes } from "react-router-dom";
import SearchBody from "./components/SearchBody";
import LoinOut from "./components/How/LoginOut";
const SelfRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/">
          <Route index element={<SearchBody />}></Route>
          <Route path="/how-tologin-info" element={<LoinOut />}></Route>
        </Route>
      </Routes>
    </>
  );
};

export default SelfRouter;
