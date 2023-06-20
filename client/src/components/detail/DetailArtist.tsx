import React from "react";

import styled from "styled-components";
import { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Table, TableBody, TableContainer, Paper } from "@mui/material";
import TableHeader from "../TableHeader";
import TableItems from "../TableItems";
import { commonAxios } from "../../api/CommonAxios";
import { DetailListType } from "../../types";

const ArtistContainer = styled.div`
  max-width: 1600px;
  min-width: 800px;
  padding-top: 50px;
  .detailInfo {
    width: 100%;
    padding-left: 50px;
    box-sizing: border-box;
    position: relative;
    display: table;
    table-layout: fixed;
    .imgWrap {
      display: table-cell;
      width: 240px;
      height: 240px;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 50%;
      }
    }

    .trackInfo {
      vertical-align: middle;
      display: table-cell;
      position: relative;
      padding-left: 40px;
      cursor: pointer;
      padding-top: 24px;
      font-size: 2em;
    }
  }
  .tabText {
    width: 70px;
    height: 30px;
    padding: 8px;
    line-height: 15px;
    margin-top: 35px;

    color: #fff;
    background: #9147ff;
    text-align: center;
    border-radius: 20px;
  }
  .tabItem {
    margin-top: 35px;
  }
`;
function DetailArtist() {
  const detailList = useSelector((state: DetailListType) => state.detail.list);
  const [searchList, setSearchList] = useState([]);

  useEffect(() => {
    const getDetailResult = async () => {
      try {
        const result = await commonAxios.get(`/detailList/artist`, {
          params: {
            value: detailList.artist,
          },
        });

        setSearchList(result.data);
      } catch (error) {
        console.log(error);
      }
    };
    getDetailResult();
  }, [detailList]);

  return (
    <ArtistContainer>
      <div className="detailInfo">
        <div className="imgWrap">
          <img src={`/img/${detailList.artist_img}`} alt="artist_img" />
        </div>
        <div className="trackInfo">
          <Link to="#" className="detail_artist">
            {detailList.artist}
          </Link>
        </div>
      </div>
      <div className="tabText">곡</div>
      <TableContainer component={Paper} className="tabItem">
        <Table sx={{ minWidth: 650 }} aria-label="chart table">
          <TableHeader></TableHeader>
          <TableBody>
            {searchList.map((list, i) => (
              <TableItems key={i} list={list} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </ArtistContainer>
  );
}
export default DetailArtist;
