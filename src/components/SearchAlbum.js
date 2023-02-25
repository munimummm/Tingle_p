import { TableBody, TableCell, TableRow, Paper, Checkbox } from "@mui/material";
import { useState, useEffect } from "react";
import { ArrowForwardIos, MoreVert, PlayArrow } from "@mui/icons-material";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import {
  searchTypeChange,
  setAlbumOpen,
  setALbumSearchList,
  setLimit,
  setSearchList,
} from "store/SearchSlice";
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
  const navigate = useNavigate();
  let searchAlbumList = useSelector((state) => state.search.searchAlbumList);
  let limit = useSelector((state) => state.search.limit);
  let dispatch = useDispatch();
  const location = useLocation();

  let type = useSelector((state) => state.search.type);
  const [searchList, setSearchList] = useState([]);
  useEffect(() => {
    const getSearchResult = async () => {
      const result = await axios.get(`http://localhost:1216/searchList/album`, {
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
                  to={`/detail/album/${list._id}`}
                  onClick={() => {
                    dispatch(setDetailList(list));
                  }}
                >
                  <div className="imgBox">
                    <img
                      className="imgItem"
                      src={process.env.PUBLIC_URL + `/img/${list.cover_img}`}
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
  );
}
export default SearchAlbum;
