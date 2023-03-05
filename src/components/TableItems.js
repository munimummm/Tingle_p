import { MoreVert, PlayArrow } from "@mui/icons-material";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Checkbox,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { AudioActions } from "store/AudioSlice";
import { setDetailList } from "store/DetailSlice";
import PlayButton from "./PlayButton";
function TableItems({ list }) {
  const navigate = useNavigate();
  let dispatch = useDispatch();

  console.log(list);
  return (
    <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
      <TableCell>
        <img
          style={{ width: "50px", height: "50px" }}
          src={process.env.PUBLIC_URL + `/img/${list.cover_img}`}
        ></img>
      </TableCell>
      <TableCell component="th" scope="row" sx={{ whiteSpace: "preLine" }}>
        <strong
          style={{ cursor: "pointer" }}
          onClick={() => {
            navigate(`/detail/title/${list.title}`);
            dispatch(setDetailList(list));
          }}
        >
          {list.title}
        </strong>
        <br />
        <span
          style={{ cursor: "pointer", fontSize: "12px", color: "#989898" }}
          onClick={() => {
            navigate(`/detail/album/${list.album}`);
            dispatch(setDetailList(list));
          }}
        >
          {list.album}
        </span>
      </TableCell>

      <TableCell align="right">
        <span
          style={{ cursor: "pointer" }}
          onClick={() => {
            navigate(`/detail/artist/${list.artist_no}`);
            dispatch(setDetailList(list));
          }}
        >
          {" "}
          {list.artist}
        </span>
      </TableCell>

      <TableCell align="right">
        <PlayButton
          list={list}
          onPlay={() => {
            dispatch(
              AudioActions.setSong({
                songs: list,
              })
            );
          }}
        />
      </TableCell>
      <TableCell align="right">
        <MoreVert />
      </TableCell>
    </TableRow>
  );
}
export default TableItems;
