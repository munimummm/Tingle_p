import { MoreVert, PlayArrow } from "@mui/icons-material";
import { NavLink, Outlet } from "react-router-dom";

function Detail() {
  return (
    <div className="detailContainer">
      <Outlet></Outlet>
    </div>
  );
}
export default Detail;
