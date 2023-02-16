import { ImageAspectRatio, MoreVert, PlayArrow } from "@mui/icons-material";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { setAddPlayList, setSong } from "store/AudioSlice";
import { AudioActions } from "store/AudioSlice";
function PlayButton({ onPlay, list }) {
  const dispatch = useDispatch();
  let listSongs = useSelector((state) => state.audio.listSongs);
  // console.log(list);
  console.log(listSongs);
  const addSong = () => {
    if (!listSongs.includes(list)) {
      dispatch(AudioActions.setAddPlayList(list));
    } else {
      console.log("중복곡입니다");
    }
  };

  //중복곡 막기
  //버튼누를때 곡변경하기
  return (
    <PlayArrow
      style={{ cursor: "pointer" }}
      onClick={() => {
        addSong();
        onPlay();
      }}
    ></PlayArrow>
  );
}
export default PlayButton;
