import { TableBody, TableCell, TableRow, Paper, Checkbox } from "@mui/material";
import { useState, useEffect } from "react";
import { MoreVert, PlayArrow } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { searchDataChange } from "store/SearchSlice";

function SearchTitle({ searchData }) {
  const navigate = useNavigate();
  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(searchDataChange("title"));
  }, []);

  return (
    <TableBody>
      {searchData.map((list, i) => (
        <TableRow
          key={i}
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
export default SearchTitle;
