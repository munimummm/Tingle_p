import styled from "styled-components";
import { useEffect, useState } from "react";

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
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { setChartLists, setGenre, setLoading } from "store/ListSlice";
import Loading from "./Loading";

function Chart() {
  let dispatch = useDispatch();
  let genre = useSelector((state) => state.list.genre);
  let loading = useSelector((state) => state.list.loading);

  const [currentTab, setcurrentTab] = useState(0);
  const buttonList = [
    "TOP100",
    "발라드",
    "락",
    "힙합",
    "댄스",
    "재즈",
    "클래식",
    "팝",
  ];
  console.log(genre);

  useEffect(() => {
    if (genre === "TOP100") {
      const getTop100 = async () => {
        dispatch(setLoading(true));
        const result = await axios.get(`http://localhost:1216/chartList100`);
        dispatch(setChartLists(result.data));
        dispatch(setLoading(false));
        console.log(result.data);
      };
      getTop100();
    } else {
      const getGenreList = async () => {
        const result = await axios.get(`http://localhost:1216/chartList`, {
          params: {
            genre: genre,
          },
        });
        dispatch(setChartLists(result.data));
      };

      getGenreList();
    }
  }, [genre]);

  const buttonChange = (list, i) => {
    dispatch(setGenre(list));
    setcurrentTab(i);
  };

  return (
    <div>
      {loading ? (
        <Loading></Loading>
      ) : (
        <>
          <div>
            <H1>{buttonList[currentTab]}</H1>
            {buttonList.map((list, i) => (
              <ChartButton
                key={i}
                onClick={() => buttonChange(list, i)}
                className={i === currentTab ? "focused" : ""}
              >
                {list}
              </ChartButton>
            ))}
          </div>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="chart table">
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
                  <TableCell align="center">순위</TableCell>
                  <TableCell align="left">곡/앨범</TableCell>
                  <TableCell></TableCell>
                  <TableCell align="right">아티스트</TableCell>
                  <TableCell align="right">듣기</TableCell>
                  <TableCell align="right">더보기</TableCell>
                </TableRow>
              </TableHead>
              <ChartList></ChartList>
            </Table>
          </TableContainer>
        </>
      )}
    </div>
  );
}
export default Chart;
let H1 = styled.h1`
  font-weight: 500;
  margin-top: 10px;
`;

let ChartButton = styled.button`
  height: 32px;
  padding: 0 15px;
  font-size: 16px;
  line-height: 32px;
  text-align: center;
  border-radius: 16px;
  border: 1px solid #9147ff;
  vertical-align: top;
  display: inline-block;
  margin: 38px 10px 30px 0px;

  background: #fff;
  cursor: pointer;
  &.focused {
    background: #9147ff;
    color: white;
  }
`;
