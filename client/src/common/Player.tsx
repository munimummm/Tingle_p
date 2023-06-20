import styled from "styled-components";
import React from "react";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import { FormatListBulleted, PlayArrow, Pause } from "@mui/icons-material";
import { useSelector, useDispatch } from "react-redux";
import PlayList from "./PlayList";

import { AudioActions } from "../store/AudioSlice";
import { useRef } from "react";
import { useEffect } from "react";
import { setPlayListOpen } from "../store/PlayListSlice";
const PlayerContainer = styled.div`
  grid-area: footer;
  width: 100%;
  height: 100px;
  background: #131313;
  z-index: 3333;
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
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .playListIcon {
    color: #868686;
  }
  .onPlayList {
    color: #fff;
  }

  @media ${(props) => props.theme.mobile} {
    .moblie-player {
      display: none;
    }
    .player-text {
      margin-left: 20px;
    }
  }
`;

interface PlayerState {
  playList: { playListOpen: boolean };
  audio: {
    isPlaying: boolean;
    file_path: string;
    cover_img: string;
    title: string;
    artist: string;
    currentIndex: number;
    listSongs: any[];
  };
}

function Player() {
  const playerRef = useRef<AudioPlayer>(null);
  const dispatch = useDispatch();
  const playListOpen = useSelector(
    (state: PlayerState) => state.playList.playListOpen
  );
  const isPlaying = useSelector((state: PlayerState) => state.audio.isPlaying);
  const file_path = useSelector((state: PlayerState) => state.audio.file_path);
  const cover_img = useSelector((state: PlayerState) => state.audio.cover_img);
  const title = useSelector((state: PlayerState) => state.audio.title);
  const artist = useSelector((state: PlayerState) => state.audio.artist);
  const currentIndex = useSelector(
    (state: PlayerState) => state.audio.currentIndex
  );
  const listSongs = useSelector((state: PlayerState) => state.audio.listSongs);
  useEffect(() => {
    if (isPlaying) {
      playerRef.current?.audio.current?.play();
    } else {
      playerRef.current?.audio.current?.pause();
    }
  }, [isPlaying]);
  if (!file_path) {
    return null;
  }

  const handleClickPrevious = () => {
    dispatch(AudioActions.setCurrentIndexPrevious());
    dispatch(AudioActions.setSong(listSongs[currentIndex]));
  };
  const handleClickNext = () => {
    dispatch(AudioActions.setCurrentIndexNext());
    dispatch(AudioActions.setSong(listSongs[currentIndex]));
  };

  return (
    <>
      <PlayerContainer>
        <img className="moblie-player" src={cover_img} alt="albumImg" />
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
          customIcons={{
            play: <PlayArrow sx={{ fontSize: "52px" }} />,
            pause: <Pause sx={{ fontSize: "52px" }} />,
          }}
        ></AudioPlayer>
        <FormatListBulleted
          className={
            playListOpen === true ? "playListIcon onPlayList" : "playListIcon"
          }
          style={{
            width: "36px",
            height: "36px",
            margin: "36px",
          }}
          onClick={() => {
            dispatch(setPlayListOpen(!playListOpen));
          }}
        />
        {playListOpen && <PlayList />}
      </PlayerContainer>
    </>
  );
}
export default Player;
