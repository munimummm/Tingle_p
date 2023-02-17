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
  text-align: left;

  .playListHeader {
    display: flex;
    align-items: center;
    height: 75px;
    padding: 0 20px;
    color: ${(props) => props.theme.mainColor};
    border-bottom: 2px solid rgba(240, 240, 240, 0.2);
  }
  .playListContent {
    display: flex;
    flex-direction: column;
  }
  .playListText {
    display: inline-block;
    line-height: 25px;
    font-size: 14px;
    vertical-align: top;
    margin-top: 18px;
    &.focused {
      color: ${(props) => props.theme.mainColor};
    }
    .artistText {
      font-size: 12px;
      color: #989898;
    }
  }
`;
const PlayListItem = styled.div`
  &.focused {
    background: #393939;
  }
`;

function PlayList() {
  let listSongs = useSelector((state) => state.audio.listSongs);
  console.log(listSongs);
  let currentIndex = useSelector((state) => state.audio.currentIndex);

  return (
    <PlayListContainer>
      <div className="playListHeader">
        <h4>재생목록</h4>
      </div>
      <div className="playListContent">
        {listSongs.map((list, i) => (
          <PlayListItem key={i} className={i === currentIndex ? "focused" : ""}>
            <img
              style={{ width: "50px", height: "50px" }}
              src={process.env.PUBLIC_URL + `/img/${list.cover_img}`}
            ></img>
            <div
              className={
                i === currentIndex ? "focused playListText" : "playListText"
              }
            >
              <strong> {list.title}</strong>
              <br />
              <p className="artistText">{list.artist}</p>
            </div>
          </PlayListItem>
        ))}
      </div>
    </PlayListContainer>
  );
}
export default PlayList;
