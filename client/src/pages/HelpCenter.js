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
  Button,
  ButtonGroup,
} from "@mui/material";
import { ExpandLess, ExpandMore } from "@mui/icons-material";

import AlertDialog from "components/AlertDialog";
import { useNavigate } from "react-router-dom";
const HelpContainer = styled.div`
  width: 100%;
  margin-bottom: 10px;
  margin-top: 20px;
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
  const navigate = useNavigate();
  const [modal, setModal] = useState(false);
  const [index, setIndex] = useState(0);
  const [open, setOpen] = useState(false);
  const [helpList, setHelpList] = useState([]);
  const [type, setType] = useState("공지사항");
  useEffect(() => {
    const typeClick = async () => {
      try {
        const result = await axios.get(`http://localhost:8080/helpCenter`, {
          params: {
            type: type,
          },
        });
        setHelpList(result.data);
      } catch (error) {
        console.log(error);
      }
    };
    typeClick();
  }, [type]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <HelpContainer>
      <div className="helpHeader">
        <h1>고객센터</h1>
        <ButtonGroup variant="contained" color="success">
          <Button
            onClick={() => {
              setType("공지사항");
              navigate(`/helpCenter/notice`);
            }}
          >
            공지사항
          </Button>
          <Button
            onClick={() => {
              setType("FAQ");
              navigate(`/helpCenter/faq`);
            }}
          >
            FAQ
          </Button>
          <Button onClick={handleClickOpen}>1:1문의</Button>
        </ButtonGroup>
        <h2>{type}</h2>
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
            {helpList.map((list, i) => (
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
                  <TableCell
                    component="th"
                    scope="row"
                    sx={{ whiteSpace: "preLine" }}
                  >
                    {list.title}
                  </TableCell>
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
        {open === true ? (
          <AlertDialog
            open={open}
            text={"로그인 후 이용할 수 있습니다."}
            handleClose={handleClose}
          />
        ) : null}
      </TableContainer>
    </HelpContainer>
  );
}

export default HelpCenter;
