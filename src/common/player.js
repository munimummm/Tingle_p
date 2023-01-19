import styled from "styled-components";
import React from "react";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import { QueueMusic, PlayArrow } from "@mui/icons-material";
import { useSelector, useDispatch } from "react-redux";

function Player() {
  let url = useSelector((state) => state.audio.src);
  let albumImg = useSelector((state) => state.audio.albumImage);
  let title = useSelector((state) => state.audio.title);
  let artist = useSelector((state) => state.audio.artist);
  // let chartLists = useSelector((state) => state.list.list);
  return (
    <PlayerContainer>
      <img src={albumImg} alt="albumImg" />
      <div className="player-title">
        {title} <br />
        {artist}
      </div>
      <AudioPlayer layout="horizontal-reverse" src={url}></AudioPlayer>
      <QueueMusic style={{ fontSize: "30px", margin: "20px" }}></QueueMusic>
    </PlayerContainer>
  );
}
export default Player;

const PlayerContainer = styled.div`
  width: 100%;
  height: 100px;
  background: #131313;
  z-index: 2;
  position: fixed;
  left: 0;
  bottom: 0;
  display: flex;
  align-content: center;
  color: #fff;
  img {
    width: 82px;
    height: 60px;
    margin: 15px;
  }
  .player-title {
    width: 200px;
    color: white;
    line-height: 50px;
  }
`;
