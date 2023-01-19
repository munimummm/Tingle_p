import { TableBody, TableCell, TableRow, Paper, Checkbox } from "@mui/material";
import { ImageAspectRatio, MoreVert, PlayArrow } from "@mui/icons-material";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { setChartLists } from "store/ListSlice";
import PlayButton from "./PlayButton";

import { setUrl } from "store/AudioSlice";
function ChartList({ genre }) {
  const navigate = useNavigate();
  // const [chartLists, setChartLists] = useState([]);
  let chartLists = useSelector((state) => state.list.list);
  let dispatch = useDispatch();

  console.log("클릭" + genre);

  useEffect(() => {
    axios
      .get(`http://localhost:1216/chartList`, {
        params: {
          genre: genre,
        },
      })

      .then((result) => {
        console.log(result.data);
        dispatch(setChartLists(result.data));

        // setChartLists(result.data);
      })
      .catch(() => {
        console.log("실패함");
      });
  }, [genre]);
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
              src={"img/" + list.cover_img + ""}
            ></img>
          </TableCell>
          <TableCell
            component="th"
            scope="row"
            onClick={() => {
              navigate("/detail/title", {
                state: {
                  title: list.title,
                  album: list.album,
                  artist: list.artist,
                  lyrics: list.lyrics,
                  src: `mp3/${list.file_path}`,
                  albumImage: `img/${list.cover_img}`,
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
              navigate("/detail/artist", {
                state: {
                  title: list.title,
                  album: list.album,
                  artist: list.artist,
                  lyrics: list.lyrics,
                },
              });
            }}
          >
            {list.artist}
          </TableCell>
          <TableCell align="right">
            {" "}
            <PlayButton
              onPlay={() => {
                dispatch(
                  setUrl({
                    src: `mp3/${list.file_path}`,
                    albumImage: `img/${list.cover_img}`,
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
