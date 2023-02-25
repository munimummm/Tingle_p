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
import { ExpandLess, ExpandMore } from "@mui/icons-material";

import boardData from "api/boardData";
const HelpContainer = styled.div`
  width: 100%;
  margin-bottom: 10px;
  align-items: center;
  .helpHeader {
    h1 {
      margin-bottom: 30px;
    }
    h2 {
      margin: 20px 0px 10px 0px;
    }
  }
  .modal {
    width: 100%;
    background: #f5f5f5;
  }
`;
function HelpCenter() {
  const [modal, setModal] = useState(false);
  const [board] = useState(boardData);
  const [index, setIndex] = useState(0);
  return (
    <HelpContainer>
      <div className="helpHeader">
        <h1>고객센터</h1>
        <ButtonGroup variant="contained" color="success">
          <Button>공지사항</Button>
          <Button>FAQ</Button>
          <Button>1:1문의</Button>
        </ButtonGroup>
        <h2>공지사항</h2>
      </div>
      <TableContainer>
        <Table sx={{ minWidth: 650 }}>
          <TableHead>
            <TableRow>
              <TableCell>번호</TableCell>
              <TableCell>분류</TableCell>
              <TableCell>제목</TableCell>
              <TableCell align="center">날짜</TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {board.map((list, i) => (
              <>
                <TableRow
                  onClick={() => {
                    setIndex(i);
                    setModal(!modal);
                  }}
                >
                  {" "}
                  <TableCell>{i + 1}</TableCell>
                  <TableCell>{list.type}</TableCell>
                  <TableCell>{list.title}</TableCell>
                  <TableCell align="center">{list.date}</TableCell>
                  <TableCell>
                    {modal === true ? (
                      i === index ? (
                        <ExpandLess />
                      ) : (
                        <ExpandMore />
                      )
                    ) : (
                      <ExpandMore />
                    )}
                  </TableCell>
                </TableRow>
                {modal === true && i === index ? (
                  <TableRow className="modal">
                    <TableCell></TableCell>
                    <TableCell></TableCell>
                    <TableCell colSpan={5}>{list.content}</TableCell>
                  </TableRow>
                ) : null}
              </>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </HelpContainer>
  );
}

export default HelpCenter;
