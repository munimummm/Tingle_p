import styled from "styled-components";
import { MoreVert, PlayArrow, ArrowForwardIos } from "@mui/icons-material";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import SearchTitle from "components/SearchTitle";
import SearchArtist from "components/SearchArtist";
import { useDispatch, useSelector } from "react-redux";

import axios from "axios";
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
import {
  setAlbumOpen,
  setALbumSearchList,
  setArtistOpen,
  setArtistSearchList,
  setLimit,
  setSearchList,
  setTitleOpen,
  setTitleSearchList,
} from "store/SearchSlice";
import SearchAlbum from "components/SearchAlbum";

const FindContainer = styled.div`
  .find_h1 {
    margin-top: 38px;
    margin-bottom: 42px;
  }
  .findResult_h1 {
    cursor: pointer;
    margin-top: 70px;
    margin-bottom: 28px;
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

function Search() {
  const location = useLocation();
  let dispatch = useDispatch();
  const searchValue = location.state.value;
  let type = useSelector((state) => state.search.type);
  let titleOpen = useSelector((state) => state.search.titleOpen);
  let artistOpen = useSelector((state) => state.search.artistOpen);
  let albumOpen = useSelector((state) => state.search.albumOpen);
  let limit = useSelector((state) => state.search.limit);
  useEffect(() => {
    dispatch(setLimit(5));
    dispatch(setAlbumOpen(false));
    dispatch(setArtistOpen(false));
    dispatch(setTitleOpen(false));
  }, [searchValue]);
  // const moreList = () => {
  //   dispatch(setLimit(10));
  // };리덕스
  // useEffect(() => {

  //     const getSeachResult = async () => {
  //       const result = await axios.get(
  //         `http://localhost:1216/searchList/title`,
  //         {
  //           params: {
  //             value: searchValue,
  //           },
  //         }
  //       );
  //       // dispatch(setSearchList(result.data));

  //         dispatch(setTitleSearchList(result.data));

  //         dispatch(setArtistSearchList(result.data));

  //         dispatch(setALbumSearchList(result.data));

  //     };
  //     // getSeachResult1();
  //     // getSeachResult2();
  //     // getSeachResult3();
  //   }, [searchValue]);
  //   // useEffect(() => {
  //   //   const getSeachResult = async () => {
  //   //     const result = await axios.get(
  //   //       `http://localhost:1216/searchList/${type}`,
  //   //       {
  //   //         params: {
  //   //           value: searchValue,
  //   //         },
  //   //       }
  //   //     );
  //   //     // dispatch(setSearchList(result.data));
  //   //     if (type === "title") {
  //   //       dispatch(setTitleSearchList(result.data));
  //   //     } else if (type === "artist") {
  //   //       dispatch(setArtistSearchList(result.data));
  //   //     } else if (type === "album") {
  //   //       dispatch(setALbumSearchList(result.data));
  //   //     }
  //   //   };
  //   //   getSeachResult();
  // }, [searchValue]);
  // console.log(searchValue);
  // console.log(type);
  console.log(titleOpen);

  return (
    <FindContainer>
      <h1 className="find_h1">'{searchValue}' 검색결과</h1>

      {/* <SearchArtist searchValue={searchValue} />
      <SearchAlbum searchValue={searchValue} /> */}
      {titleOpen === false && artistOpen === false && albumOpen === false ? (
        <>
          <SearchTitle searchValue={searchValue} />
          <SearchArtist searchValue={searchValue} />
          <SearchAlbum searchValue={searchValue} />
        </>
      ) : null}
      {titleOpen === true ? <SearchTitle searchValue={searchValue} /> : null}
      {artistOpen === true ? <SearchArtist searchValue={searchValue} /> : null}
      {albumOpen === true ? <SearchAlbum searchValue={searchValue} /> : null}
    </FindContainer>
  );
}
export default Search;

{
  /* <div className="findLyrics_Container">
        <h2 className="findResult_h1">
          가사
          <ArrowForwardIos />
        </h2>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
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
            <ChartList genre={genre}></ChartList>
          </Table>
        </TableContainer>
      </div> */
}
