import { TableBody, TableCell, TableRow, Paper, Checkbox } from "@mui/material";
import { useState, useEffect } from "react";
import { MoreVert, PlayArrow } from "@mui/icons-material";
import { NavLink, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { searchDataChange } from "store/SearchSlice";
import { useDispatch } from "react-redux";

const FindList = styled.li`
  display: inline-block;
  margin-right: 30px;
  text-align: center;
`;

function SearchArtist({ searchData }) {
  const navigate = useNavigate();
  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(searchDataChange("artist"));
  }, []);
  return (
    <>
      {searchData.map((list, i) => (
        <FindList key={i}>
          <div>
            <div>
              <NavLink>
                <img src={"img/" + list.cover_img + ""}></img>
              </NavLink>
            </div>
            <NavLink className="aa detail_ar" href="#">
              {list.artist}
            </NavLink>
          </div>
        </FindList>
      ))}
    </>
  );
}
export default SearchArtist;
