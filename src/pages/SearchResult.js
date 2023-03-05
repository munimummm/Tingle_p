import styled from "styled-components";
import { MoreVert, PlayArrow, ArrowForwardIos } from "@mui/icons-material";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import SearchTitle from "components/SearchTitle";
import SearchArtist from "components/SearchArtist";
import { useDispatch, useSelector } from "react-redux";

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

function SearchResult() {
  const location = useLocation();
  let dispatch = useDispatch();
  const searchValue = location.state.value;
  let titleOpen = useSelector((state) => state.search.titleOpen);
  let artistOpen = useSelector((state) => state.search.artistOpen);
  let albumOpen = useSelector((state) => state.search.albumOpen);
  useEffect(() => {
    dispatch(setLimit(5));
    dispatch(setAlbumOpen(false));
    dispatch(setArtistOpen(false));
    dispatch(setTitleOpen(false));
  }, [searchValue]);

  console.log(titleOpen);

  return (
    <FindContainer>
      <h1 className="find_h1">'{searchValue}' 검색결과</h1>
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
export default SearchResult;
