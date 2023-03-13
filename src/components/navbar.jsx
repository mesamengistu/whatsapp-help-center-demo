import React from "react";
import { useLayoutEffect, useState } from "react";
import { FaWhatsapp, FaBars } from "react-icons/fa";
import { BsSearch } from "react-icons/bs";
import "../css/navbar.css";
const Navbar = ({ handleClick }) => {
  return (
    <div className=" row nav-parent">
      <ul className="list-group list-group-horizontal row justify-content-between">
        <li className="order-first col-4 col-sm-3 ms-3 list-group d-inline">
          <FaWhatsapp className="whatsapp-icon" /> Help Center
        </li>
        <li className=" offset-5 col-1 g-0  col-sm-1 list-group text-end menu rounded-circle text-center nav-icons ">
          <BsSearch className="FaBars-menu" />
        </li>
        <li
          onClick={handleClick}
          className="order-last col-1 g-0  col-sm-1 list-group text-end menu rounded-circle text-center nav-icons"
        >
          <FaBars className="FaBars-menu " />
        </li>
        <li className="order-last col-3 g-0  col-sm-2 list-group text-end select-language">
          English (US)
        </li>
      </ul>
    </div>
  );
};
export default Navbar;
