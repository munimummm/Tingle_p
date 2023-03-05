import { TableBody, TableCell, TableRow, Paper, Checkbox } from "@mui/material";
import { ImageAspectRatio, MoreVert, PlayArrow } from "@mui/icons-material";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import PlayButton from "./PlayButton";
import { AudioActions } from "store/AudioSlice";

import { setPlayLists } from "store/PlayListSlice";
import { setChartLists } from "store/ListSlice";
import { setDetailList } from "store/DetailSlice";
function ChartList() {
  const navigate = useNavigate();
  let chartLists = useSelector((state) => state.list.list);
  let dispatch = useDispatch();
  return (
    <TableBody>
      {chartLists.map((list, i) => (
        <TableRow
          key={i}
          sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
        >
          <TableCell align="center">{i + 1}</TableCell>
          <TableCell align="left">
            <img
              style={{ width: "50px", height: "50px" }}
              src={process.env.PUBLIC_URL + `/img/${list.cover_img}`}
            ></img>
          </TableCell>
          <TableCell component="th" scope="row">
            <strong
              style={{ cursor: "pointer" }}
              onClick={() => {
                dispatch(setDetailList(list));
                navigate(`/detail/title/${list.title}`, {
                  state: {
                    list: list,
                  },
                });
              }}
            >
              {" "}
              {list.title}
            </strong>
            <br />
            <span
              style={{ cursor: "pointer", fontSize: "12px", color: "#989898" }}
              onClick={() => {
                dispatch(setDetailList(list));
                navigate(`/detail/album/${list.album}`, {
                  state: {
                    list: list,
                  },
                });
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
            {" "}
            <PlayButton
              list={list}
              onPlay={() => {
                dispatch(AudioActions.setSong(list));
              }}
            />
          </TableCell>
          <TableCell align="right">
            <MoreVert />
          </TableCell>
        </TableRow>
      ))}
    </TableBody>
  );
}
export default ChartList;
