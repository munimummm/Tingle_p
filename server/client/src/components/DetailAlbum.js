import { Paper, Table, TableBody, TableContainer } from "@mui/material";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import TableHeader from "./TableHeader";
import TableItems from "./TableItems";

const AlbumContainer = styled.div`
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
        border-radius: 4%;
      }
    }

    .trackInfo {
      vertical-align: middle;
      display: table-cell;
      position: relative;
      padding-left: 40px;
      cursor: pointer;
      padding-top: 24px;
    }
    .trackText {
      display: flex;
      align-items: center;
    }
    .firstText {
      font-size: 2em;
    }

    .dd {
      margin-top: 7px;
      margin-bottom: 14px;
      text-decoration: none;
    }
    .dt {
      float: left;
      font-size: 1em;
      margin-right: 20px;
      vertical-align: middle;
    }
    .select_icon {
      font-size: 15px;
      width: 100px;
      background: #000;
      color: #fff;
      text-align: center;
      border-radius: 4%;
      line-height: 40px;
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

function DetailAlbum() {
  let detailList = useSelector((state) => state.detail.list);
  console.log(detailList);
  const [searchList, setSearchList] = useState([]);
  useEffect(() => {
    const getDetailResult = async () => {
      try {
        const result = await axios.get(
          `http://localhost:8080/detailList/album`,
          {
            params: {
              value: detailList.album,
            },
          }
        );
        console.log(result.data);
        setSearchList(result.data);
      } catch (error) {
        console.log(error);
      }
    };
    getDetailResult();
  }, [detailList]);

  return (
    <AlbumContainer>
      <div className="detailInfo">
        <div className="imgWrap">
          <img src={`/img/${detailList.cover_img}`} alt="album_img" />
        </div>
        <div className="trackInfo">
          <div className="trackText">
            <div className="dt">앨범 </div>
            <Link to="#" className="detail_title">
              <div className="dd firstText">{detailList.album}</div>
            </Link>
          </div>
          <div>
            <div className="dt">가수 </div>
            <Link
              to={`/detail/artist/${detailList.artist}`}
              className="detail_album"
            >
              <div className="dd"> {detailList.artist}</div>
            </Link>
          </div>
        </div>
      </div>
      <div className="tabText">수록곡</div>
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
    </AlbumContainer>
  );
}
export default DetailAlbum;
