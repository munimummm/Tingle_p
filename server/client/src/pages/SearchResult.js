import styled from "styled-components";
import { useEffect } from "react";
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
  }, [dispatch, searchValue]);

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
