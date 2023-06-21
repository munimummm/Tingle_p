import React from "react";

import styled from "styled-components";
import { useCallback, useEffect } from "react";
import {
  Table,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setChartLists, setGenre, setLoading } from "../store/AudioSlice";
import { commonAxios } from '../api/CommonAxios';
import Loading from '../components/Loading';
import { setChartLists } from '../store/ListSlice';

const ChartContainer = styled.div`
  margin-top: 20px;
  h1 {
    font-weight: 500;
    margin-bottom: 38px;
  }

  @media ${(props) => props.theme.mobile} {
    .moblie-chart {
      display: none;
    }
  }
`;

const ChartButton = styled.button`
  height: 32px;
  padding: 0 15px;
  font-size: 16px;
  line-height: 32px;
  text-align: center;
  border-radius: 16px;
  border: 1px solid #9147ff;
  vertical-align: top;
  display: inline-block;
  margin-right: 10px;
  margin-bottom: 10px;
  background: #fff;
  cursor: pointer;
  &.focused {
    background: #9147ff;
    color: white;
  }
`;
function Chart() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const genre = useSelector((state) => state.list.genre);
  const loading = useSelector((state) => state.list.loading);
  const buttonList = [
    "TOP50",
    "발라드",
    "락",
    "힙합",
    "댄스",
    "재즈",
    "클래식",
    "팝",
  ];

  const getChartList = useCallback(
    async (genre) => {
      dispatch(setLoading(true));
      try {
        let result;
        if (genre === "TOP50") {
          result = await commonAxios.get(`/chartList100`);
        } else {
          result = await commonAxios.get(`/chartList`, {
            params: {
              genre: genre,
            },
          });
        }
        dispatch(setChartLists(result.data));
      } catch (error) {
        console.log(error);
      }
      dispatch(setLoading(false));
    },
    [dispatch]
  );

  useEffect(() => {
    getChartList(genre);
  }, [genre, getChartList]);

  return (
    <div>
      {loading ? (
        <Loading></Loading>
      ) : (
        <ChartContainer>
          <div className="buttonBox" style={{ marginBottom: "20px" }}>
            <h1>{genre}</h1>
            {buttonList.map((list, i) => (
              <ChartButton
                key={i}
                onClick={() => {
                  dispatch(setGenre(list));
                  navigate(`/chart/${i}`);
                }}
                className={list === genre ? "focused" : ""}
              >
                {list}
              </ChartButton>
            ))}
          </div>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="chart table">
              <TableHead>
                <TableRow>
                  <TableCell align="center">순위</TableCell>
                  <TableCell align="left">곡/앨범</TableCell>
                  <TableCell></TableCell>
                  <TableCell align="right">아티스트</TableCell>
                  <TableCell align="right">듣기</TableCell>
                  <TableCell className="moblie-chart" align="right">
                    더보기
                  </TableCell>
                </TableRow>
              </TableHead>
              <ChartList></ChartList>
            </Table>
          </TableContainer>
        </ChartContainer>
      )}
    </div>
  );
}
export default Chart;
