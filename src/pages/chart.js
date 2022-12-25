import styled from "styled-components";
import { useState } from "react";

import { DataGrid } from "@mui/x-data-grid";

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

import ChartList from "components/ChartList";

let H1 = styled.h1`
  margin-top: 38px;
  margin-bottom: 30px;
  font-weight: 500;
`;
let ChartButton = styled.button`
  height: 32px;
  padding: 0 15px;
  font-size: 16px;
  line-height: 32px;
  text-align: center;
  border-radius: 16px;
  border: 0;
  vertical-align: top;
  display: inline-block;
  background: #fff;
  margin-bottom: 30px;

  &:active {
    background: #9147ff;
    color: white;
  }
`;

function Chart() {
  // const navigate = useNavigate();

  const [genre, setGenre] = useState("");
  const buttonChange = (e) => {
    console.log(e.target.value);
    setGenre(e.target.value);
  };
  return (
    <div>
      <div>
        <H1>TOP100</H1>
        <ChartButton onClick={() => {}}>TOP100</ChartButton>
        <ChartButton value={"발라드"} onClick={buttonChange}>
          발라드
        </ChartButton>
        <ChartButton value={"락"} onClick={buttonChange}>
          락
        </ChartButton>
        <ChartButton value={"힙합"} onClick={buttonChange}>
          힙합
        </ChartButton>
        <ChartButton value={"댄스"} onClick={buttonChange}>
          댄스
        </ChartButton>
        <ChartButton value={"재즈"} onClick={buttonChange}>
          재즈
        </ChartButton>
        <ChartButton value={"클래식"} onClick={buttonChange}>
          클래식
        </ChartButton>
        <ChartButton value={"팝"} onClick={buttonChange}>
          팝
        </ChartButton>
      </div>
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
          <ChartList genre={genre}></ChartList>
        </Table>
      </TableContainer>
    </div>
  );
}
export default Chart;
