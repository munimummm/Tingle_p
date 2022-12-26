import styled from "styled-components";
import { MoreVert, PlayArrow, ArrowForwardIos } from "@mui/icons-material";
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
  .findList {
    list-style: none;
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: 40px;
  }
`;

function Search() {
  return (
    <FindContainer>
      <h1 className="find_h1">검색결과</h1>
      <div className="findTitle_Container">
        <h2 className="findResult_h1">
          곡<ArrowForwardIos />
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
            {/* <ChartList genre={genre}></ChartList> */}
          </Table>
        </TableContainer>
      </div>

      <div id="findArtist_Container">
        <h2 className="findResult_h1">
          가수
          <ArrowForwardIos />
        </h2>
        <div className="findArtist_Container">
          <ul className="findList"></ul>
        </div>
      </div>
      <div className="findAlbum_Container">
        <h2 className="findResult_h1">
          앨범
          <ArrowForwardIos />
        </h2>
        <div className="findAlbum_Container">
          <ul className="findAlbum_List"></ul>
        </div>
      </div>

      <div className="findLyrics_Container">
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
            {/* <ChartList genre={genre}></ChartList> */}
          </Table>
        </TableContainer>
      </div>
    </FindContainer>
  );
}
export default Search;
