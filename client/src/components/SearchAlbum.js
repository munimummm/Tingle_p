import { useState, useEffect } from "react";
import { ArrowForwardIos } from "@mui/icons-material";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { setAlbumOpen, setLimit } from "store/SearchSlice";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { setDetailList } from "store/DetailSlice";
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

const FindList = styled.li`
  display: inline-block;
  margin-right: 30px;
  text-align: center;

  .imgBox {
    width: 240px;
    height: 240px;
    overflow: hidden;
    border-radius: 4%;
    border: 1px solid rgba(0, 0, 0, 0.1);
  }
  .imgItem {
    width: 100%;
    height: 100%;
  }

  .textItem {
    width: 230px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

function SearchAlbum({ searchValue }) {
  let limit = useSelector((state) => state.search.limit);
  let dispatch = useDispatch();
  const [searchList, setSearchList] = useState([]);
  useEffect(() => {
    const getSearchResult = async () => {
      try {
        const result = await axios.get(
          `http://localhost:8080/searchList/album`,
          {
            params: {
              value: searchValue,
            },
          }
        );
        console.log(result.data);
        setSearchList(result.data);
      } catch (error) {
        console.log(error);
      }
    };
    getSearchResult();
  }, [searchValue]);
  return (
    <>
      {0 < searchList.length ? (
        <AContainer>
          <h2
            className="findResult_h1"
            onClick={() => {
              dispatch(setLimit(searchList.length));
              dispatch(setAlbumOpen(true));
            }}
          >
            앨범
            <ArrowForwardIos className="arrowIcon" />
          </h2>

          <FindListContainer>
            {searchList.map((list, i) =>
              i < limit ? (
                <FindList key={i}>
                  <div>
                    <NavLink
                      to={`/detail/album/${list.album}`}
                      onClick={() => {
                        dispatch(setDetailList(list));
                      }}
                    >
                      <div className="imgBox">
                        <img
                          className="imgItem"
                          src={`/img/${list.cover_img}`}
                          alt="album_img"
                        ></img>
                      </div>
                      <div className="textItem">{list.album}</div>
                    </NavLink>
                  </div>
                </FindList>
              ) : null
            )}
          </FindListContainer>
        </AContainer>
      ) : null}
    </>
  );
}
export default SearchAlbum;
