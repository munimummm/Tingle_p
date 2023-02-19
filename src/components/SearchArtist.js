import { TableBody, TableCell, TableRow, Paper, Checkbox } from "@mui/material";
import { useState, useEffect } from "react";
import { ArrowForwardIos, MoreVert, PlayArrow } from "@mui/icons-material";
import { NavLink, useNavigate } from "react-router-dom";
import styled from "styled-components";
import {
  searchTypeChange,
  setArtistOpen,
  setArtistSearchList,
  setLimit,
} from "store/SearchSlice";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

const FindList = styled.li`
  display: inline-block;
  margin-right: 30px;
  text-align: center;

  .imgBox {
    width: 240px;
    height: 240px;
    overflow: hidden;
    border-radius: 50%;
    border: 1px solid rgba(0, 0, 0, 0.1);
  }
  .itemImg {
    width: 100%;
    height: 100%;
  }
`;
const FindListContainer = styled.ul`
  list-style: none;
  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  padding-inline-start: 40px;
`;

function SearchArtist({ searchValue }) {
  const navigate = useNavigate();
  // let searchArtistList = useSelector((state) => state.search.searchArtistList);
  let dispatch = useDispatch();
  let type = useSelector((state) => state.search.type);
  const [searchList, setSearchList] = useState([]);
  useEffect(() => {
    const getSeachResult = async () => {
      const result = await axios.get(
        `http://localhost:1216/searchList/artist`,
        {
          params: {
            value: searchValue,
          },
        }
      );
      // dispatch(setSearchList(result.data));
      console.log(result.data);
      setSearchList(result.data);
    };
    getSeachResult();
  }, [searchValue]);

  console.log(searchList);
  console.log(searchValue);

  return (
    <div id="findArtist_Container">
      <h2 className="findResult_h1">
        가수
        <ArrowForwardIos
          onClick={() => {
            dispatch(setLimit(10));
            dispatch(setArtistOpen(true));
          }}
        />
      </h2>

      <FindListContainer>
        {searchList.map((list, i) => (
          <FindList key={i}>
            <div>
              <NavLink>
                <div className="imgBox">
                  <img
                    className="itemImg"
                    src={"img/" + list.artist_img + ""}
                  ></img>
                </div>
              </NavLink>

              <NavLink className="aa detail_ar" href="#">
                {list.artist}
              </NavLink>
            </div>
          </FindList>
        ))}
      </FindListContainer>
    </div>
  );
}
export default SearchArtist;
