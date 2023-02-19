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
import { MoreVert, PlayArrow, ArrowForwardIos } from "@mui/icons-material";
import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  searchTypeChange,
  setLimit,
  setSearchList,
  setTitleOpen,
  setTitleSearchList,
} from "store/SearchSlice";
import axios from "axios";
import styled from "styled-components";

const TitleContainer = styled.div`
  .findResult_h1 {
    cursor: pointer;
    margin-top: 70px;
    margin-bottom: 28px;
    &:hover {
      color: ${(props) => props.theme.mainColor};
    }
  }
`;
function SearchTitle({ searchValue }) {
  const navigate = useNavigate();
  const location = useLocation();
  let dispatch = useDispatch();
  // let searchTitleList = useSelector((state) => state.search.searchTitleList);
  let limit = useSelector((state) => state.search.limit);
  let type = useSelector((state) => state.search.type);
  const [searchList, setSearchList] = useState([]);
  let titleOpen = useSelector((state) => state.search.type);
  useEffect(() => {
    const getSearchResult = async () => {
      const result = await axios.get(`http://localhost:1216/searchList/title`, {
        params: {
          value: searchValue,
        },
      });
      // dispatch(setSearchList(result.data));
      setSearchList(result.data);
    };
    getSearchResult();
  }, [searchValue]);

  console.log(searchList);
  console.log(searchValue);
  return (
    <TitleContainer>
      <h2
        className="findResult_h1"
        onClick={() => {
          dispatch(setLimit(10));
          dispatch(setTitleOpen(true));
        }}
      >
        곡
        <ArrowForwardIos />
      </h2>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="chart table">
          <TableHead>
            <TableRow>
              <TableCell padding="checkbox">
                <Checkbox
                  color="primary"
                  inputProps={{
                    "aria-label": "select all ",
                  }}
                />
              </TableCell>
              <TableCell>순위</TableCell>
              <TableCell>곡/앨범</TableCell>
              <TableCell></TableCell>
              <TableCell align="right">아티스트</TableCell>
              <TableCell align="right">듣기</TableCell>
              <TableCell align="right">더보기</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {searchList.map((list, i) =>
              i < limit ? (
                <TableRow
                  key={i}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell padding="checkbox">
                    <Checkbox color="primary" />
                  </TableCell>
                  <TableCell>{i + 1}</TableCell>
                  <TableCell>
                    <img
                      style={{ width: "50px", height: "50px" }}
                      src={process.env.PUBLIC_URL + `/img/${list.cover_img}`}
                    ></img>
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
              ) : (
                ""
              )
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </TitleContainer>
  );
}
export default SearchTitle;
