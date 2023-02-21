import { MoreVert, PlayArrow } from "@mui/icons-material";
import axios from "axios";
import { useEffect, useState } from "react";
import { NavLink, Outlet } from "react-router-dom";

function Detail() {
  // const [type, setType] = useState("")
  // useEffect(() => {
  //   axios
  //     .get(`http://localhost:1216/detail/`, {
  //       params: {
  //         genre: genre,
  //       },
  //     })

  //     .then((result) => {
  //       console.log(result.data);
  //       dispatch(setChartLists(result.data));

  //       // setChartLists(result.data);
  //     })
  //     .catch(() => {
  //       console.log("실패함");
  //     });
  // }, [genre]);
  return (
    <div className="detailContainer">
      <Outlet></Outlet>
    </div>
  );
}
export default Detail;
