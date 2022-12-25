import { TableBody, TableCell, TableRow, Paper, Checkbox } from "@mui/material";
import { MoreVert, PlayArrow } from "@mui/icons-material";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function ChartList({ genre }) {
  const navigate = useNavigate();
  const [chartLists, setChartLists] = useState([]);
  console.log("클릭" + genre);

  useEffect(() => {
    axios
      .get("http://localhost:1216/chartList", {
        params: {
          genre: genre,
        },
      })

      .then((result) => {
        console.log(result.data);
        setChartLists(result.data);
      })
      .catch(() => {
        console.log("실패함");
      });
  }, [genre]);

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
          <TableCell>{i + 1}</TableCell>
          <TableCell>
            <img src={"img/" + list.cover_img + ""}></img>
          </TableCell>
          <TableCell
            component="th"
            scope="row"
            sx={{ whiteSpace: "preLine" }}
            onClick={() => {
              navigate("/detail/title", {
                state: {
                  title: list.title,
                  album: list.album,
                  artist: list.artist,
                  lyrics: list.lyrics,
                },
              });
            }}
          >
            {list.title}\n{list.album}
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
            <PlayArrow />
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
