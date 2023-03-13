import React, { Component } from "react";
import "../css/body.css";
import whatsappDesktop from "../images/whatsappDesktop.png";
import whatsappMobile from "../images/whatsappMobile.jpg";
const Body = () => {
  return (
    <div className="row mb-5">
      <div className="col-lg-6 offset-lg-1 g-0">
        <div className="list-group mt-4  popular-articles">
          <h3> Popular Articles</h3>
          <a href="#" className="list-group-item border-0 g-0">
            How to make a video call
          </a>
          <a href="" className="list-group-item border-0">
            How to stay safe on WhatsApp
          </a>
          <a href="#" className="list-group-item border-0">
            About Temporarily Banned Accounts
          </a>
          <a href="#" className="list-group-item border-0">
            About two-step verification
          </a>
          <a href="#" className="list-group-item border-0">
            How to restore your chat history
          </a>

          <a href="#" className="list-group-item border-0">
            Received verification code without requesting it
          </a>
        </div>
      </div>
      <div className="col-5 mt-lg-5 ">
        {" "}
        <img
          src={whatsappMobile}
          className=" img-fluid col-lg-6"
          style={{ maxHeight: "" }}
        />
        <img
          src={whatsappDesktop}
          className=" img-fluid col-lg-6"
          style={{ maxHeight: "200px" }}
        />
      </div>
    </div>
  );
};
export default Body;
