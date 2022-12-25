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
import { MoreVert, PlayArrow } from "@mui/icons-material";
import { useState, useEffect } from "react";
import axios from "axios";

function GenreClick({ genre }) {
  const [lists, setLists] = useState([]);
  console.log("클릭" + genre);

  useEffect(() => {
    axios
      .get("http://localhost:1216/charList", {
        params: {
          genre: genre,
        },
      })

      .then((result) => {
        console.log(result.data);
        setLists(result.data);
      })
      .catch(() => {
        console.log("실패함");
      });
  }, [genre]);

  return (
    <TableBody>
      {lists.map((list, i) => (
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
          <TableCell component="th" scope="row" sx={{ whiteSpace: "preLine" }}>
            {list.title}\n{list.album}
          </TableCell>
          <TableCell align="right">{list.artist}</TableCell>
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
export default GenreClick;
