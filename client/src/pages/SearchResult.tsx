import styled from "styled-components";
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  setAlbumOpen,
  setArtistOpen,
  setLimit,
  setTitleOpen,
} from "store/SearchSlice";
import SearchAlbum from "components/Search/SearchAlbum";
import SearchTitle from "components/Search/SearchTitle";
import SearchArtist from "components/Search/SearchArtist";
import NoResult from "components/Search/NoResult";
import useSearchResult from "hooks/useSearchResult";

const FindContainer = styled.div`
  .find_h1 {
    margin-top: 38px;
    margin-bottom: 42px;
  }
`;

function SearchResult() {
  const location = useLocation();
  const dispatch = useDispatch();
  const searchValue = location.state.value;
  const titleOpen = useSelector((state) => state.search.titleOpen);
  const artistOpen = useSelector((state) => state.search.artistOpen);
  const albumOpen = useSelector((state) => state.search.albumOpen);
  const { noResult: titleNoResult } = useSearchResult("title", searchValue);
  const { noResult: artistNoResult } = useSearchResult("artist", searchValue);
  const { noResult: albumNoResult } = useSearchResult("album", searchValue);
  const allNoResult = titleNoResult && artistNoResult && albumNoResult;

  useEffect(() => {
    dispatch(setLimit(5));
    dispatch(setAlbumOpen(false));
    dispatch(setArtistOpen(false));
    dispatch(setTitleOpen(false));
  }, [dispatch, searchValue]);

  return (
    <FindContainer>
      <h1 className="find_h1">'{searchValue}' 검색결과</h1>
      {allNoResult && <NoResult />}
      {!allNoResult && !titleOpen && !artistOpen && !albumOpen && (
        <>
          <SearchTitle searchValue={searchValue} />
          <SearchArtist searchValue={searchValue} />
          <SearchAlbum searchValue={searchValue} />
        </>
      )}
      {titleOpen && <SearchTitle searchValue={searchValue} />}
      {artistOpen && <SearchArtist searchValue={searchValue} />}
      {albumOpen && <SearchAlbum searchValue={searchValue} />}
    </FindContainer>
  );
}

export default SearchResult;
