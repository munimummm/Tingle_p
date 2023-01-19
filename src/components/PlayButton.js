import { ImageAspectRatio, MoreVert, PlayArrow } from "@mui/icons-material";
import { useState } from "react";

function PlayButton({ onPlay }) {
  return (
    <PlayArrow
      onClick={() => {
        onPlay();
      }}
    ></PlayArrow>
  );
}
export default PlayButton;
