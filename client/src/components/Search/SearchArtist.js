import { ArrowForwardIos } from "@mui/icons-material";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { setArtistOpen } from "store/SearchSlice";
import { useDispatch } from "react-redux";
import { setDetailList } from "store/DetailSlice";

import useSearchResult from "hooks/useSearchResult";

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
const AContainer = styled.div`
  .findResult_h1 {
    cursor: pointer;
    margin-top: 70px;
    margin-bottom: 28px;
    &:hover {
      color: ${(props) => props.theme.mainColor};
    }
    .arrowIcon {
      font-size: 1.2rem;
      margin-left: 4px;
    }
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
  const dispatch = useDispatch();
  const { searchList, limit, addList, noResult } = useSearchResult(
    "artist",
    searchValue
  );

  return (
    <>
      {!noResult && (
        <AContainer>
          <h2
            className="findResult_h1"
            onClick={() => {
              addList(setArtistOpen);
            }}
          >
            가수
            <ArrowForwardIos className="arrowIcon" />
          </h2>

          <FindListContainer>
            {searchList.map((list, i) =>
              i < limit ? (
                <FindList key={list._id}>
                  <div>
                    <NavLink
                      to={`/detail/artist/${list.artist_no}`}
                      onClick={() => {
                        dispatch(setDetailList(list));
                      }}
                    >
                      <div className="imgBox">
                        <img
                          className="itemImg"
                          src={`/img/${list.artist_img}`}
                          alt="artist_img"
                        ></img>
                      </div>
                      <div className="textItem">{list.artist}</div>
                    </NavLink>
                  </div>
                </FindList>
              ) : null
            )}
          </FindListContainer>
        </AContainer>
      )}
    </>
  );
}
export default SearchArtist;
