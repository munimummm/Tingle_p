import { Outlet } from "react-router-dom";
import React from "react";

function Detail() {
  return (
    <div className="detailContainer">
      <Outlet></Outlet>
    </div>
  );
}
export default Detail;
