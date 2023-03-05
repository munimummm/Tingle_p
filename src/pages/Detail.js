import { MoreVert, PlayArrow } from "@mui/icons-material";
import axios from "axios";
import { useEffect, useState } from "react";
import { NavLink, Outlet } from "react-router-dom";

function Detail() {
  return (
    <div className="detailContainer">
      <Outlet></Outlet>
    </div>
  );
}
export default Detail;
