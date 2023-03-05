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
  setLimit,
  setSearchList,
  setTitleOpen,
  setTitleSearchList,
} from "store/SearchSlice";
import axios from "axios";
import styled from "styled-components";
import TableHeader from "./TableHeader";
import TableItems from "./TableItems";

const TitleContainer = styled.div`
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
    if (searchValue.length > 0) {
      const getSearchResult = async () => {
        try {
          const result = await axios.get(
            `http://localhost:1216/searchList/title`,
            {
              params: {
                value: searchValue,
              },
            }
          );
          // dispatch(setSearchList(result.data));
          setSearchList(result.data);
        } catch (error) {
          console.log(error);
        }
      };
      getSearchResult();
    }
  }, [searchValue]);

  console.log(searchList);
  console.log(searchValue);
  return (
    <TitleContainer>
      <h2
        className="findResult_h1"
        onClick={() => {
          dispatch(setLimit(searchList.length));
          dispatch(setTitleOpen(true));
        }}
      >
        곡
        <ArrowForwardIos className="arrowIcon" />
      </h2>
      <TableContainer component={Paper} className="tabItem">
        <Table sx={{ minWidth: 650 }} aria-label="chart table">
          <TableHeader></TableHeader>
          <TableBody>
            {searchList.map((list, i) =>
              i < limit ? <TableItems key={i} list={list} /> : null
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </TitleContainer>
  );
}
export default SearchTitle;
