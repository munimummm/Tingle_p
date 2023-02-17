import styled from "styled-components";
import React from "react";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import { FormatListBulleted, Info, PlayArrow } from "@mui/icons-material";
import { useSelector, useDispatch } from "react-redux";
import PlayList from "./PlayList";
import { useState } from "react";

import { AudioActions } from "store/AudioSlice";
import { useRef } from "react";
import { useEffect } from "react";

function Player() {
  const playerRef = useRef();
  const dispatch = useDispatch();
  let file_path = useSelector((state) => state.audio.file_path);
  let cover_img = useSelector((state) => state.audio.cover_img);
  let title = useSelector((state) => state.audio.title);
  let artist = useSelector((state) => state.audio.artist);
  let currentIndex = useSelector((state) => state.audio.currentIndex);
  let listSongs = useSelector((state) => state.audio.listSongs);
  const isPlaying = useSelector((state) => state.audio.isPlaying);
  const [playListOpen, setPlayListOpen] = useState(false);

  // if (!file_path) {
  //   return null;
  // }
  console.log(listSongs.length);
  console.log("currentIndex" + currentIndex);

  const handleClickPrevious = () => {
    dispatch(AudioActions.setCurrentIndexPrevious());
    dispatch(
      AudioActions.setSong({
        songs: listSongs,
      })
    );
  };
  const handleClickNext = () => {
    dispatch(AudioActions.setCurrentIndexNext());
    dispatch(
      AudioActions.setSong({
        songs: listSongs,
      })
    );
  };

  return (
    <>
      <PlayerContainer>
        <img src={cover_img} alt="albumImg" />
        <div className="player-text">
          <strong> {title}</strong>
          <br />
          <span style={{ fontSize: "12px", color: "#989898" }}>{artist}</span>
        </div>

        <AudioPlayer
          ref={playerRef}
          autoPlayAfterSrcChange={true}
          onClickPrevious={handleClickPrevious}
          onClickNext={handleClickNext}
          src={file_path}
          showSkipControls={true}
          showJumpControls={false}
          onEnded={handleClickNext}
          volume={0.5}
          onPlay={() => dispatch(AudioActions.setIsPlaying(true))}
          onPause={() => dispatch(AudioActions.setIsPlaying(false))}
        ></AudioPlayer>
        <FormatListBulleted
          style={{
            width: "36px",
            height: "36px",
            margin: "36px",
            color: "#868686",
          }}
          onClick={() => {
            setPlayListOpen(!playListOpen);
          }}
        />
        {playListOpen === true ? <PlayList /> : null}
      </PlayerContainer>
    </>
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
  .player-text {
    width: 300px;
    color: #fff;
    line-height: 30px;
    font-size: 14px;
    vertical-align: top;
    margin-top: 18px;
  }
`;
