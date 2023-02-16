import styled from "styled-components";
import React from "react";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import { FormatListBulleted, Info, PlayArrow } from "@mui/icons-material";
import { useSelector, useDispatch } from "react-redux";
import PlayList from "./PlayList";
import { useState } from "react";
import {
  handleClickNext,
  handleClickPrevious,
  setPlayerPlaying,
  setSong,
} from "store/AudioSlice";
import { fontSize } from "@mui/system";
import { AudioActions } from "store/AudioSlice";
import { useRef } from "react";

function Player() {
  const playerRef = useRef();
  let src = useSelector((state) => state.audio.src);
  let albumImg = useSelector((state) => state.audio.albumImage);
  let title = useSelector((state) => state.audio.title);
  let artist = useSelector((state) => state.audio.artist);
  let currentIndex = useSelector((state) => state.audio.currentIndex);
  const [playListOpen, setPlayListOpen] = useState(false);
  let listSongs = useSelector((state) => state.audio.listSongs);
  // const [currentIndex, setCurrentIndex] = useState(0);

  const dispatch = useDispatch();

  console.log(listSongs.length);
  console.log("currentIndex" + currentIndex);
  // let setSongs = () => {
  //   dispatch(
  //     setSong({
  //       title: listSongs[currentIndex].title,
  //       artist: listSongs[currentIndex].artist,
  //       albumImage: listSongs[currentIndex].cover_img,
  //       src: listSongs[currentIndex].file_path,
  //     })
  //   );
  // };

  const handleClickPrevious = () => {
    dispatch(AudioActions.setCurrentIndexm());
    // setCurrentIndex((currentTrack) =>
    //   currentTrack === 0 ? listSongs.length - 1 : currentTrack - 1
    // );
    // setSongs();
    // console.log("click previos");
  };
  const handleClickNext = () => {
    dispatch(AudioActions.setCurrentIndexp());
    // setCurrentIndex((currentIndex) =>
    //   currentIndex === listSongs.length - 1 ? 0 : currentIndex + 1
    // );

    // setSongs();
    // console.log("click next");
  };

  return (
    <>
      <PlayerContainer>
        <img
          src={
            process.env.PUBLIC_URL + `/img/${listSongs[currentIndex].cover_img}`
          }
          alt="albumImg"
        />
        <div className="player-text">
          <strong> {listSongs[currentIndex].title}</strong>
          <br />
          <span style={{ fontSize: "12px", color: "#989898" }}>
            {listSongs[currentIndex].artist}
          </span>
        </div>

        <AudioPlayer
          ref={playerRef}
          autoPlayAfterSrcChange={true}
          onClickPrevious={handleClickPrevious}
          onClickNext={handleClickNext}
          src={
            process.env.PUBLIC_URL + `/mp3/${listSongs[currentIndex].file_path}`
          }
          showSkipControls={true}
          showJumpControls={false}
          onEnded={() => dispatch(AudioActions.clickNext())}
          volume={0.5}
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
