import styled from "styled-components";
import { QueueMusic } from "@mui/icons-material";
import { useSelector } from "react-redux";
import { useState } from "react";
const PlayListContainer = styled.div`
  width: 400px;
  background: #262626;
  opacity: 90%;
  z-index: 10;
  position: fixed;
  right: 0;
  top: 0;
  bottom: 100px;
  overflow: hidden;
  padding: 20px;
  text-align: left;
  .playListHeader {
    height: 50px;
    padding: 0 10px;
    border-bottom: 1px solid #131313;
  }
  .playListItem {
    display: flex;
  }
`;
function PlayList() {
  let songs = useSelector((state) => state.audio.songs);
  console.log(songs);
  return (
    <PlayListContainer>
      <div className="playListHeader">
        <h4>재생목록</h4>
      </div>
      <div className="playListContent">
        {songs.map((list, i) => (
          <div key={i} className="playListItem">
            <img
              style={{ width: "50px", height: "50px" }}
              src={process.env.PUBLIC_URL + `/img/${list.cover_img}`}
            ></img>
            <div>{list.title}</div>
            <div>{list.artist}</div>
          </div>
        ))}
      </div>
    </PlayListContainer>
  );
}
export default PlayList;
