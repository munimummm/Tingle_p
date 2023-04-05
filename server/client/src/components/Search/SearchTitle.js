import { Table, TableBody, TableContainer, Paper } from "@mui/material";
import { ArrowForwardIos } from "@mui/icons-material";
import { setTitleOpen } from "store/SearchSlice";
import styled from "styled-components";
import TableHeader from "components/TableHeader";
import TableItems from "components/TableItems";
import useSearchResult from "hooks/useSearchResult";

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
  const { searchList, limit, addList } = useSearchResult("title", searchValue);

  return (
    <>
      <TitleContainer>
        <h2
          className="findResult_h1"
          onClick={() => {
            addList(setTitleOpen);
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
    </>
  );
}

export default SearchTitle;
