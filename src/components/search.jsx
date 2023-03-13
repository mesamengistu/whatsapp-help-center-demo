import React, { useState } from "react";

import { BsSearch } from "react-icons/bs";
const Search = () => {
  return (
    <div className="row">
      <div className="col-12 g-0 mt-1">
        <input
          className="col-12 col-lg-10 border-2 border rounded"
          style={{ height: "55px" }}
          placeholder="Search help Articles"
        />
      </div>
    </div>
  );
};
export default Search;
