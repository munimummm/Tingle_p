import React from "react";
import { MoreVert } from "@mui/icons-material";
import { TableCell, TableRow } from "@mui/material";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { AudioActions } from "../store/AudioSlice";
import { setDetailList } from "../store/DetailSlice";
import PlayButton from "./PlayButton";
import { ListType } from "../types";
const TableItems: React.FC<ListType> = ({ list }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
      <TableCell>
        <img
          style={{ width: "50px", height: "50px" }}
          src={`/img/${list.cover_img}`}
          alt="album_img"
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
};
export default TableItems;
