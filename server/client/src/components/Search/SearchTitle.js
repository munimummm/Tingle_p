import { Table, TableBody, TableContainer, Paper } from "@mui/material";
import { ArrowForwardIos } from "@mui/icons-material";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setLimit, setTitleOpen } from "store/SearchSlice";
import styled from "styled-components";
import TableHeader from "components/TableHeader";
import TableItems from "components/TableItems";
import { commonAxios } from "api/CommonAxios";

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
  let dispatch = useDispatch();
  let limit = useSelector((state) => state.search.limit);
  const [searchList, setSearchList] = useState([]);

  useEffect(() => {
    if (searchValue.length > 0) {
      const getSearchResult = async () => {
        try {
          const result = await commonAxios.get(`/searchList/title`, {
            params: {
              value: searchValue,
            },
          });

          setSearchList(result.data);
        } catch (error) {
          console.log(error);
        }
      };
      getSearchResult();
    }
  }, [searchValue]);

  return (
    <>
      {0 < searchList.length ? (
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
      ) : (
        <div className="noResult" style={{ fontSize: "20px" }}>
          노래 검색 결과가 없습니다
          <br />
          검색어를 다시 입력해 주세요
        </div>
      )}
    </>
  );
}
export default SearchTitle;
