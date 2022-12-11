import styled from "styled-components";
import React from "react";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import { QueueMusic } from "@mui/icons-material";

const PlayerContainer = styled.div`
  width: 100%;
  height: 100px;
  background: orange;
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

function Player() {
  return (
    <PlayerContainer>
      <img alt="" />
      <div className="player-title"></div>
      <AudioPlayer></AudioPlayer>
      <QueueMusic style={{ fontSize: "30px", margin: "20px" }}></QueueMusic>
    </PlayerContainer>
  );
}
export default Player;
