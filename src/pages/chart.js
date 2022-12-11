import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { DataGrid } from "@mui/x-data-grid";
import { MoreVert, PlayArrow } from "@mui/icons-material";
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

  return (
    <div>
      <div>
        <H1>TOP100</H1>
        <ChartButton>TOP100</ChartButton>
        <ChartButton>발라드</ChartButton>
        <ChartButton>락</ChartButton>
        <ChartButton>힙합</ChartButton>
        <ChartButton>댄스</ChartButton>
        <ChartButton>재즈</ChartButton>
        <ChartButton>클래식</ChartButton>
        <ChartButton>팝</ChartButton>
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
              <TableCell align="right">아티스트</TableCell>
              <TableCell align="right">듣기</TableCell>
              <TableCell align="right">더보기</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell padding="checkbox">
                  <Checkbox color="primary" />
                </TableCell>
                <TableCell>{row.num}</TableCell>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.artist}</TableCell>
                <TableCell align="right">
                  <PlayArrow />
                </TableCell>
                <TableCell align="right">
                  <MoreVert />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
export default Chart;

function createData(num, name, artist) {
  return { num, name, artist };
}

const rows = [
  createData(1, "Frozen yoghurt", "하"),
  createData(2, "Ice cream sandwich", "후"),
  createData(3, "Eclair", "히"),
  createData(4, "Cupcake", "헤"),
  createData(5, "Gingerbread", "로"),
];
