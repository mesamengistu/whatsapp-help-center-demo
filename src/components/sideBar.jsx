import React, { useState } from "react";
import { sideBarData } from "./data.js";
import { MdOutlineKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import "../css/sideBar.css";
import { Link } from "react-router-dom";
const SideBar = () => {
  const [barData, setBarData] = useState(sideBarData);
  const menuOne = barData[0];
  const menuOneIds = menuOne.childIds;
  const handleExpand = (e, menuId, parentIds) => {
    e.stopPropagation();

    const nextBarData = { ...barData };
    const i = nextBarData[menuId].childIds;
    const sibilings = nextBarData[parentIds].childIds;
    const parent = nextBarData[menuId].isChildVisible;
    if (!parent) {
      i.forEach((element) => {
        nextBarData[element].isChildVisible = false;
      });
      sibilings.forEach((element) => {
        nextBarData[element].isChildVisible = false;
      });
    }
    nextBarData[menuId].isChildVisible = !parent;
    //console.log(nextBarData);
    console.log(parentIds);
    setBarData(nextBarData);
  };
  return (
    <div className="row">
      {menuOneIds.map((value) => {
        return (
          <DisplayMenu
            handleExpand={(e, menuId, parentIds) =>
              handleExpand(e, menuId, parentIds)
            }
            menuId={value}
            menu={barData}
            key={value}
            parentIds={0}
          />
        );
      })}
    </div>
  );
};
export default SideBar;
export const DisplayMenu = ({ menuId, menu, handleExpand, parentIds }) => {
  // console.log(parentIds)
  const displayValue = menu[menuId];
  const nextId = displayValue.childIds;
  return (
    <ul className="col-12 g-0 m-0 ">
      <li className="menu-elements list-group-item border-0  d-flex align-items-center">
        {/* To Display the Content Icon in the left */}
        {displayValue.iconName !== "" && (
          <label className="pe-2">{displayValue.iconName}</label>
        )}
        {/* To Display the Content in the center*/}
        <Link
          to={displayValue.url}
          className="col-9"
          style={{ color: "black" }}
        >
          <label className="col-12">{displayValue.title}</label>
        </Link>
        {/* To Display The arrow down Icon at the end */}
        {nextId.length > 0 && (
          <label
            className="cursor-down-parent col-2"
            id={menuId}
            onClick={(e) => handleExpand(e, menuId, parentIds)}
          >
            <MdOutlineKeyboardArrowDown className="cursor-down text-end" />
          </label>
        )}
      </li>
      {/* To Display the next Child */}
      {nextId.length > 0 &&
        displayValue.isChildVisible && //need to change controller here
        nextId.map((value) => {
          {
            return (
              <DisplayMenu
                menuId={value}
                menu={menu}
                key={value}
                parentIds={menuId}
                handleExpand={(e) => handleExpand(e, value, menuId)}
              />
            );
          }
        })}
    </ul>
  );
};
