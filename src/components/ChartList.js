import { TableBody, TableCell, TableRow, Paper, Checkbox } from "@mui/material";
import { ImageAspectRatio, MoreVert, PlayArrow } from "@mui/icons-material";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import PlayButton from "./PlayButton";
import { AudioActions } from "store/AudioSlice";
import { setAddPlayList, setPlayerPlaying, setSong } from "store/AudioSlice";
import { setPlayLists } from "store/PlayListSlice";
import { setChartLists } from "store/ListSlice";
function ChartList() {
  const navigate = useNavigate();
  let chartLists = useSelector((state) => state.list.list);
  let dispatch = useDispatch();
  let listSongs = useSelector((state) => state.audio.listSongs);

  // "<c:url value="/mp3/"/>" + s_LibraryData[i].file_path)
  // <img src={process.env.PUBLIC_URL + "/img/Adele.jpg"} />

  return (
    <TableBody>
      {chartLists.map((list, i) => (
        <TableRow
          key={i}
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
                  AudioActions.setSongs({
                    title: list.title,
                    artist: list.artist,
                    cover_img: list.cover_img,
                    file_path: list.file_path,
                  })
                  //  ({
                  //   title: list.title,
                  //   artist: list.artist,
                  //   file_path: list.file_path,
                  //   cover_img: list.cover_img,
                  //   songs: list,
                  // })
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
