import { Outlet } from "react-router-dom";

function Detail() {
  return (
    <div className="detailContainer">
      <Outlet></Outlet>
    </div>
  );
}
export default Detail;
