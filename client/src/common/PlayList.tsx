import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { setPlayListOpen } from "../store/PlayListSlice";
import { ExpandMore } from "@mui/icons-material";

const PlayListContainer = styled.div`
  width: 400px;
  background: #262626;
  opacity: 90%;
  z-index: 50;
  position: fixed;
  right: 0;
  top: 0;
  bottom: 100px;
  overflow: hidden;
  text-align: left;
  overflow-y: auto;
  @media ${(props) => props.theme.mobile} {
    width: 100%;
  }

  .playListHeader {
    display: flex;
    align-items: center;
    height: 75px;
    padding: 0 20px;
    color: ${(props) => props.theme.mainColor};
    border-bottom: 2px solid rgba(240, 240, 240, 0.2);
    justify-content: space-between;
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
    width: 280px;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }

  .artistText {
    font-size: 12px;
    color: #989898;
  }
  .focusedText {
    color: ${(props) => props.theme.mainColor};
  }
`;
const PlayListItem = styled.div`
  &.focused {
    background: #393939;
  }
`;

interface PlayListState {
  audio: {
    listSongs: any[];
    currentIndex: number;
  };
}

function PlayList() {
  const dispatch = useDispatch();
  const listSongs = useSelector(
    (state: PlayListState) => state.audio.listSongs
  );
  const currentIndex = useSelector(
    (state: PlayListState) => state.audio.currentIndex
  );

  return (
    <div>
      <PlayListContainer>
        <div className="playListHeader">
          <h4>재생목록</h4>
          <div
            onClick={() => {
              dispatch(setPlayListOpen(false));
            }}
          >
            <ExpandMore
              style={{ color: "#fff", opacity: "0.6" }}
              fontSize="large"
            />
          </div>
        </div>
        <div className="playListContent">
          {listSongs.map((list, i) => (
            <PlayListItem
              key={i}
              className={i === currentIndex ? "focused" : ""}
            >
              <img
                style={{ width: "50px", height: "50px" }}
                src={`/img/${list.cover_img}`}
                alt="album_img"
              ></img>
              <div
                className={
                  i === currentIndex
                    ? "focusedText playListText"
                    : "playListText"
                }
              >
                <strong className="titleText"> {list.title}</strong>
                <br />
                <p
                  className={
                    i === currentIndex ? "focusedText artistText" : "artistText"
                  }
                >
                  {list.artist}
                </p>
              </div>
            </PlayListItem>
          ))}
        </div>
      </PlayListContainer>
    </div>
  );
}
export default PlayList;
