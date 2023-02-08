import { ImageAspectRatio, MoreVert, PlayArrow } from "@mui/icons-material";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setAddPlayList } from "store/AudioSlice";
function PlayButton({ onPlay, list }) {
  const dispatch = useDispatch();
  return (
    <PlayArrow
      onClick={() => {
        onPlay();
        dispatch(setAddPlayList(list));
      }}
    ></PlayArrow>
  );
}
export default PlayButton;
