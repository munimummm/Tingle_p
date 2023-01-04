import styled from "styled-components";
import { useEffect, useState } from "react";
import axios from "axios";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  ButtonGroup,
} from "@mui/material";
const HeplContainer = styled.div`
  width: 100%;
  height: 130px;
  margin-bottom: 10px;
`;
function HelpCenter() {
  return (
    <HeplContainer>
      <h1>고객센터</h1>
      <ButtonGroup variant="contained">
        <Button>공지사항</Button>
        <Button>FAQ</Button>
        <Button>1:1문의</Button>
      </ButtonGroup>
      <h2>공지사항</h2>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }}>
          <TableHead>
            <TableRow style={{ display: "flex" }}>
              <TableCell>번호</TableCell>
              <TableCell>분류</TableCell>
              <TableCell>제목</TableCell>
              <TableCell align="right">날짜</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>1</TableCell>
              <TableCell align="right">공지사항</TableCell>
              <TableCell align="right">안녕하세요 제목입니다</TableCell>
              <TableCell align="right">2021년 2월 3일</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </HeplContainer>
  );
}
export default HelpCenter;
