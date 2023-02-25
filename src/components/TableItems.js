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
import { useNavigate } from "react-router-dom";
import { AudioActions } from "store/AudioSlice";
import { setDetailList } from "store/DetailSlice";
import PlayButton from "./PlayButton";
function TableItems({ list }) {
  const navigate = useNavigate();
  let dispatch = useDispatch();

  console.log(list);
  return (
    <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
      <TableCell padding="checkbox">
        <Checkbox color="primary" />
      </TableCell>
      <TableCell>
        <img
          style={{ width: "50px", height: "50px" }}
          src={process.env.PUBLIC_URL + `/img/${list.cover_img}`}
        ></img>
      </TableCell>
      <TableCell component="th" scope="row" sx={{ whiteSpace: "preLine" }}>
        <strong
          onClick={() => {
            navigate(`/detail/title/${list._id}`);
            dispatch(setDetailList(list));
          }}
        >
          {list.title}
        </strong>
        <br />
        <span
          style={{ fontSize: "12px", color: "#989898" }}
          onClick={() => {
            navigate(`/detail/album/${list._id}`);
            dispatch(setDetailList(list));
          }}
        >
          {list.album}
        </span>
      </TableCell>

      <TableCell
        align="right"
        onClick={() => {
          navigate(`/detail/artist/${list._id}`);
          dispatch(setDetailList(list));
        }}
      >
        {list.artist}
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
