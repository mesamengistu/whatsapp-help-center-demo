import React, { useRef, useState } from "react";
import "./App.css";
import Navbar from "./components/navbar";
import SideBar from "./components/sideBar";
import Search from "./components/search";
import Body from "./components/body";
import Footer from "./components/footer";
import { Routes, Route } from "react-router-dom";
import SelfRouter from "./SelfRouter";
function App() {
  const [toggleBar, setToggleBar] = useState(false);
  let sidbarClass = useRef("search-content");

  const toggleSidebar = () => {
    sidbarClass.current = toggleBar ? " search-content control-expand " : "";
    // console.log("Inside Toggle ", sidbarClass);
    setToggleBar(!toggleBar);
  };
  console.log("Inside Toggle ", sidbarClass.current);
  return (
    <div className="container-fluid">
      <div className="">
        <Navbar handleClick={toggleSidebar} />
      </div>
      <div className="row">
        <div
          className={
            "col-12 col-lg-4 col-md-5  col-sm-12 main-sid-bar-shadow  " +
            sidbarClass.current
          }
        >
          <SideBar />
        </div>
        <div className=" col-lg-8">
          <Routes>
            <Route
              path="whatsapp-help-center-demo/*"
              element={<SelfRouter />}
            ></Route>
          </Routes>
          <div className="row mt-lg-5 pt-lg-5">
            <Footer />
          </div>
        </div>

        {/* <div className="row">
          <div className="col-12 col-lg-12 order-lg-1 offset-lg-1">
            <Search />
          </div>
          <div className="col-lg-12 order-lg-3 ">vvv</div>
        </div> */}
      </div>
    </div>
  );
}
export default App;
