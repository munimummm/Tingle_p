import styled from "styled-components";
import React from "react";
import AudioPlayer from "react-h5-audio-player";
import {
  SkipPrevious,
  Shuffle,
  Repeat,
  RepeatOne,
  SkipNext,
  PlayArrow,
  Pause,
} from "@mui/icons-material";

const PlayerContainer = styled.div`
  width: 100%;
  height: 100px;
  background: #191919;
  z-index: 2;
  position: fixed;
  left: 0;
  bottom: 0;
  display: flex;
  justify-content: space-between;
  align-content: center;
  color: #fff;
`;

function Player() {
  return (
    <>
      <PlayerContainer>
        <AudioPlayer></AudioPlayer>
        {/* <img className="player-img" alt="">
        <div className="player-title"></div> */}
        <div>
          <Shuffle

          // className="player-shuffle"
          // className="player-control2 fa-solid fa-shuffle"
          ></Shuffle>

          <Repeat

          // className="player-repeat"
          // className="player-control2 fa-solid fa-repeat"
          ></Repeat>
          <RepeatOne

          // className="player-repeat-1"
          // className="player-control fa-solid fa-1"
          // style="display: none"
          ></RepeatOne>
        </div>
        <SkipPrevious></SkipPrevious>
        <PlayArrow></PlayArrow>
        <Pause></Pause>
        <SkipNext></SkipNext>
        {/* <span className="currentTime"></span> */}
        {/* <div className="progress">
            <div className="progress-bar" role="progressbar" aria-valuemin="0" aria-valuemax="100"></div>
        </div> */}
        {/* <span className="duration"></span>
        <i className="player-volume" className="player-control fa-solid fa-volume-high"></i>
        <i className="player-volume-mute" className="player-control fa-solid fa-volume-xmark" style="display: none"></i>
        <input className="player-volume-range" type="range" className="form-range" value="100">
        <i className="player-list" className="player-control fa-solid fa-list"></i> */}
      </PlayerContainer>
    </>
  );
}
export default Player;
