import { TableBody, TableCell, TableRow, Paper, Checkbox } from "@mui/material";
import { ImageAspectRatio, MoreVert, PlayArrow } from "@mui/icons-material";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import PlayButton from "./PlayButton";

import { setPlayerPlaying, setSong } from "store/AudioSlice";
import { setPlayLists } from "store/PlayListSlice";
import { setChartLists } from "store/ListSlice";
function ChartList() {
  const navigate = useNavigate();
  let chartLists = useSelector((state) => state.list.list);
  let dispatch = useDispatch();

  // "<c:url value="/mp3/"/>" + s_LibraryData[i].file_path)
  // <img src={process.env.PUBLIC_URL + "/img/Adele.jpg"} />

  return (
    <TableBody>
      {chartLists.map((list, i) => (
        <TableRow
          key={list.title}
          sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
        >
          <TableCell padding="checkbox">
            <Checkbox color="primary" />
          </TableCell>
          <TableCell align="center">{i + 1}</TableCell>
          <TableCell align="left">
            <img
              style={{ width: "50px", height: "50px" }}
              src={process.env.PUBLIC_URL + `/img/${list.cover_img}`}
            ></img>
          </TableCell>
          <TableCell
            component="th"
            scope="row"
            onClick={() => {
              navigate(`/detail/title/${list._id}`, {
                state: {
                  list: list,
                },
              });
            }}
          >
            <strong> {list.title}</strong>
            <br />
            {list.album}
          </TableCell>
          <TableCell
            align="right"
            onClick={() => {
              navigate(`/detail/artist/${list._id}`, {
                state: {
                  list: list,
                },
              });
            }}
          >
            {list.artist}
          </TableCell>
          <TableCell align="right">
            {" "}
            <PlayButton
              list={list}
              onPlay={() => {
                dispatch(
                  setSong({
                    src: process.env.PUBLIC_URL + list.file_path,
                    albumImage: process.env.PUBLIC_URL + list.cover_img,
                    title: list.title,
                    artist: list.artist,
                  })
                );
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
